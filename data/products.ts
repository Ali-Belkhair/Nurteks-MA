export interface Product {
  id: string;
  name: string;
  category: 'residential' | 'sports' | 'commercial' | 'landscaping';
  description: string;
  features: string[];
  image: string;
  price: string;
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: 'premium-home-turf',
    name: 'Premium Home Turf',
    category: 'residential',
    description: 'Ultra-realistic artificial grass perfect for residential gardens and lawns.',
    features: ['UV-resistant', '15-year warranty', 'Pet-friendly', 'Low maintenance'],
    image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg',
    price: 'From 180 MAD/m²',
    popular: true
  },
  {
    id: 'sports-pro-field',
    name: 'Sports Pro Field',
    category: 'sports',
    description: 'Professional-grade turf designed for football fields and sports facilities.',
    features: ['FIFA approved', 'Shock absorption', 'Weather resistant', 'Professional grade'],
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    price: 'From 220 MAD/m²'
  },
  {
    id: 'commercial-elite',
    name: 'Commercial Elite',
    category: 'commercial',
    description: 'Heavy-duty artificial grass for commercial and high-traffic areas.',
    features: ['Heavy traffic resistant', 'Fire retardant', 'Easy installation', 'Long-lasting'],
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    price: 'From 150 MAD/m²'
  },
  {
    id: 'urban-landscape',
    name: 'Urban Landscape',
    category: 'landscaping',
    description: 'Decorative artificial grass for urban landscaping and decorative purposes.',
    features: ['Natural appearance', 'Color variety', 'Soft texture', 'Eco-friendly'],
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
    price: 'From 120 MAD/m²'
  },
  {
    id: 'luxury-garden',
    name: 'Luxury Garden',
    category: 'residential',
    description: 'Premium artificial grass with the most natural look and feel.',
    features: ['Ultra-realistic', 'Soft touch', 'Drainage system', 'Color guarantee'],
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
    price: 'From 250 MAD/m²'
  },
  {
    id: 'tennis-court-turf',
    name: 'Tennis Court Turf',
    category: 'sports',
    description: 'Specialized artificial grass designed specifically for tennis courts.',
    features: ['ITF approved', 'Consistent bounce', 'Non-slip surface', 'All-weather'],
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg',
    price: 'From 280 MAD/m²'
  }
];

export const categories = [
  { id: 'all', label: 'All Products', count: products.length },
  { id: 'residential', label: 'Residential', count: products.filter(p => p.category === 'residential').length },
  { id: 'sports', label: 'Sports Fields', count: products.filter(p => p.category === 'sports').length },
  { id: 'commercial', label: 'Commercial', count: products.filter(p => p.category === 'commercial').length },
  { id: 'landscaping', label: 'Landscaping', count: products.filter(p => p.category === 'landscaping').length },
];