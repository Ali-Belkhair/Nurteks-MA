import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProductsShowcase } from '@/components/home/ProductsShowcase';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Nurteks Morocco - Gazon Artificiel Premium | Installation Professionnelle',
  description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux. Installation professionnelle, garantie 15 ans, économie d\'eau.',
  keywords: [
    'gazon artificiel Maroc',
    'pelouse synthétique Casablanca',
    'terrain de sport artificiel',
    'installation gazon artificiel',
    'Nurteks Morocco',
    'aménagement paysager Maroc'
  ],
  openGraph: {
    title: 'Nurteks Morocco - Gazon Artificiel Premium',
    description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux.',
    url: 'https://nurteks.ma',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Nurteks Morocco - Gazon Artificiel Premium',
      },
    ],
  },
  alternates: {
    canonical: 'https://nurteks.ma',
    languages: {
      'fr-MA': 'https://nurteks.ma',
      'ar-MA': 'https://nurteks.ma/ar',
      'en-US': 'https://nurteks.ma/en',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductsShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}