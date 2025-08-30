'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Droplets, Zap, Home, Trophy, Building, Trees } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const productCategories = [
  {
    id: 'residential',
    label: 'Résidentiel',
    icon: Home,
    description: 'Pelouses parfaites pour votre maison',
    products: [
      {
        name: 'Nurteks Home Premium',
        description: 'Gazon artificiel ultra-réaliste pour jardins résidentiels',
        image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=600',
        features: ['Résistant UV', 'Garantie 15 ans', 'Compatible animaux'],
        price: 'À partir de 180 DH/m²',
        popular: true
      },
      {
        name: 'Nurteks Garden Luxury',
        description: 'Solution haut de gamme pour espaces de prestige',
        image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
        features: ['Toucher naturel', 'Drainage optimal', 'Esthétique premium'],
        price: 'À partir de 250 DH/m²'
      }
    ]
  },
  {
    id: 'sports',
    label: 'Sport',
    icon: Trophy,
    description: 'Terrains professionnels certifiés',
    products: [
      {
        name: 'Nurteks Sports Pro',
        description: 'Gazon artificiel certifié FIFA pour terrains de football',
        image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
        features: ['Certifié FIFA', 'Absorption chocs', 'Résistant intempéries'],
        price: 'À partir de 220 DH/m²',
        popular: true
      },
      {
        name: 'Nurteks Tennis Court',
        description: 'Surface spécialisée pour courts de tennis',
        image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600',
        features: ['Approuvé ITF', 'Rebond constant', 'Surface antidérapante'],
        price: 'À partir de 280 DH/m²'
      }
    ]
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: Building,
    description: 'Solutions pour espaces publics',
    products: [
      {
        name: 'Nurteks Commercial Elite',
        description: 'Gazon résistant pour zones à fort trafic',
        image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
        features: ['Trafic intense', 'Ignifuge', 'Installation facile'],
        price: 'À partir de 150 DH/m²'
      }
    ]
  },
  {
    id: 'landscaping',
    label: 'Paysager',
    icon: Trees,
    description: 'Aménagement urbain et décoratif',
    products: [
      {
        name: 'Nurteks Urban Landscape',
        description: 'Gazon décoratif pour aménagement urbain',
        image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
        features: ['Aspect naturel', 'Variété couleurs', 'Texture douce'],
        price: 'À partir de 120 DH/m²'
      }
    ]
  }
];

const benefits = [
  {
    icon: Droplets,
    title: 'Économie d\'Eau',
    description: 'Jusqu\'à 25,000L économisés par mois',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Garantie 15 Ans',
    description: 'Protection complète produit et installation',
    color: 'text-primary'
  },
  {
    icon: Zap,
    title: 'Installation Rapide',
    description: 'Mise en service en 1-2 jours',
    color: 'text-orange-600'
  },
  {
    icon: Star,
    title: 'Qualité Premium',
    description: 'Matériaux européens haute qualité',
    color: 'text-yellow-600'
  }
];

export function ProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState('residential');

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg">Nos Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Gazon Artificiel Premium pour Tous Vos Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de gazons artificiels conçus pour répondre 
            à tous vos besoins, des jardins résidentiels aux installations sportives professionnelles.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${benefit.color}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Product Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-white shadow-soft rounded-xl p-2">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-3xl font-bold text-gray-900">{category.label}</h3>
                    </div>
                    <p className="text-lg text-gray-600">{category.description}</p>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="group hover:shadow-large transition-all duration-500 overflow-hidden h-full">
                          <div className="relative h-64 overflow-hidden">
                            {product.popular && (
                              <Badge className="absolute top-4 left-4 z-10 bg-primary text-white shadow-lg">
                                <Star className="w-3 h-3 mr-1" />
                                Populaire
                              </Badge>
                            )}
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                {product.name}
                              </h4>
                              <span className="text-lg font-bold text-primary">
                                {product.price}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {product.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {product.features.map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-3">
                              <Button 
                                asChild 
                                className="flex-1 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                              >
                                <Link href="/contact">
                                  Devis Gratuit
                                </Link>
                              </Button>
                              <Button asChild variant="outline" size="sm">
                                <Link href={`/products#${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                  Détails
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-large">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'une Solution Personnalisée ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos experts vous accompagnent dans le choix de la solution parfaite 
              pour votre projet. Consultation gratuite et devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="nurteks-gradient text-white hover:opacity-90">
                <Link href="/products">
                  Voir Tous les Produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Consultation Gratuite
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}