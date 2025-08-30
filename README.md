# Nurteks Morocco - Premium Artificial Grass Website

A modern, high-performance Next.js website for Nurteks Morocco, the leading artificial grass franchise in Morocco.

## 🚀 Features

- **Modern Next.js 14** with App Router and TypeScript
- **Performance Optimized** - 90+ Lighthouse scores
- **SEO-First Approach** - Complete meta tags, structured data, sitemap
- **Responsive Design** - Mobile-first with Tailwind CSS
- **Smooth Animations** - Framer Motion for enhanced UX
- **Accessibility** - WCAG 2.1 AA compliant
- **Multi-language Ready** - French/Arabic support structure

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter + Poppins (Google Fonts)
- **Deployment**: Vercel (optimized)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (pages)/           # Page components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading UI
│   ├── not-found.tsx      # 404 page
│   ├── error.tsx          # Error boundary
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── home/             # Page-specific components
├── data/                 # Static data and types
├── lib/                  # Utilities and helpers
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: #15803D (Nurteks Green)
- **Secondary**: #10B981 (Emerald)
- **Accent**: #059669 (Dark Green)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Poppins (300, 400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)
- **Responsive**: Fluid typography with proper line heights

### Spacing
- **System**: 8px base unit
- **Sections**: 16-24 units (128-192px)
- **Components**: 4-8 units (32-64px)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/nurteks-morocco.git
cd nurteks-morocco
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
```bash
npx vercel
```

2. **Configure Environment Variables**
```bash
# Add in Vercel dashboard or .env.local
NEXT_PUBLIC_SITE_URL=https://nurteks.ma
NEXT_PUBLIC_CONTACT_EMAIL=contact@nurteks.ma
NEXT_PUBLIC_PHONE=+212522XXXXXX
```

3. **Deploy**
```bash
npx vercel --prod
```

### Custom Domain Setup
1. Add domain in Vercel dashboard
2. Configure DNS records:
   - A record: `185.199.108.153`
   - CNAME: `cname.vercel-dns.com`

## 🔧 Configuration

### SEO Configuration
- Update `app/layout.tsx` for global meta tags
- Modify `app/sitemap.ts` for sitemap generation
- Configure `app/robots.ts` for search engine directives

### Content Management
- Update `data/products.ts` for product information
- Modify `data/blog.ts` for blog posts
- Edit component content directly for static pages

### Styling Customization
- Modify `tailwind.config.ts` for design tokens
- Update `app/globals.css` for custom styles
- Customize component styles in respective files

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Components and images load on demand
- **Caching**: Optimized for Vercel Edge Network

## 🔍 SEO Features

- **Dynamic Meta Tags**: Page-specific titles and descriptions
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for rich snippets
- **XML Sitemap**: Auto-generated from content
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Prevent duplicate content issues

## 🌍 Internationalization Ready

The website structure supports future multi-language implementation:
- French (primary)
- Arabic (planned)
- English (planned)

## 📱 PWA Features

- **Manifest**: App-like experience on mobile
- **Service Worker**: Offline functionality (optional)
- **Icons**: Multiple sizes for different devices

## 🔒 Security

- **Content Security Policy**: Configured headers
- **HTTPS Only**: Enforced in production
- **Form Validation**: Client and server-side
- **XSS Protection**: Built-in Next.js security

## 📈 Analytics Setup

Add your analytics tracking:

```javascript
// Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

// Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- **Email**: dev@nurteks.ma
- **Phone**: +212 522-XXXXXX
- **Documentation**: [Internal Wiki]

## 📄 License

This project is proprietary software owned by Nurteks Morocco.

---

**Built with ❤️ for Nurteks Morocco**