import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nurteks.ma'),
  title: {
    default: 'Nurteks Morocco - Premium Artificial Grass Solutions | Gazon Artificiel',
    template: '%s | Nurteks Morocco'
  },
  description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux. Installation professionnelle, garantie 15 ans.',
  keywords: [
    'gazon artificiel Maroc',
    'pelouse synthétique',
    'artificial grass Morocco',
    'terrain de sport artificiel',
    'aménagement paysager',
    'Casablanca',
    'Rabat',
    'Marrakech',
    'installation gazon artificiel'
  ],
  authors: [{ name: 'Nurteks Morocco' }],
  creator: 'Nurteks Morocco',
  publisher: 'Nurteks Morocco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    alternateLocale: ['ar_MA', 'en_US'],
    url: 'https://nurteks.ma',
    title: 'Nurteks Morocco - Solutions Premium de Gazon Artificiel',
    description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux.',
    siteName: 'Nurteks Morocco',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nurteks Morocco - Premium Artificial Grass Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurteks Morocco - Solutions Premium de Gazon Artificiel',
    description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux.',
    images: ['/images/og-image.jpg'],
    creator: '@nurteks_ma',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#15803D" />
        <link rel="canonical" href="https://nurteks.ma" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nurteks Morocco',
              alternateName: 'Nurteks Maroc',
              description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux.',
              url: 'https://nurteks.ma',
              logo: 'https://nurteks.ma/images/logo.png',
              image: 'https://nurteks.ma/images/og-image.jpg',
              telephone: '+212-522-XXXXXX',
              email: 'contact@nurteks.ma',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Zone Industrielle Ain Sebaa',
                addressLocality: 'Casablanca',
                addressRegion: 'Grand Casablanca',
                postalCode: '20250',
                addressCountry: 'MA'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.5731,
                longitude: -7.5898
              },
              areaServed: [
                'Morocco',
                'Casablanca',
                'Rabat',
                'Marrakech',
                'Fez',
                'Tangier',
                'Agadir'
              ],
              serviceType: [
                'Artificial Grass Installation',
                'Sports Field Construction',
                'Landscape Design',
                'Commercial Landscaping'
              ],
              foundingDate: '2010',
              sameAs: [
                'https://facebook.com/nurteks.morocco',
                'https://instagram.com/nurteks_morocco',
                'https://linkedin.com/company/nurteks-morocco'
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}