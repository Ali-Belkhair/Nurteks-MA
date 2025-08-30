'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, Calculator, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const contactMethods = [
  {
    icon: Phone,
    title: 'Téléphone',
    details: '+212 522-XXXXXX',
    description: 'Lun-Ven 9h-18h, Sam 9h-14h',
    action: 'Appeler maintenant'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'contact@nurteks.ma',
    description: 'Réponse sous 24h',
    action: 'Envoyer un email'
  },
  {
    icon: MapPin,
    title: 'Showroom',
    details: 'Zone Industrielle Ain Sebaa',
    description: 'Casablanca, Maroc',
    action: 'Voir sur la carte'
  },
  {
    icon: Clock,
    title: 'Horaires',
    details: 'Lun-Ven: 9h-18h',
    description: 'Sam: 9h-14h, Dim: Fermé',
    action: 'Prendre RDV'
  }
];

const serviceAreas = [
  { city: 'Casablanca', region: 'Grand Casablanca', status: 'Siège Social', available: true },
  { city: 'Rabat', region: 'Rabat-Salé-Kénitra', status: 'Franchise', available: true },
  { city: 'Marrakech', region: 'Marrakech-Safi', status: 'Franchise', available: true },
  { city: 'Fès', region: 'Fès-Meknès', status: 'Franchise', available: true },
  { city: 'Tangier', region: 'Tanger-Tétouan-Al Hoceïma', status: 'Franchise', available: true },
  { city: 'Agadir', region: 'Souss-Massa', status: 'Franchise', available: true },
  { city: 'Oujda', region: 'Oriental', status: 'Bientôt Disponible', available: false },
  { city: 'Meknès', region: 'Fès-Meknès', status: 'Bientôt Disponible', available: false },
];

