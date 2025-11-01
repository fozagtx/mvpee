# Whop Templates Landing Page

A conversion-focused landing page built with Astro to sell premium Whop app templates.

## Features

- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎨 **Beautiful Design** - Modern, professional design with Tailwind CSS
- 📱 **Fully Responsive** - Perfect on all devices
- 💰 **Conversion Optimized** - Every element designed to drive sales
- 🚀 **Easy to Customize** - Simple component structure

## Pricing Structure

- **Starter**: $4.99 - Perfect for getting started
- **Pro**: $9.99 - For serious entrepreneurs (Most Popular)
- **Ultimate**: $19.99 - Everything you need to dominate

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
cd apps/landing
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see the landing page.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── Testimonials.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro # Base layout
│   ├── pages/
│   │   └── index.astro  # Main landing page
│   └── styles/
│       └── global.css   # Global styles with Tailwind
└── package.json
```

## Customization

### Update Pricing

Edit `src/components/Pricing.astro` to modify pricing plans.

### Change Content

- **Hero Section**: `src/components/Hero.astro`
- **Features**: `src/components/Features.astro`
- **Testimonials**: `src/components/Testimonials.astro`

### Styling

The project uses Tailwind CSS 4. Global styles are in `src/styles/global.css`.

## Technologies Used

- [Astro](https://astro.build) - Static site generator
- [React](https://react.dev) - UI components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [@whop/frosted-ui](https://www.npmjs.com/package/@whop/frosted-ui) - Whop UI components

## Deployment

This is a static site and can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting service

## License

Proprietary - All rights reserved
