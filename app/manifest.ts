import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nurteks Morocco - Gazon Artificiel Premium',
    short_name: 'Nurteks MA',
    description: 'Leader du gazon artificiel au Maroc. Solutions premium pour résidences, terrains de sport et espaces commerciaux.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#15803D',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'fr-MA',
    categories: ['business', 'lifestyle', 'sports'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Devis Gratuit',
        short_name: 'Devis',
        description: 'Obtenir un devis gratuit',
        url: '/contact',
        icons: [{ src: '/icon-96.png', sizes: '96x96' }],
      },
      {
        name: 'Nos Produits',
        short_name: 'Produits',
        description: 'Voir nos produits',
        url: '/products',
        icons: [{ src: '/icon-96.png', sizes: '96x96' }],
      },
    ],
  };
}