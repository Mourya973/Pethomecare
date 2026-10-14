# PetHomeCare conversion notes

This version adapts the existing grocery storefront to a pet-care marketplace by changing presentation and seeded product content. The original app architecture and behavior are retained: React + Vite frontend, Express API, Prisma/PostgreSQL, JWT-based authentication, cart, checkout, orders, admin portal, and delivery portal.

## Changes made

- Replaced grocery category labels and slugs with 11 pet-care categories in `client/src/assets/assets.ts`.
- Added locally bundled category imagery under `client/public/pet-categories/`.
- Added 30 locally bundled pet-product images under `client/public/pet-products/`.
- Replaced the homepage hero image and updated user-facing grocery copy, logo text, favicon, login branding, promotion copy, and footer copy to PetHomeCare.
- Updated `server/seed.ts` with 30 pet-care products whose `category` values match the frontend category slugs.
- Preserved the original product fields and all backend/API/database/authentication/cart/checkout/order logic.
- Kept the original USD display and Stripe currency in place to avoid changing payment logic; seeded pet-product prices are adjusted to plausible USD price points.

## Apply the new catalogue to the database

The seed script retains its original behavior: it deletes existing `Product` rows and inserts the PetHomeCare catalogue. Run it only when you intend to replace the old grocery products with the new 30 pet products.

```bash
cd server
npm install
npm run seed
```

Product images are served by the frontend from `/pet-products/...`, so the client must publish the `client/public/pet-products/` directory. Category image URLs use `/pet-categories/...` in the same way.

## Currency and payments

The existing Stripe checkout uses USD. This conversion deliberately leaves Stripe currency, delivery thresholds, tax calculation, authentication, and order processing unchanged. Update payment/currency logic separately only if you intentionally need another billing currency.

## Environment files

Secret-bearing `.env` files are not included in the packaged ZIP. Copy your existing local values from your original source archive into `client/.env` and `server/.env`, or fill in the provided `.env.example` templates. Do not commit populated environment files.

## Run locally

Terminal 1:

```bash
cd server
npm install
npm run server
```

Terminal 2:

```bash
cd client
npm install
npm run dev
```

The client example config uses `http://localhost:5000/api`; update `VITE_BASE_URL` if your backend runs elsewhere.
