export interface Product {
  id: string;
  name: string;
  category: 'sports' | 'decorative' | 'landscape' | 'residential' | 'commercial';
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
    image: '/images/products/slider-comparison-hali1.png',
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
    image: '/images/products/slider-comparison-hali1.png',
    price: 'From 150 MAD/m²'
  },
  {
    id: 'urban-landscape',
    name: 'Urban Landscape',
    category: 'landscape',
    description: 'Decorative artificial grass for urban landscaping and decorative purposes.',
    features: ['Natural appearance', 'Color variety', 'Soft texture', 'Eco-friendly'],
    image: '/images/products/slider-comparison-hali1.png',
    price: 'From 120 MAD/m²'
  },
  {
    id: 'luxury-garden',
    name: 'Luxury Garden',
    category: 'residential',
    description: 'Premium artificial grass with the most natural look and feel.',
    features: ['Ultra-realistic', 'Soft touch', 'Drainage system', 'Color guarantee'],
    image: '/images/products/slider-comparison-hali1.png',
    price: 'From 250 MAD/m²'
  },
  // Sports Surfaces (15 products)
  {
    id: 'football-field-turf',
    name: 'Football Field Turf',
    category: 'sports',
    description: 'Professional football field turf meeting FIFA quality standards.',
    features: ['FIFA approved', 'Excellent ball roll', 'Player safety', 'All-weather use'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/futbol-saha-cimi-350x350.jpg',
    price: 'From 320 MAD/m²',
    popular: true
  },
  {
    id: 'tennis-court-turf',
    name: 'Tennis Court Turf',
    category: 'sports',
    description: 'Specialized turf for tennis courts with consistent bounce.',
    features: ['ITF approved', 'Consistent bounce', 'Non-slip surface', 'UV resistant'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/tenis-kort-cimi-350x350.jpg',
    price: 'From 290 MAD/m²'
  },
  {
    id: 'golf-putting-green',
    name: 'Golf Putting Green',
    category: 'sports',
    description: 'Professional putting green turf for golf courses and practice areas.',
    features: ['True roll surface', 'Professional quality', 'Durable', 'Low maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/golf-putting-cimi-350x350.jpg',
    price: 'From 270 MAD/m²'
  },
  {
    id: 'rugby-field-turf',
    name: 'Rugby Field Turf',
    category: 'sports',
    description: 'Heavy-duty turf designed for rugby fields and high-impact sports.',
    features: ['Shock absorbent', 'High durability', 'Weather resistant', 'Professional grade'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/rugby-saha-cimi-350x350.jpg',
    price: 'From 310 MAD/m²'
  },
  {
    id: 'hockey-field-turf',
    name: 'Hockey Field Turf',
    category: 'sports',
    description: 'Specialized turf for field hockey with optimal ball control.',
    features: ['FIH approved', 'Fast playing surface', 'Water-based', 'Professional quality'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/hokey-saha-cimi-350x350.jpg',
    price: 'From 300 MAD/m²'
  },
  {
    id: 'multisport-field-turf',
    name: 'Multisport Field Turf',
    category: 'sports',
    description: 'Versatile turf suitable for multiple sports activities.',
    features: ['Multi-purpose', 'Durable', 'Cost effective', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/cok-amacli-saha-cimi-350x350.jpg',
    price: 'From 250 MAD/m²',
    popular: true
  },
  {
    id: 'athletic-track-turf',
    name: 'Athletic Track Turf',
    category: 'sports',
    description: 'Turf designed for athletic tracks and running areas.',
    features: ['Shock absorption', 'Slip resistant', 'Durable', 'All-weather'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/atletizm-pisti-cimi-350x350.jpg',
    price: 'From 230 MAD/m²'
  },
  {
    id: 'playground-turf',
    name: 'Playground Turf',
    category: 'sports',
    description: 'Safe and soft artificial grass for children\'s playgrounds.',
    features: ['Safety certified', 'Soft landing', 'Non-toxic', 'Easy to clean'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/oyun-alani-cimi-350x350.jpg',
    price: 'From 220 MAD/m²'
  },
  {
    id: 'basketball-court-turf',
    name: 'Basketball Court Turf',
    category: 'sports',
    description: 'Turf designed for outdoor basketball courts.',
    features: ['High traction', 'Durable', 'Weather resistant', 'Consistent bounce'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/basketbol-saha-cimi-350x350.jpg',
    price: 'From 260 MAD/m²'
  },
  {
    id: 'volleyball-court-turf',
    name: 'Volleyball Court Turf',
    category: 'sports',
    description: 'Specialized turf for volleyball courts with optimal player comfort.',
    features: ['Player friendly', 'Shock absorbent', 'Sand filled', 'Professional quality'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/voleybol-saha-cimi-350x350.jpg',
    price: 'From 240 MAD/m²'
  },
  {
    id: 'baseball-field-turf',
    name: 'Baseball Field Turf',
    category: 'sports',
    description: 'Turf designed for baseball fields and training areas.',
    features: ['Professional grade', 'Durable', 'All-weather', 'Low maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/baseball-saha-cimi-350x350.jpg',
    price: 'From 280 MAD/m²'
  },
  {
    id: 'sports-club-turf',
    name: 'Sports Club Turf',
    category: 'sports',
    description: 'General purpose sports turf for clubs and training facilities.',
    features: ['Versatile', 'Cost effective', 'Durable', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/spor-kulubu-cimi-350x350.jpg',
    price: 'From 210 MAD/m²'
  },
  {
    id: 'school-sports-turf',
    name: 'School Sports Turf',
    category: 'sports',
    description: 'Durable and safe turf for school sports areas.',
    features: ['Safety certified', 'Durable', 'Cost effective', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/okul-spor-cimi-350x350.jpg',
    price: 'From 200 MAD/m²',
    popular: true
  },
  {
    id: 'training-field-turf',
    name: 'Training Field Turf',
    category: 'sports',
    description: 'Turf designed for sports training facilities.',
    features: ['Durable', 'Versatile', 'Cost effective', 'All-weather'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/antrenman-saha-cimi-350x350.jpg',
    price: 'From 230 MAD/m²'
  },
  {
    id: 'professional-stadium-turf',
    name: 'Professional Stadium Turf',
    category: 'sports',
    description: 'Premium turf for professional stadiums and sports facilities.',
    features: ['FIFA quality', 'Professional grade', 'Long warranty', 'High performance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/stadyum-cimi-350x350.jpg',
    price: 'From 350 MAD/m²'
  },

  // Decorative Grass (3 products)
  {
    id: 'decorative-lawn-grass',
    name: 'Decorative Lawn Grass',
    category: 'decorative',
    description: 'Beautiful artificial grass for decorative purposes in homes and offices.',
    features: ['Aesthetic appeal', 'Realistic look', 'UV resistant', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/dekoratif-cim-350x350.jpg',
    price: 'From 180 MAD/m²'
  },
  {
    id: 'balcony-decorative-grass',
    name: 'Balcony Decorative Grass',
    category: 'decorative',
    description: 'Lightweight decorative grass for balconies and terraces.',
    features: ['Lightweight', 'Easy installation', 'UV protected', 'Drainage system'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/balkon-dekoratif-cim-350x350.jpg',
    price: 'From 160 MAD/m²'
  },
  {
    id: 'interior-design-grass',
    name: 'Interior Design Grass',
    category: 'decorative',
    description: 'Artificial grass for interior design and decorative applications.',
    features: ['Aesthetic appeal', 'Color fast', 'Soft texture', 'Easy to clean'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/ic-mekan-dekoratif-cim-350x350.jpg',
    price: 'From 190 MAD/m²',
    popular: true
  },

  // Landscape (32 products - showing 10 for brevity)
  {
    id: 'landscape-lawn-grass',
    name: 'Landscape Lawn Grass',
    category: 'landscape',
    description: 'High-quality artificial grass for landscaping projects.',
    features: ['Natural appearance', 'UV resistant', 'Durable', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/peyzaj-cimi-350x350.jpg',
    price: 'From 170 MAD/m²',
    popular: true
  },
  {
    id: 'garden-landscape-grass',
    name: 'Garden Landscape Grass',
    category: 'landscape',
    description: 'Artificial grass designed for residential garden landscaping.',
    features: ['Natural look', 'Family friendly', 'Pet friendly', 'Easy to clean'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/bahce-peyzaj-cimi-350x350.jpg',
    price: 'From 190 MAD/m²'
  },
  {
    id: 'commercial-landscape-grass',
    name: 'Commercial Landscape Grass',
    category: 'landscape',
    description: 'Durable artificial grass for commercial landscaping projects.',
    features: ['High durability', 'Traffic resistant', 'Long warranty', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/ticari-peyzaj-cimi-350x350.jpg',
    price: 'From 210 MAD/m²'
  },
  {
    id: 'poolside-landscape-grass',
    name: 'Poolside Landscape Grass',
    category: 'landscape',
    description: 'Specialized artificial grass for poolside areas.',
    features: ['Slip resistant', 'Quick drying', 'UV resistant', 'Cool surface'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/havuz-basi-cimi-350x350.jpg',
    price: 'From 220 MAD/m²'
  },
  {
    id: 'rooftop-landscape-grass',
    name: 'Rooftop Landscape Grass',
    category: 'landscape',
    description: 'Lightweight artificial grass for rooftop gardens and terraces.',
    features: ['Lightweight', 'UV resistant', 'Drainage system', 'Easy installation'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/cati-bahce-cimi-350x350.jpg',
    price: 'From 200 MAD/m²'
  },
  {
    id: 'hotel-landscape-grass',
    name: 'Hotel Landscape Grass',
    category: 'landscape',
    description: 'Premium artificial grass for hotels and resorts.',
    features: ['Luxurious appearance', 'Durable', 'All-weather', 'Low maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/otel-peyzaj-cimi-350x350.jpg',
    price: 'From 240 MAD/m²'
  },
  {
    id: 'park-landscape-grass',
    name: 'Park Landscape Grass',
    category: 'landscape',
    description: 'Durable artificial grass for public parks and recreational areas.',
    features: ['High durability', 'Public use', 'Weather resistant', 'Easy maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/park-peyzaj-cimi-350x350.jpg',
    price: 'From 190 MAD/m²'
  },
  {
    id: 'resort-landscape-grass',
    name: 'Resort Landscape Grass',
    category: 'landscape',
    description: 'Luxury artificial grass for resorts and premium properties.',
    features: ['Premium quality', 'Luxurious feel', 'Natural appearance', 'Long warranty'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/resort-peyzaj-cimi-350x350.jpg',
    price: 'From 260 MAD/m²'
  },
  {
    id: 'golf-course-landscape-grass',
    name: 'Golf Course Landscape Grass',
    category: 'landscape',
    description: 'Artificial grass for golf course landscaping and surrounding areas.',
    features: ['Professional quality', 'Durable', 'All-weather', 'Low maintenance'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/golf-saha-peyzaj-cimi-350x350.jpg',
    price: 'From 230 MAD/m²'
  },
  {
    id: 'urban-landscape-grass',
    name: 'Urban Landscape Grass',
    category: 'landscape',
    description: 'Artificial grass for urban landscaping and city projects.',
    features: ['Durable', 'Pollution resistant', 'Low maintenance', 'Aesthetic appeal'],
    image: 'https://nurteks.com.tr/wp-content/uploads/2019/02/kent-peyzaj-cimi-350x350.jpg',
    price: 'From 200 MAD/m²'
  }
];

export const categories = [
  { id: 'all', label: 'All Products', count: products.length },
  { id: 'sports', label: 'Sports Surfaces', count: 15 },
  { id: 'decorative', label: 'Decorative Grass', count: 3 },
  { id: 'landscape', label: 'Landscape', count: 32 },
  { id: 'residential', label: 'Residential', count: products.filter(p => p.category === 'residential').length },
  { id: 'commercial', label: 'Commercial', count: products.filter(p => p.category === 'commercial').length },
];