'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const highlights = [
  {
    title: 'Residential Perfection',
    description: 'Create the perfect lawn for your home with our premium residential artificial grass collection.',
    image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg',
    features: ['UV-Resistant', '15-Year Warranty', 'Pet-Friendly'],
    popular: true
  },
  {
    title: 'Sports Excellence',
    description: 'FIFA-approved artificial grass solutions for professional sports facilities and training grounds.',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    features: ['FIFA Approved', 'Shock Absorption', 'All-Weather']
  },
  {
    title: 'Commercial Durability',
    description: 'Heavy-duty artificial grass designed for high-traffic commercial and public spaces.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    features: ['Heavy Traffic', 'Fire Retardant', 'Easy Maintenance']
  }
];

export function ProductHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Artificial Grass Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of artificial grass products designed for every need, 
            from residential gardens to professional sports facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  {item.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <Link href="/products">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild className="nurteks-gradient text-white hover:opacity-90">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15-Year Warranty</h3>
            <p className="text-gray-600">Long-lasting quality guaranteed with comprehensive warranty coverage.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
            <p className="text-gray-600">Save thousands of liters annually while maintaining beautiful green spaces.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Industry-leading materials and installation techniques for superior results.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}