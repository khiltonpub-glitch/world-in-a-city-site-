# DEPLOYMENT GUIDE

## 🚀 Deploying THE WORLD IN A CITY

This Next.js 14 static site can be deployed to any static hosting platform.

---

## AWS S3 + CloudFront (Recommended for AWS Partnership)

### Step 1: Build the Site

```bash
npm install
npm run build
```

This creates a static export in the `/out` directory.

### Step 2: Create S3 Bucket

```bash
aws s3 mb s3://worldinacity.com
aws s3 website s3://worldinacity.com --index-document index.html --error-document 404.html
```

### Step 3: Upload Files

```bash
aws s3 sync out/ s3://worldinacity.com --delete
```

### Step 4: Configure CloudFront

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure SSL certificate
4. Set default root object to `index.html`
5. Enable gzip compression
6. Set cache behavior for `/` path

### Step 5: DNS Configuration

Point your domain to CloudFront distribution:
```
CNAME: www.worldinacity.com → [cloudfront-url]
A/ALIAS: worldinacity.com → [cloudfront-url]
```

---

## Netlify (Fastest Setup)

### Option 1: Drag & Drop

1. Build locally: `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag `/out` folder to deploy

### Option 2: Git Integration

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

---

## Vercel

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Next.js and handles the build.

---

## Performance Optimization

### 1. Image Optimization

Replace placeholder images in `/sections/Cities.tsx`:

```tsx
image: '/images/cities/miami.jpg'  // Add real images here
```

Optimize images:
- Use WebP format
- Maximum width: 1920px
- Compress to 80-85% quality

### 2. Analytics Setup

Add to `/app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Newsletter Integration

Update `/components/Footer.tsx` newsletter form:

```tsx
<form 
  action="https://your-email-service.com/subscribe" 
  method="POST"
  className="flex flex-col sm:flex-row gap-4"
>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    required
    className="..."
  />
  <button type="submit" className="...">
    SUBSCRIBE
  </button>
</form>
```

Services to integrate:
- Mailchimp
- ConvertKit
- SendGrid
- HubSpot

---

## Pre-Launch Checklist

### Content
- [ ] Replace all placeholder images
- [ ] Update contact email addresses
- [ ] Add real phone numbers
- [ ] Verify all copy is finalized
- [ ] Test all CTAs lead to correct destinations

### Technical
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Verify no console errors
- [ ] Test all animations
- [ ] Check mobile responsiveness
- [ ] Test on Safari, Chrome, Firefox
- [ ] Verify scroll behavior
- [ ] Test newsletter form submission

### SEO
- [ ] Add meta descriptions
- [ ] Add Open Graph images
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Configure canonical URLs
- [ ] Add structured data (JSON-LD)

### Performance
- [ ] Optimize all images
- [ ] Enable CDN
- [ ] Configure caching headers
- [ ] Enable gzip compression
- [ ] Test page load speed (target: < 3s)

### Security
- [ ] Configure SSL certificate
- [ ] Set up security headers
- [ ] Enable HTTPS redirect
- [ ] Configure CORS if needed

### Monitoring
- [ ] Set up Google Analytics
- [ ] Configure error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Configure performance monitoring

---

## Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_NEWSLETTER_API=your_api_endpoint
```

Never commit this file to Git.

---

## Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'out'
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `/public` directory
- Use relative paths: `/images/photo.jpg`
- Verify `next.config.js` has `images.unoptimized: true`

### Animations Not Working

- Check browser console for errors
- Verify Framer Motion is installed
- Test in different browsers

### Scroll Issues

- Verify `scroll-behavior: smooth` in CSS
- Check for JavaScript errors
- Test scroll-triggered animations

---

## Support

**Technical Issues:** Contact development team  
**Content Updates:** Edit files in `/sections` and `/components`  
**Emergency:** Deploy rollback via hosting platform

---

## Post-Launch

1. **Monitor Performance**
   - Check Google Analytics daily
   - Review page load times
   - Track conversion rates

2. **Gather Feedback**
   - Set up feedback mechanism
   - Monitor form submissions
   - Track sponsor inquiries

3. **Iterate**
   - A/B test CTAs
   - Optimize conversion funnel
   - Update content regularly

---

**Ready to launch. Ready to scale. Ready to convert.**
