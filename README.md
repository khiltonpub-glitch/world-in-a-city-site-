# THE WORLD IN A CITY

A premium, cinematic website for a global documentary series exploring how the FIFA World Cup transforms cities across North America.

**Production:** Hilton Sports Group  
**Style:** Netflix × Nike × Apple × FIFA World Cup  
**Tech:** Next.js 14 Static Export

---

## 🎯 Project Purpose

This website is designed to:

- ✅ Close city sponsors
- ✅ Attract global brand sponsors
- ✅ Attract investors
- ✅ Build audience
- ✅ Attract distribution partners (Netflix, Amazon, ESPN+)
- ✅ Position for AWS partnership

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
world-in-a-city/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles, film grain, typography
├── components/
│   ├── Navigation.tsx      # Sticky header with scroll progress
│   ├── Footer.tsx          # Newsletter, social links
│   ├── Stats.tsx           # Animated counters
│   ├── Timeline.tsx        # 1994-2026 journey
│   ├── ParallaxQuote.tsx   # Scroll-based parallax effects
│   └── FAQ.tsx             # Accordion FAQ section
├── sections/
│   ├── Hero.tsx            # Full-screen hero with CTAs
│   ├── WhatThisIs.tsx      # Project concept
│   ├── WhyItMatters.tsx    # Culture/Business/Community pillars
│   ├── Cities.tsx          # Featured city cards
│   ├── Sponsors.tsx        # Partnership opportunities
│   ├── CitiesCTA.tsx       # City partnership section
│   ├── Creators.tsx        # Filmmaker network
│   ├── Distribution.tsx    # Streaming platform vision
│   ├── AWS.tsx             # Technology infrastructure
│   └── FinalCTA.tsx        # Contact section
├── next.config.js          # Static export config
├── tailwind.config.js      # Custom color system
└── package.json
```

---

## 🎨 Design System

### Color Palette

```css
Ink Black:    #0B0B0B  /* Primary background */
Pitch Black:  #111111  /* Secondary background */
Grass Green:  #0F2A25  /* Accent background */
Gold:         #C6A85B  /* Primary accent */
Chalk White:  #EDEDED  /* Primary text */
Warm Gray:    #8A8478  /* Secondary text */
```

### Typography

- **Headings:** Montserrat (bold, uppercase, wide tracking)
- **Body:** Inter (clean, readable)

### Motion Design

- Scroll-triggered animations via Framer Motion
- Parallax effects on key sections
- Hover states with smooth transitions
- Animated counters and progress indicators
- Film grain overlay for cinematic feel

---

## ✨ Key Features

### 🎬 Cinematic Design
- Film grain texture overlay
- Large, bold typography
- Full-screen hero sections
- Gradient backgrounds with depth

### 🎭 Advanced Animations
- Scroll progress indicator
- Parallax quote sections
- Animated statistics counters
- Staggered section reveals
- Hover micro-interactions

### 📱 Responsive Design
- Mobile-first approach
- Full-screen mobile menu
- Touch-optimized interactions
- Adaptive typography scales

### 🎯 Conversion Optimized
- Multiple clear CTAs
- Partnership tier breakdown
- FAQ section
- Contact cards
- Newsletter capture

### ⚡ Performance
- Static export (no server required)
- Optimized for fast loading
- Progressive enhancement
- Minimal JavaScript bundle

---

## 🛠 Technical Details

### Static Export

This site uses Next.js 14 with **static export only**. No server-side rendering, no API routes, no edge functions.

**next.config.js:**
```js
export default {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

### Deployment

The built site (`/out` directory) can be deployed to:
- AWS S3 + CloudFront
- Netlify
- Vercel
- Any static hosting service

```bash
npm run build
# Upload the /out directory to your host
```

---

## 📝 Content Sections

1. **Hero** - Full-screen introduction with dual CTAs
2. **Stats** - Animated key metrics (16 cities, 4 episodes)
3. **What This Is** - Project concept and vision
4. **Timeline** - 1994 to 2026 journey visualization
5. **Why It Matters** - Culture, Business, Community impact
6. **Parallax Quote** - Cinematic scroll-based quote
7. **Cities** - Featured city cards with hover effects
8. **Sponsors** - Partnership tiers and benefits
9. **City CTA** - Host city partnership opportunities
10. **Creators** - Filmmaker/photographer network
11. **Distribution** - Streaming platform positioning
12. **AWS** - Technology infrastructure showcase
13. **FAQ** - Accordion-style frequently asked questions
14. **Final CTA** - Contact cards and partnership buttons
15. **Footer** - Newsletter, links, social media

---

## 🎯 Customization

### Update Colors

Edit `tailwind.config.js`:
```js
colors: {
  'ink-black': '#0B0B0B',
  'gold': '#C6A85B',
  // Add your colors
}
```

### Add New Sections

1. Create component in `/sections/NewSection.tsx`
2. Import in `/app/page.tsx`
3. Add to render tree

### Modify Animations

Edit individual section files using Framer Motion:
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

---

## 🌟 Premium Features

- ✅ Scroll progress indicator
- ✅ Film grain overlay
- ✅ Parallax effects
- ✅ Animated statistics
- ✅ Interactive FAQ accordion
- ✅ Mobile menu with animations
- ✅ Hover state micro-interactions
- ✅ Custom scrollbar styling
- ✅ Gradient text effects
- ✅ Timeline visualization

---

## 📧 Contact

**Email:** hello@worldinacity.com  
**Production:** Hilton Sports Group

---

## 📄 License

All rights reserved © Hilton Sports Group

---

## 🚢 Deployment Checklist

- [ ] Update contact email addresses
- [ ] Add real phone numbers
- [ ] Replace placeholder images in `/sections/Cities.tsx`
- [ ] Configure analytics
- [ ] Set up AWS infrastructure
- [ ] Connect newsletter service
- [ ] Test all CTAs
- [ ] Optimize images
- [ ] Run accessibility audit
- [ ] Test on mobile devices
- [ ] Set up monitoring

---

**Built with precision. Designed for impact. Ready to close deals.**
