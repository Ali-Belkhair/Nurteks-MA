'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const heroSlides = [
  {
    id: 1,
    title: 'Gazon Artificiel Premium au Maroc',
    subtitle: 'Transformez vos espaces avec nos solutions de gazon artificiel haut de gamme',
    description: 'Installation professionnelle, garantie 15 ans, économie d\'eau garantie',
    image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    cta: 'Découvrir nos Produits',
    ctaSecondary: 'Voir la Vidéo',
    features: ['Garantie 15 ans', 'Installation Pro', 'Économie d\'eau']
  },
  {
    id: 2,
    title: 'Terrains de Sport Professionnels',
    subtitle: 'Solutions FIFA pour clubs et installations sportives',
    description: 'Gazon artificiel certifié FIFA pour performances optimales',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    cta: 'Solutions Sportives',
    ctaSecondary: 'Nos Références',
    features: ['Certifié FIFA', 'Haute Performance', 'Tout Temps']
  },
  {
    id: 3,
    title: 'Aménagement Commercial',
    subtitle: 'Espaces verts durables pour entreprises et collectivités',
    description: 'Solutions sur-mesure pour espaces publics et commerciaux',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    cta: 'Projets Commerciaux',
    ctaSecondary: 'Devis Gratuit',
    features: ['Trafic Intense', 'Résistant', 'Esthétique']
  }
];

const stats = [
  { number: '500+', label: 'Projets Réalisés', icon: Award },
  { number: '15+', label: 'Années d\'Expérience', icon: Shield },
  { number: '98%', label: 'Clients Satisfaits', icon: Star },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-2 mb-4"
              >
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Nouveau au Maroc
                </Badge>
                <Badge className="bg-primary text-white">
                  Franchise Officielle
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-shadow-lg">
                {currentSlideData.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/95 mb-6 leading-relaxed text-balance">
                {currentSlideData.subtitle}
              </p>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {currentSlideData.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {currentSlideData.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-white"
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Link href="/products">
                    {currentSlideData.cta}
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Link href="/projects">
                    <Play className="mr-2 h-5 w-5" />
                    {currentSlideData.ctaSecondary}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="glass-effect rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Nurteks en Chiffres
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 text-white"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.number}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full glass-effect text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full glass-effect text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          key={currentSlide}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-8 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-medium">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}