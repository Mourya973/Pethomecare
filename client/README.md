# PetHomeCare Client

The PetHomeCare storefront is built with React, TypeScript, Vite, Tailwind CSS, and React Router. The app talks to the Express API configured in `VITE_BASE_URL`.

## Run locally

```bash
npm install
npm run dev
```

Use `.env.example` as a template for `client/.env`. The default local API URL is `http://localhost:5000/api`; change it if your server runs elsewhere. Product and category images are bundled locally in `public/pet-products/` and `public/pet-categories/`.

## Production build

```bash
npm run build
```
