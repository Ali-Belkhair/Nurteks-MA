'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Benali',
    role: 'Propriétaire',
    location: 'Casablanca',
    rating: 5,
    comment: 'Excellent travail ! Notre jardin est magnifique et nous économisons énormément d\'eau. L\'équipe Nurteks est très professionnelle.',
    image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=400',
    project: 'Jardin résidentiel 150m²'
  },
  {
    id: 2,
    name: 'Fatima Alaoui',
    role: 'Directrice',
    location: 'Rabat',
    rating: 5,
    comment: 'Installation parfaite pour notre complexe sportif. La qualité FIFA est au rendez-vous et nos joueurs sont ravis.',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
    project: 'Terrain de football 7000m²'
  },
  {
    id: 3,
    name: 'Youssef Tazi',
    role: 'Gérant d\'hôtel',
    location: 'Marrakech',
    rating: 5,
    comment: 'Nos espaces verts sont maintenant parfaits toute l\'année. Nos clients adorent et nous n\'avons plus de soucis d\'entretien.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
    project: 'Aménagement hôtelier 800m²'
  },
  {
    id: 4,
    name: 'Laila Benjelloun',
    role: 'Architecte paysagiste',
    location: 'Fès',
    rating: 5,
    comment: 'Je recommande Nurteks à tous mes clients. La qualité des produits et le professionnalisme de l\'équipe sont exceptionnels.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
    project: 'Projets multiples'
  }
];

const companyLogos = [
  { name: 'Royal Golf Dar Es Salam', logo: '/images/clients/golf.png' },
  { name: 'Université Mohammed V', logo: '/images/clients/university.png' },
  { name: 'OCP Group', logo: '/images/clients/ocp.png' },
  { name: 'Marriott Hotels', logo: '/images/clients/marriott.png' },
  { name: 'Attijariwafa Bank', logo: '/images/clients/bank.png' },
  { name: 'ONCF', logo: '/images/clients/oncf.png' }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          <span className="text-primary font-semibold text-lg">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clients satisfaits à travers le Maroc
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white shadow-large border-0">
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <Quote className="h-12 w-12 text-primary/20 mb-6" />
                        <div className="flex items-center mb-4">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                          "{testimonials[currentTestimonial].comment}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-900 text-lg">
                              {testimonials[currentTestimonial].name}
                            </div>
                            <div className="text-gray-600">
                              {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-primary">
                            {testimonials[currentTestimonial].project}
                          </Badge>
                        </div>
                      </div>

                      {/* Project Image */}
                      <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={`Projet de ${testimonials[currentTestimonial].name}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-medium hover:shadow-large text-gray-700 hover:text-primary transition-all duration-300"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-medium hover:shadow-large text-gray-700 hover:text-primary transition-all duration-300"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Ils Nous Font Confiance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-gray-400 font-semibold text-sm text-center">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}