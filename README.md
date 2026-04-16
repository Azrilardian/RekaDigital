# Shop Catalog

A Next.js storefront-style catalog: browse products, open detail pages, and manage a persisted cart. Data comes from the [Fake Store API](https://fakestoreapi.com/) by default.

## Stack

- **Next.js** (App Router) · **React** · **TypeScript**
- **TanStack Query** for server state
- **Redux Toolkit** + **redux-persist** for the cart
- **Tailwind CSS v4** (theme in `src/app/globals.css`)

## Requirements

- Node.js 20+ (recommended)
- npm, yarn, or pnpm

## Setup

```bash
npm install
```

Optional environment variables (see `src/config/constants.ts`):

| Variable              | Purpose                                                       |
| --------------------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Product API base URL (defaults to `https://fakestoreapi.com`) |

## Scripts

| Command          | Description               |
| ---------------- | ------------------------- |
| `npm run dev`    | Start the dev server      |
| `npm run build`  | Production build          |
| `npm run start`  | Run the production server |
| `npm run lint`   | ESLint                    |
| `npm run format` | Prettier (write)          |

## Project layout

- `src/app/` — routes, layouts, metadata, `loading` / `error` / `not-found`
- `src/components/` — UI features (catalog, cart, product detail, shared UI)
- `src/config/` — API and UI constants
- `src/lib/` — API client, query keys, utilities
- `src/store/` — Redux store and cart slice

## License

Private project (`"private": true` in `package.json`).
