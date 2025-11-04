# SaaS Info Hub - Landing Page

A modern, high-converting landing page built with SvelteKit and Tailwind CSS for collecting leads and providing free SaaS resources.

## Features

- ⚡ **Lightning Fast** - Built with SvelteKit for optimal performance
- 🎨 **Beautiful Design** - Modern, professional design with Tailwind CSS 3
- 📱 **Fully Responsive** - Perfect on all devices
- 💰 **Conversion Optimized** - Lead capture form with validation
- 🚀 **Easy to Customize** - Simple component structure
- 🎯 **SEO Ready** - Optimized for search engines

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - The fastest way to build Svelte apps
- [Svelte 5](https://svelte.dev/) - Cybernetically enhanced web apps with runes
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the landing page.

The page will auto-reload when you make changes.

### Build

```bash
npm run build
```

The optimized production build will be generated in the `build/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── lib/
│   │   └── components/     # Svelte components
│   │       ├── Header.svelte
│   │       ├── Hero.svelte
│   │       ├── Features.svelte
│   │       ├── HowItWorks.svelte
│   │       ├── Benefits.svelte
│   │       ├── LeadForm.svelte
│   │       ├── Testimonials.svelte
│   │       ├── CTA.svelte
│   │       └── Footer.svelte
│   ├── routes/
│   │   ├── +layout.svelte  # Root layout
│   │   └── +page.svelte    # Homepage
│   ├── app.html           # HTML template
│   └── app.css            # Global styles
├── static/                 # Static assets
├── svelte.config.js       # SvelteKit config
├── tailwind.config.js     # Tailwind config
├── vite.config.ts         # Vite config
└── package.json
```

## Customization

### Update Content

All components are located in `src/lib/components/`. Simply edit the Svelte files to update content:

- **Hero Section**: `src/lib/components/Hero.svelte`
- **Features**: `src/lib/components/Features.svelte`
- **Lead Form**: `src/lib/components/LeadForm.svelte`
- **Testimonials**: `src/lib/components/Testimonials.svelte`

### Styling

The project uses Tailwind CSS 3. Global styles are in `src/app.css`.

### Lead Form Integration

The lead form in `LeadForm.svelte` currently simulates a submission. To integrate with your backend:

1. Update the `handleSubmit` function in `LeadForm.svelte`
2. Add your API endpoint
3. Handle the response

Example:

```typescript
async function handleSubmit(e: Event) {
  e.preventDefault();
  loading = true;

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    if (response.ok) {
      submitted = true;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }
}
```

## Deployment

This SvelteKit app can be easily deployed to:

- **Vercel** (Recommended) - Zero configuration deployment
- **Netlify**
- **Cloudflare Pages**
- **Any Node.js hosting service**

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Adapter Configuration

The project uses `@sveltejs/adapter-auto` which automatically selects the right adapter for your deployment platform.

For specific platforms, you can change the adapter in `svelte.config.js`:

- Vercel: `@sveltejs/adapter-vercel`
- Netlify: `@sveltejs/adapter-netlify`
- Cloudflare Pages: `@sveltejs/adapter-cloudflare`
- Static: `@sveltejs/adapter-static`

## Performance

This SvelteKit application is optimized for maximum performance:

- Minimal JavaScript shipped to the client
- Automatic code splitting
- Optimized asset loading
- Server-side rendering
- Progressive enhancement

## License

MIT License - feel free to use this for your projects!

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using SvelteKit