const faqs = [
  {
    question: 'Combien de temps dure l\'installation ?',
    answer: 'L\'installation varie selon la superficie : 1-2 jours pour un jardin résidentiel, 1-3 semaines pour un terrain de sport professionnel.'
  },
  {
    question: 'Quelle garantie offrez-vous ?',
    answer: 'Nous offrons une garantie complète de 15 ans sur nos produits et 5 ans sur l\'installation par nos équipes certifiées.'
  },
  {
    question: 'Le gazon artificiel est-il sûr pour les enfants et animaux ?',
    answer: 'Absolument ! Nos gazons sont non-toxiques, hypoallergéniques et spécialement conçus pour être sûrs pour toute la famille.'
  },
  {
    question: 'Combien d\'eau vais-je économiser ?',
    answer: 'Une pelouse de 100m² peut économiser 15,000 à 25,000 litres d\'eau par mois, soit une réduction significative de votre facture.'
  },
  {
    question: 'Proposez-vous un financement ?',
    answer: 'Oui, nous proposons des solutions de financement flexibles et des facilités de paiement adaptées à votre budget.'
  },
  {
    question: 'Comment entretenir le gazon artificiel ?',
    answer: 'L\'entretien est minimal : brossage occasionnel, rinçage en cas de besoin, et inspection annuelle. Nous fournissons un guide complet.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    area: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    terms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        projectType: '',
        area: '',
        budget: '',
        timeline: '',
        message: '',
        newsletter: false,
        terms: false
      });
    }, 5000);
  };

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding nurteks-gradient text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Obtenez Votre Devis Gratuit
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Nos experts vous accompagnent dans votre projet de gazon artificiel. 
              Consultation gratuite, devis personnalisé et installation professionnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-medium transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-700 font-medium mb-2">
                      {method.details}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {method.description}
                    </p>
                    <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="shadow-large border-0">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <div className="flex items-center space-x-3 mb-8">
                        <Calculator className="h-8 w-8 text-primary" />
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">
                            Calculateur de Devis Intelligent
                          </h2>
                          <p className="text-gray-600">Obtenez une estimation personnalisée en quelques clics</p>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              Prénom *
                            </label>
                            <Input
                              id="firstName"
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              placeholder="Votre prénom"
                              className="transition-all focus:ring-primary focus:border-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Nom *
                            </label>
                            <Input
                              id="lastName"
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              placeholder="Votre nom"
                              className="transition-all focus:ring-primary focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="votre@email.com"
                              className="transition-all focus:ring-primary focus:border-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Téléphone *
                            </label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="+212 XXX-XXXXXX"
                              className="transition-all focus:ring-primary focus:border-primary"
                            />
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                              Ville *
                            </label>
                            <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                              <SelectTrigger className="transition-all focus:ring-primary focus:border-primary">
                                <SelectValue placeholder="Sélectionnez votre ville" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="casablanca">Casablanca</SelectItem>
                                <SelectItem value="rabat">Rabat</SelectItem>
                                <SelectItem value="marrakech">Marrakech</SelectItem>
                                <SelectItem value="fes">Fès</SelectItem>
                                <SelectItem value="tangier">Tanger</SelectItem>
                                <SelectItem value="agadir">Agadir</SelectItem>
                                <SelectItem value="other">Autre ville</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                              Type de Projet *
                            </label>
                            <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                              <SelectTrigger className="transition-all focus:ring-primary focus:border-primary">
                                <SelectValue placeholder="Type de projet" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="residential">Jardin Résidentiel</SelectItem>
                                <SelectItem value="sports">Terrain de Sport</SelectItem>
                                <SelectItem value="commercial">Espace Commercial</SelectItem>
                                <SelectItem value="landscaping">Aménagement Paysager</SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                              Surface (m²) *
                            </label>
                            <Input
                              id="area"
                              type="number"
                              required
                              value={formData.area}
                              onChange={(e) => handleInputChange('area', e.target.value)}
                              placeholder="Ex: 150"
                              className="transition-all focus:ring-primary focus:border-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                              Budget Estimé (DH)
                            </label>
                            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                              <SelectTrigger className="transition-all focus:ring-primary focus:border-primary">
                                <SelectValue placeholder="Budget" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-50k">Moins de 50,000 DH</SelectItem>
                                <SelectItem value="50k-100k">50,000 - 100,000 DH</SelectItem>
                                <SelectItem value="100k-200k">100,000 - 200,000 DH</SelectItem>
                                <SelectItem value="200k-500k">200,000 - 500,000 DH</SelectItem>
                                <SelectItem value="over-500k">Plus de 500,000 DH</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                              Délai Souhaité
                            </label>
                            <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                              <SelectTrigger className="transition-all focus:ring-primary focus:border-primary">
                                <SelectValue placeholder="Délai" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="urgent">Urgent (moins d'1 mois)</SelectItem>
                                <SelectItem value="1-3months">1-3 mois</SelectItem>
                                <SelectItem value="3-6months">3-6 mois</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Détails du Projet *
                          </label>
                          <Textarea
                            id="message"
                            required
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Décrivez votre projet : type d'espace, contraintes particulières, attentes spécifiques..."
                            rows={5}
                            className="transition-all focus:ring-primary focus:border-primary"
                          />
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="newsletter"
                              checked={formData.newsletter}
                              onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                            />
                            <label htmlFor="newsletter" className="text-sm text-gray-600">
                              Je souhaite recevoir les actualités et conseils Nurteks
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              checked={formData.terms}
                              onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                              required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                              J'accepte les conditions générales et la politique de confidentialité *
                            </label>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full nurteks-gradient text-white hover:opacity-90 transition-all duration-300"
                          disabled={isSubmitting || !formData.terms}
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                          ) : (
                            <Send className="mr-2 h-5 w-5" />
                          )}
                          {isSubmitting ? 'Envoi en cours...' : 'Obtenir Mon Devis Gratuit'}
                        </Button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="text-center py-16"
                    >
                      <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Demande Envoyée avec Succès !
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
                        Merci pour votre confiance. Notre équipe vous contactera dans les 24h 
                        pour discuter de votre projet.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 max-w-sm mx-auto">
                        <p className="text-sm text-gray-500">
                          Référence: NT-{Date.now().toString().slice(-8)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <Card className="shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">Pourquoi Nurteks ?</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Garantie 15 ans sur tous nos produits',
                      'Installation par équipes certifiées',
                      'Consultation et devis gratuits',
                      'Réseau national de franchises',
                      'Support après-vente dédié',
                      'Financement disponible'
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Calculator */}
              <Card className="shadow-medium border-0 bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Estimation Rapide</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-white/80 mb-1">Gazon Résidentiel</div>
                      <div className="text-lg font-bold">180-250 DH/m²</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-white/80 mb-1">Terrain de Sport</div>
                      <div className="text-lg font-bold">220-280 DH/m²</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-white/80 mb-1">Commercial</div>
                      <div className="text-lg font-bold">150-200 DH/m²</div>
                    </div>
                  </div>
                  <p className="text-xs text-white/70 mt-4">
                    *Prix indicatifs incluant installation. Devis précis après visite technique.
                  </p>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-medium border-0 bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-3">Urgence ou SAV</h3>
                  <p className="text-red-700 text-sm mb-4">
                    Pour les urgences ou le service après-vente
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    +212 6XX-XXXXXX
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zones de Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nurteks dessert tout le Maroc grâce à son réseau de franchises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`hover:shadow-medium transition-all duration-300 ${
                  area.available ? 'border-primary/20' : 'border-gray-200'
                }`}>
                  <CardContent className="p-6 text-center">
                    <MapPin className={`h-8 w-8 mx-auto mb-3 ${
                      area.available ? 'text-primary' : 'text-gray-400'
                    }`} />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {area.city}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">{area.region}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      area.available
                        ? area.status === 'Siège Social'
                          ? 'bg-primary text-white'
                          : 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {area.status}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Réponses aux questions les plus courantes sur nos solutions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Vous ne trouvez pas la réponse à votre question ?</p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="mailto:contact@nurteks.ma">
                Contactez nos Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}