# Luxe Estates

A luxury multi-page real estate website built with React + Vite, Tailwind CSS, framer-motion, and wouter.

## Getting Started

You need [Node.js 18+](https://nodejs.org) installed.

### 1. Install dependencies

```bash
npm install
```

(or `pnpm install` / `yarn install` if you prefer)

### 2. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 3. Build for production

```bash
npm run build
```

The output will be written to `dist/`. To preview the built site locally:

```bash
npm run preview
```

## Project Structure

```
luxe-estates/
├── public/
│   ├── favicon.svg
│   └── images/        # Property and agent photos
├── src/
│   ├── App.tsx        # Router with all 10 pages
│   ├── main.tsx       # Entry point
│   ├── index.css      # Theme + Tailwind
│   ├── pages/         # Home, Properties, About, Services, Agents,
│   │                  # Blog, BlogDetails, Contact, Wishlist, Dashboard, ...
│   ├── components/    # Navbar, Footer, PropertyCard, AgentCard, etc.
│   │   └── ui/        # shadcn primitives
│   ├── animations/    # framer-motion variants
│   ├── hooks/         # use-theme, use-wishlist, ...
│   ├── lib/           # utils
│   └── data/          # Properties, agents, blog posts (dummy data)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
