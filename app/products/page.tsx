'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (categoryParam && categories.some(c => c.id === categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Premium Artificial Grass Products
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of artificial grass solutions designed for every application, 
              from residential gardens to professional sports facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters - Enhanced for mobile */}
      <section className="py-6 md:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:gap-4">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-500" />
              <h2 className="text-lg font-medium">Filter Products</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-primary text-white' : ''}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>

            <div className="flex justify-between items-center border-t pt-4 mt-2">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 hidden sm:inline">View:</span>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Enhanced for better mobile display */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className={`grid gap-6 md:gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden h-full ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}>
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'md:w-1/3 h-56 sm:h-64 md:h-auto' : 'h-56 sm:h-64'
                  }`}>
                    {product.popular && (
                      <Badge className="absolute top-4 left-4 z-10 bg-primary text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className={`p-4 sm:p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <Badge variant="secondary" className="capitalize">
                          {product.category}
                        </Badge>
                        <span className="text-lg font-bold text-primary">
                          {product.price}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {product.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col xs:flex-row gap-3">
                      <Button className="flex-1 group-hover:bg-primary group-hover:text-white transition-colors">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}