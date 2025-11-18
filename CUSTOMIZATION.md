# 🎨 Customization Guide

This guide shows you how to customize LandingPro for your brand and business needs.

## 1️⃣ Branding & Colors

### Change the Brand Colors

Edit `tailwind.config.ts` to match your brand colors:

```typescript
// BEFORE: Tech Blue & Purple
colors: {
  primary: {
    500: '#5a9bff',    // Blue
  },
  secondary: {
    500: '#a573f5',    // Purple
  },
}

// AFTER: Your Brand Colors
colors: {
  primary: {
    500: '#FF6B35',    // Your primary color
  },
  secondary: {
    500: '#004E89',    // Your secondary color
  },
}
```

### Change the Accent Color

```typescript
accent: {
  500: '#F7931E',    // Your accent color
}
```

### Update Logo Text

In `components/Header.tsx`:

```typescript
<span className="font-bold text-xl text-neutral-900">
  Your Company Name    {/* Change "LandingPro" */}
</span>
```

## 2️⃣ Content Updates

### Hero Section

Edit `components/Hero.tsx`:

```typescript
export function Hero() {
  return (
    <section>
      {/* Change this text */}
      <h1>The Landing Page Builder for Modern Teams</h1>

      {/* Update this description */}
      <p>Create stunning landing pages in minutes...</p>

      {/* Update button text */}
      <button>Start Free Trial</button>
      <button>Watch Demo</button>

      {/* Update stats */}
      <span>10K+ teams</span>
    </section>
  )
}
```

### Features Section

Edit `components/Features.tsx`:

```typescript
const features = [
  {
    title: 'Your Feature Name',
    description: 'Brief description of the feature...',
    icon: '✨',  // Use any emoji
    color: 'primary',
  },
  // Add more features...
]
```

### Testimonials

Edit `components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: 'Real Customer Name',
    role: 'Their Job Title',
    image: '👨‍💼',  // Use any emoji or real photo URL
    quote: 'What they said about your product...',
    rating: 5,
  },
  // Add more testimonials...
]
```

### Pricing Plans

Edit `components/Pricing.tsx`:

```typescript
const plans = [
  {
    name: 'Your Plan Name',
    price: '29',
    description: 'Who this plan is for...',
    popular: false,
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
  // Add more plans...
]
```

### FAQ Items

Edit `components/FAQ.tsx`:

```typescript
const faqs = [
  {
    question: 'Your question here?',
    answer: 'Your answer here...',
  },
  // Add more FAQs...
]
```

## 3️⃣ Design Changes

### Change Font

In `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font Family', 'sans-serif'],
    },
  },
}
```

### Adjust Spacing

In `tailwind.config.ts`:

```typescript
spacing: {
  'section-md': '5rem',  // Change from 4rem to 5rem
  'section-lg': '7rem',  // Change from 6rem to 7rem
}
```

### Change Border Radius

```typescript
borderRadius: {
  'lg': '16px',   // Make more rounded
  'xl': '20px',
  '2xl': '28px',
}
```

### Modify Shadows

```typescript
boxShadow: {
  'lg': '0 10px 20px rgba(0, 0, 0, 0.15)',  // Stronger shadow
}
```

## 4️⃣ Advanced Customizations

### Add New Section

1. Create a new component in `src/components/NewSection.tsx`:

```typescript
export function NewSection() {
  return (
    <section className="section-lg bg-white">
      <div className="container-max">
        <h2>Your Section Title</h2>
        {/* Your content here */}
      </div>
    </section>
  )
}
```

2. Export it in `src/components/index.ts`:

```typescript
export { NewSection } from './NewSection'
```

3. Add to `App.tsx`:

```typescript
import { Header, Hero, Features, NewSection, Footer } from './components'

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Features />
      <NewSection />  {/* Add here */}
      <Footer />
    </div>
  )
}
```

### Dark Mode Support

Add to `tailwind.config.ts`:

```typescript
export default {
  darkMode: 'class',
  // ... rest of config
}
```

Then add `dark:` variants to components:

```typescript
<div className="bg-white dark:bg-neutral-900">
  <h1 className="text-neutral-900 dark:text-white">Title</h1>
</div>
```

### Custom Animations

In `tailwind.config.ts`:

```typescript
animation: {
  'bounce-in': 'bounceIn 0.5s ease-out',
}

keyframes: {
  bounceIn: {
    '0%': { opacity: '0', transform: 'scale(0.9)' },
    '50%': { opacity: '1' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  }
}
```

## 5️⃣ Image Optimization

### Replace Mockup Images

In `components/Hero.tsx`:

```typescript
{/* Replace this mockup placeholder */}
<div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100">
  {/* Add real image */}
  <img src="/path/to/your-image.png" alt="Dashboard" />
</div>
```

### Use Next.js Image Optimization (Optional)

```bash
npm install next
```

```typescript
import Image from 'next/image'

<Image
  src="/hero-image.png"
  alt="Hero"
  width={1000}
  height={600}
/>
```

## 6️⃣ SEO Optimization

### Update Meta Tags

In `index.html`:

```html
<head>
  <title>Your Company - Modern Landing Pages</title>
  <meta name="description" content="Your company description...">
  <meta name="keywords" content="landing, pages, builder, ...">
  <meta name="author" content="Your Name">

  {/* Open Graph for social sharing */}
  <meta property="og:title" content="Your Title">
  <meta property="og:description" content="Your description">
  <meta property="og:image" content="/og-image.png">
</head>
```

### Add Structured Data

Add JSON-LD schema to components:

```typescript
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png"
})}
</script>
```

## 7️⃣ Analytics Integration

### Add Google Analytics

In `src/main.tsx`:

```typescript
// Add this script tag
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Track Button Clicks

```typescript
<button onClick={() => {
  gtag('event', 'signup', {
    'event_category': 'engagement'
  })
}}>
  Get Started
</button>
```

## 8️⃣ Performance Optimization

### Lazy Load Images

```typescript
<img
  src="/image.png"
  loading="lazy"
  alt="Description"
/>
```

### Code Splitting

```typescript
import { lazy } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))
```

### Preload Critical Resources

In `index.html`:

```html
<link rel="preload" as="image" href="/hero-bg.png">
<link rel="preload" as="script" href="/critical.js">
```

## 9️⃣ Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:

```bash
docker build -t landing-page .
docker run -p 3000:3000 landing-page
```

## 🔟 Testing

### Add Unit Tests

```bash
npm install -D vitest @testing-library/react
```

### Lighthouse Audit

```bash
npm install -g lighthouse
lighthouse https://yoursite.com
```

## 📋 Customization Checklist

- [ ] Update brand colors
- [ ] Change company name/logo
- [ ] Update hero section text
- [ ] Add your features
- [ ] Add real testimonials
- [ ] Update pricing plans
- [ ] Add your FAQs
- [ ] Replace mockup images
- [ ] Update footer links
- [ ] Update meta tags
- [ ] Setup analytics
- [ ] Test on mobile
- [ ] Deploy to production
- [ ] Monitor performance

## 🆘 Need Help?

- Check the [README.md](./README.md) for general setup
- See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for design guidelines
- Review component files for inline comments
- Check Tailwind docs: https://tailwindcss.com
- React docs: https://react.dev

---

**Happy customizing! 🎨**
