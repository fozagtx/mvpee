# Quick Start Guide

## 🚀 Get Started in 2 Minutes

### 1. Install Dependencies
```bash
cd apps/landing
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: [http://localhost:4321](http://localhost:4321)

### 3. Build for Production
```bash
npm run build
```

Output will be in `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

## 📝 Common Customizations

### Update Pricing
Edit `src/components/Pricing.astro`:
```astro
{
  name: "Starter",
  price: "$4.99",  // Change this
  features: [...]   // Modify features
}
```

### Change Hero Text
Edit `src/components/Hero.astro`:
```astro
<h1>
  Launch Your Whop Store    {/* Change headline */}
  <span>In Minutes</span>
</h1>
```

### Add/Remove Templates
Edit `src/components/Templates.astro`:
```astro
const templates = [
  {
    name: "Your Template",
    category: "Category",
    description: "Description",
    features: ["Feature 1", "Feature 2"],
    image: "🎯"
  }
]
```

### Update Colors
Replace throughout components:
- `purple-500` → Your primary color
- `blue-500` → Your secondary color
- `gray-950` → Your background color

### Add Analytics
Edit `src/layouts/Layout.astro` and add to `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Connect Payment
Replace `href="#"` in pricing CTAs with your Whop checkout URL:
```astro
<a href="https://whop.com/your-checkout-link">
  Get Started
</a>
```

## 🎨 Design Tokens

### Colors
- Background: `bg-gray-950`
- Text: `text-white`, `text-gray-400`
- Primary: `from-purple-500 to-blue-500`
- Border: `border-gray-800`
- Hover: `hover:border-purple-500/50`

### Spacing
- Section: `py-20 sm:py-32`
- Container: `max-w-7xl px-4 sm:px-6 lg:px-8`
- Card: `p-8`

### Typography
- Heading: `text-4xl font-bold sm:text-5xl`
- Subheading: `text-lg text-gray-400`
- Body: `text-gray-300`

## 🔥 Hot Tips

1. **Test Mobile First**: Most visitors are mobile
2. **A/B Test Pricing**: Try different price points
3. **Update Testimonials**: Use real customer feedback
4. **Add Images**: Replace emojis with screenshots
5. **Track Everything**: Add analytics from day 1

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Cloudflare Pages
Connect your GitHub repo and set:
- Build command: `npm run build`
- Output directory: `dist`

## 🆘 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Types Error
```bash
npm install --save-dev @astrojs/check typescript
npm run check-types
```

### Port Already in Use
```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9
npm run dev
```

## 📚 Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Whop API](https://docs.whop.com)

## ✅ Pre-Launch Checklist

- [ ] Update all pricing
- [ ] Add real testimonials
- [ ] Replace placeholder images
- [ ] Connect payment links
- [ ] Add analytics tracking
- [ ] Test on mobile devices
- [ ] Set up custom domain
- [ ] Add email capture
- [ ] Create privacy policy
- [ ] Set up customer support

---

**Ready to launch?** 🚀 Deploy and start selling!
