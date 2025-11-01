# Whop Templates Landing Page

A conversion-focused landing page built with Next.js to sell premium Whop app templates.

## Features

- ⚡ **Lightning Fast** - Built with Next.js 15 for optimal performance
- 🎨 **Beautiful Design** - Modern, professional design with Tailwind CSS 4
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
- npm, yarn, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build

```bash
npm run build
```

The optimized production build will be generated in the `.next/` directory.

### Production

```bash
npm run start
```

## Project Structure

```
/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # Global styles with Tailwind
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Main landing page
│   └── components/     # React components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Templates.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json
```

## Customization

### Update Pricing

Edit `src/components/Pricing.tsx` to modify pricing plans.

### Change Content

- **Hero Section**: `src/components/Hero.tsx`
- **Features**: `src/components/Features.tsx`
- **Templates**: `src/components/Templates.tsx`
- **Testimonials**: `src/components/Testimonials.tsx`

### Styling

The project uses Tailwind CSS 4. Global styles are in `src/app/globals.css`.

## Technologies Used

- [Next.js 15](https://nextjs.org) - React framework
- [React 19](https://react.dev) - UI library
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety

## Deployment

This Next.js app can be easily deployed to:

- **Vercel** (Recommended) - Zero configuration deployment
- Netlify
- Cloudflare Pages
- Any Node.js hosting service

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

## License

Proprietary - All rights reserved
