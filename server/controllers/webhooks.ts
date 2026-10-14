import { Request, Response } from "express";
import Stripe from "stripe";
import { prisma } from "../config/prisma.js";
import { inngest } from "../inngest/index.js";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export const stripeWebhook = async (
  request: Request,
  response: Response,
): Promise<void> => {
  if (!stripe) {
    console.error("Stripe webhook error: STRIPE_SECRET_KEY is not configured.");
    response.status(500).json({
      error: "Payment service is not configured.",
    });
    return;
  }

  if (!endpointSecret) {
    console.error(
      "Stripe webhook error: STRIPE_WEBHOOK_SECRET is not configured.",
    );
    response.status(500).json({
      error: "Webhook signing secret is not configured.",
    });
    return;
  }

  const signature = request.headers["stripe-signature"];

  if (!signature) {
    response.status(400).json({
      error: "Missing Stripe signature.",
    });
    return;
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      request.body,
      signature,
      endpointSecret,
    );
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Unknown signature verification error";

    console.error("Stripe webhook signature verification failed:", message);

    response.status(400).json({
      error: "Invalid webhook signature.",
    });
    return;
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        const session = await stripe.checkout.sessions.list({
          payment_intent: paymentIntent.id,
          limit: 1,
        });

        const orderId = session.data[0]?.metadata?.orderId;

        if (!orderId) {
          console.error(
            "Stripe webhook: No orderId found for payment intent",
            paymentIntent.id,
          );

          response.status(400).json({
            error: "Order metadata is missing.",
          });
          return;
        }

        const paidOrder = await prisma.order.update({
          where: { id: orderId },
          data: { isPaid: true },
        });

        const orderItems = Array.isArray(paidOrder.items)
          ? (paidOrder.items as Array<{
              product: string;
              quantity: number;
            }>)
          : [];

        for (const item of orderItems) {
          await prisma.product.update({
            where: { id: item.product },
            data: {
              stock: {
                decrement: item.quantity,
              },
            },
          });
        }

        await inngest.send({
          name: "order/placed",
          data: { orderId },
        });

        for (const item of orderItems) {
          await inngest.send({
            name: "inventory/stock.updated",
            data: { productId: item.product },
          });
        }

        break;
      }

      case "payment_intent.canceled":
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        const session = await stripe.checkout.sessions.list({
          payment_intent: paymentIntent.id,
          limit: 1,
        });

        const orderId = session.data[0]?.metadata?.orderId;

        if (orderId) {
          await prisma.order.deleteMany({
            where: {
              id: orderId,
              isPaid: false,
            },
          });
        } else {
          console.warn(
            "Stripe webhook: No orderId found for failed payment",
            paymentIntent.id,
          );
        }

        break;
      }

      default:
        console.log("Unhandled Stripe event type:", event.type);
    }

    response.status(200).json({ received: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown webhook processing error";

    console.error("Stripe webhook processing failed:", message);

    response.status(500).json({
      error: "Webhook processing failed.",
    });
  }
};
