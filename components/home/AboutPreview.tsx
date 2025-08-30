'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Users,
    title: 'Équipe Experte',
    description: 'Plus de 50 professionnels formés aux dernières techniques'
  },
  {
    icon: Globe,
    title: 'Couverture Nationale',
    description: 'Réseau de franchises dans toutes les grandes villes'
  },
  {
    icon: Award,
    title: 'Qualité Certifiée',
    description: 'Produits certifiés FIFA et conformes aux normes européennes'
  }
];

const milestones = [
  { year: '2010', event: 'Création de Nurteks Turquie' },
  { year: '2018', event: 'Expansion internationale' },
  { year: '2023', event: 'Lancement au Maroc' },
  { year: '2024', event: '500+ projets réalisés' }
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-primary font-semibold text-lg">À Propos de Nurteks</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Leader du Gazon Artificiel au Maroc
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Forte de plus de 15 ans d'expérience en Turquie, Nurteks s'implante au Maroc 
                pour révolutionner l'aménagement paysager avec des solutions durables et esthétiques.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'Technologie turque éprouvée adaptée au climat marocain',
                'Installation par des équipes certifiées et formées',
                'Garantie constructeur de 15 ans sur tous nos produits',
                'Solutions sur-mesure pour chaque type de projet'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="nurteks-gradient text-white hover:opacity-90">
                <Link href="/about">
                  En Savoir Plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Nous Contacter
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-large">
              <Image
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe Nurteks au travail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Installation Professionnelle</p>
                <p className="text-white/80">Par nos équipes certifiées</p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-medium transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 hidden xl:block"
      >
        <div className="glass-effect rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4 text-center">Notre Parcours</h4>
          <div className="flex items-center space-x-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">{milestone.year}</div>
                <div className="text-white/80 text-xs max-w-20">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}