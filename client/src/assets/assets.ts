import { TruckIcon, HeartIcon, ClockIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import hero_bg from "./hero_bg.jpeg";
import delivery_truck from "./delivery_truck.svg";

export const assets = {
    delivery_truck,
    hero_bg,
};

export const categoriesData = [
    { slug: "dog-food", name: "Dog Food", image: "/pet-categories/dog-food.webp" },
    { slug: "cat-food", name: "Cat Food", image: "/pet-categories/cat-food.webp" },
    { slug: "treats-chews", name: "Treats & Chews", image: "/pet-categories/treats-chews.webp" },
    { slug: "toys-play", name: "Toys & Play", image: "/pet-categories/toys-play.webp" },
    { slug: "collars-leashes", name: "Collars & Leashes", image: "/pet-categories/collars-leashes.webp" },
    { slug: "grooming-hygiene", name: "Grooming & Hygiene", image: "/pet-categories/grooming-hygiene.webp" },
    { slug: "cat-litter", name: "Cat Litter & Toileting", image: "/pet-categories/cat-litter.webp" },
    { slug: "beds-furniture", name: "Beds & Furniture", image: "/pet-categories/beds-furniture.webp" },
    { slug: "health-wellness", name: "Health & Wellness", image: "/pet-categories/health-wellness.webp" },
    { slug: "bowls-feeding", name: "Bowls & Feeding", image: "/pet-categories/bowls-feeding.webp" },
    { slug: "travel-carriers", name: "Travel & Carriers", image: "/pet-categories/travel-carriers.webp" },
];

export const heroSectionData = {
    description: "Thoughtfully chosen food, toys, grooming tools, and everyday essentials for the pets who make your house a home.",
    hero_image: hero_bg,
    hero_features: [
        { icon: TruckIcon, title: "Easy Delivery", desc: "To your doorstep" },
        { icon: HeartIcon, title: "Everyday Care", desc: "For dogs and cats" },
        { icon: ClockIcon, title: "Quick Ordering", desc: "Your essentials, simply" },
        { icon: ShieldCheckIcon, title: "Secure Checkout", desc: "Protected payments" },
    ],
};

export const deliveryPartnerLoginImage = hero_bg;

export const appPromoBannerData = {
    title: "Everything your pet needs, in one place",
    description: "Explore everyday nutrition, toys, grooming essentials, and cozy accessories for dogs and cats—all from one convenient pet-care store.",
};

export const footerData = {
    brand: {
        name: "PetHomeCare",
        description: "Practical, thoughtfully chosen essentials for pets and the people who love them—from everyday nutrition to playtime, grooming, and comfort.",
        socials: [
            { icon: SiFacebook, link: "#" },
            { icon: SiX, link: "#" },
            { icon: SiInstagram, link: "#" },
        ],
    },

    sections: [
        {
            title: "Shop",
            links: [
                { label: "All Pet Essentials", to: "/products" },
                { label: "Special Offers", to: "/deals" },
                { label: "Track Order", to: "/orders" },
                { label: "Delivery Partner", to: "/delivery" },
            ],
        },
        {
            title: "Customer Service",
            links: [
                { label: "My Account", to: "#" },
                { label: "Order History", to: "/orders" },
                { label: "Saved Addresses", to: "/addresses" },
                { label: "Help Center", href: "#" },
            ],
        },
    ],

    contact: [
        { icon: MapPinIcon, text: "Online pet-care marketplace" },
        { icon: PhoneIcon, text: "Customer support for your orders" },
        { icon: MailIcon, text: "hello@example.com" },
    ],

    bottom: {
        copyright: "© 2026 PetHomeCare. All rights reserved.",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    },
};

export const statusColors: Record<string, string> = {
    Placed: "bg-blue-100 text-blue-700",
    Confirmed: "bg-indigo-100 text-indigo-700",
    Packed: "bg-purple-100 text-purple-700",
    "Out for Delivery": "bg-app-orange/10 text-app-orange",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
};

export const iconsForLeafpad = {
    truck: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
    destination: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
};

export const dummyProducts = [];

export const dummyAdminDashboardData = {
    totalOrders: 1,
    totalUsers: 3,
    totalProducts: 30,
    outOfStock: 0,
    totalPartners: 2,
    recentOrders: [
        {
            shippingAddress: {
                label: "Home",
                address: "New Market Road ",
                city: "New York ",
                state: "NY",
                zip: "876543",
                lat: 40.7128,
                lng: -74.006,
            },
            liveLocation: {
                lat: 40.7128,
                lng: -74.006,
                updatedAt: "2026-04-06T08:41:27.211Z",
            },
            id: "69d366617ed7e54198d67dac",
            user: {
                id: "69bb6caf448f2d818db59122",
                name: "Admin",
                email: "admin@example.com",
            },
            items: [
                {
                    product: "69c22613ae75a98c7cd13b3b",
                    name: "Premium Adult Dog Food 1kg",
                    image: "/pet-products/premium-adult-dog-food.webp",
                    price: 24.99,
                    quantity: 2,
                    unit: "1kg",
                    id: "69d366617ed7e54198d67dad",
                },
                {
                    product: "69c22613ae75a98c7cd13b36",
                    name: "Premium Cat Kibble 1kg",
                    image: "/pet-products/premium-cat-kibble.webp",
                    price: 18.99,
                    quantity: 1,
                    unit: "1kg",
                    id: "69d366617ed7e54198d67dae",
                },
            ],
            paymentMethod: "cash",
            subtotal: 68.97,
            deliveryFee: 0,
            tax: 5.52,
            total: 74.49,
            status: "Delivered",
            statusHistory: [
                {
                    status: "Placed",
                    note: "Order placed successfully",
                    id: "69d366617ed7e54198d67daf",
                    timestamp: "2026-04-06T07:53:05.769Z",
                },
                {
                    status: "Assigned",
                    note: "Assigned to Rahul",
                    id: "69d366ab7ed7e54198d67dbe",
                    timestamp: "2026-04-06T07:54:19.796Z",
                },
                {
                    status: "Packed",
                    note: "Status updated to Packed",
                    id: "69d366b37ed7e54198d67ddc",
                    timestamp: "2026-04-06T07:54:27.171Z",
                },
                {
                    status: "Out for Delivery",
                    note: "Status updated to Out for Delivery",
                    id: "69d366b57ed7e54198d67e00",
                    timestamp: "2026-04-06T07:54:29.226Z",
                },
                {
                    status: "Delivered",
                    note: "Delivered by partner",
                    id: "69d373207ed7e54198d681b1",
                    timestamp: "2026-04-06T08:47:28.983Z",
                },
            ],
            deliveryPartner: {
                id: "69bbfc3866db7c6cdea47ede",
                name: "Rahul",
                phone: "987654321",
            },
            deliveryOtp: "",
            isPaid: false,
            createdAt: "2026-04-06T07:53:05.774Z",
            updatedAt: "2026-04-06T08:47:28.984Z",
            __v: 4,
        },
    ],
};

export const dummyDeliveryPartnerData = [
    {
        id: "69bbfc6c66db7c6cdea47ee4",
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "987654321",
        avatar: "",
        vehicleType: "bike",
        isActive: true,
        createdAt: "2026-03-19T13:38:52.827Z",
        updatedAt: "2026-03-19T13:38:52.827Z",
        __v: 0,
    },
    {
        id: "69bbfc3866db7c6cdea47ede",
        name: "Rahul",
        email: "rahul@example.com",
        phone: "987654321",
        avatar: "",
        vehicleType: "bike",
        isActive: true,
        createdAt: "2026-03-19T13:38:00.872Z",
        updatedAt: "2026-03-19T13:38:00.872Z",
        __v: 0,
    },
];

export const dummyDashboardOrdersData = [
    {
        shippingAddress: {
            label: "Home",
            address: "New Market Road ",
            city: "New York ",
            state: "NY",
            zip: "876543",
            lat: 40.7128,
            lng: -74.006,
        },
        liveLocation: {
            lat: 40.7128,
            lng: -74.006,
            updatedAt: "2026-04-06T08:41:27.211Z",
        },
        id: "69d366617ed7e54198d67dac",
        user: {
            id: "69bb6caf448f2d818db59122",
            name: "Admin",
            email: "admin@example.com",
        },
        items: [
            {
                product: "69c22613ae75a98c7cd13b3b",
                name: "Premium Adult Dog Food 1kg",
                image: "/pet-products/premium-adult-dog-food.webp",
                price: 45,
                quantity: 2,
                unit: "100g",
                id: "69d366617ed7e54198d67dad",
            },
            {
                product: "69c22613ae75a98c7cd13b36",
                name: "Premium Cat Kibble 1kg",
                image: "/pet-products/premium-cat-kibble.webp",
                price: 140,
                quantity: 1,
                unit: "1kg",
                id: "69d366617ed7e54198d67dae",
            },
        ],
        paymentMethod: "cash",
        subtotal: 68.97,
        deliveryFee: 0,
        tax: 5.52,
        total: 74.49,
        status: "Delivered",
        statusHistory: [
            { status: "Placed", note: "Order placed successfully", id: "69d366617ed7e54198d67daf", timestamp: "2026-04-06T07:53:05.769Z" },
            { status: "Assigned", note: "Assigned to Rahul", id: "69d366ab7ed7e54198d67dbe", timestamp: "2026-04-06T07:54:19.796Z" },
            { status: "Packed", note: "Status updated to Packed", id: "69d366b37ed7e54198d67ddc", timestamp: "2026-04-06T07:54:27.171Z" },
            { status: "Out for Delivery", note: "Status updated to Out for Delivery", id: "69d366b57ed7e54198d67e00", timestamp: "2026-04-06T07:54:29.226Z" },
            { status: "Delivered", note: "Delivered by partner", id: "69d373207ed7e54198d681b1", timestamp: "2026-04-06T08:47:28.983Z" },
        ],
        deliveryPartner: { id: "69bbfc3866db7c6cdea47ede", name: "Rahul", email: "rahul@example.com", phone: "987654321" },
        deliveryOtp: "",
        isPaid: false,
        createdAt: "2026-04-06T07:53:05.774Z",
        updatedAt: "2026-04-06T08:47:28.984Z",
        __v: 4,
    },
    {
        shippingAddress: { label: "Home", address: "New Market Road ", city: "New York ", state: "NY", zip: "876543", lat: 40.7128, lng: -74.006 },
        liveLocation: { lat: 40.7128, lng: -74.006, updatedAt: "2026-04-06T08:41:27.211Z" },
        id: "69d366617ed7e54198d67dad",
        user: { id: "69bb6caf448f2d818db59122", name: "Admin", email: "admin@example.com" },
        items: [
            { product: "69c22613ae75a98c7cd13b3b", name: "Premium Adult Dog Food 1kg", image: "/pet-products/premium-adult-dog-food.webp", price: 24.99, quantity: 2, unit: "1kg", id: "69d366617ed7e54198d67dad" },
            { product: "69c22613ae75a98c7cd13b36", name: "Premium Cat Kibble 1kg", image: "/pet-products/premium-cat-kibble.webp", price: 18.99, quantity: 1, unit: "1kg", id: "69d366617ed7e54198d67dae" },
        ],
        paymentMethod: "cash",
        subtotal: 68.97,
        deliveryFee: 0,
        tax: 5.52,
        total: 74.49,
        status: "Out for Delivery",
        statusHistory: [
            { status: "Placed", note: "Order placed successfully", id: "69d366617ed7e54198d67daf", timestamp: "2026-04-06T07:53:05.769Z" },
            { status: "Assigned", note: "Assigned to Rahul", id: "69d366ab7ed7e54198d67dbe", timestamp: "2026-04-06T07:54:19.796Z" },
            { status: "Packed", note: "Status updated to Packed", id: "69d366b37ed7e54198d67ddc", timestamp: "2026-04-06T07:54:27.171Z" },
            { status: "Out for Delivery", note: "Status updated to Out for Delivery", id: "69d366b57ed7e54198d67e00", timestamp: "2026-04-06T07:54:29.226Z" },
        ],
        deliveryPartner: { id: "69bbfc3866db7c6cdea47ede", name: "Rahul", email: "rahul@example.com", phone: "987654321" },
        deliveryOtp: "754730",
        isPaid: false,
        createdAt: "2026-04-06T07:53:05.774Z",
        updatedAt: "2026-04-06T08:47:28.984Z",
        __v: 4,
    },
];

export const dummyCartData = [
    { product: dummyProducts[0], quantity: 1 },
    { product: dummyProducts[1], quantity: 1 },
    { product: dummyProducts[2], quantity: 1 },
];

export const dummyAddressData = [
    { label: "Home", address: "123 Main St ", city: "New York ", state: "NY", zip: "10001", isDefault: true, lat: 40.7128, lng: -74.006, id: "69d3652df9a340288f1a0f8c" },
    { label: "Work", address: "456 Market St ", city: "New York ", state: "NY", zip: "10002", isDefault: false, lat: 40.7128, lng: -74.006, id: "69d3652df9a340288f1a0f8d" },
];
