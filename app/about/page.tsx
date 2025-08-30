import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Users, Award, Leaf, Target, Heart, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'À Propos - Nurteks Morocco | Leader du Gazon Artificiel',
  description: 'Découvrez l\'histoire de Nurteks, leader turc du gazon artificiel maintenant au Maroc. Notre mission, nos valeurs et notre engagement pour des solutions durables.',
  openGraph: {
    title: 'À Propos - Nurteks Morocco | Leader du Gazon Artificiel',
    description: 'Découvrez l\'histoire de Nurteks, leader turc du gazon artificiel maintenant au Maroc.',
    url: 'https://nurteks.ma/about',
  },
};

const stats = [
  { number: '500+', label: 'Projets Réalisés', icon: Award },
  { number: '15+', label: 'Années d\'Expérience', icon: Shield },
  { number: '50+', label: 'Partenaires Franchise', icon: Users },
  { number: '98%', label: 'Satisfaction Client', icon: Heart },
];

const values = [
  {
    icon: Leaf,
    title: 'Durabilité',
    description: 'Engagement pour des solutions écologiques qui préservent les ressources en eau et réduisent l\'impact environnemental.'
  },
  {
    icon: Shield,
    title: 'Qualité',
    description: 'Matériaux premium et installation professionnelle pour des résultats durables et esthétiques.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Recherche continue pour améliorer nos technologies et répondre aux besoins évolutifs du marché.'
  },
  {
    icon: Heart,
    title: 'Satisfaction Client',
    description: 'Dédication à dépasser les attentes avec un service personnalisé et un accompagnement expert.'
  },
];

const timeline = [
  {
    year: '2008',
    title: 'Fondation en Turquie',
    description: 'Création de Nurteks avec une vision révolutionnaire du gazon artificiel'
  },
  {
    year: '2012',
    title: 'Certification FIFA',
    description: 'Obtention des certifications internationales pour les terrains de sport'
  },
  {
    year: '2018',
    title: 'Expansion Internationale',
    description: 'Début de l\'expansion vers les marchés du Moyen-Orient et d\'Afrique'
  },
  {
    year: '2023',
    title: 'Arrivée au Maroc',
    description: 'Lancement officiel de Nurteks Morocco avec le premier centre à Casablanca'
  },
  {
    year: '2024',
    title: 'Réseau National',
    description: 'Développement du réseau de franchises dans les principales villes marocaines'
  }
];

const certifications = [
  { name: 'FIFA Quality Pro', description: 'Certification pour terrains de football professionnels' },
  { name: 'ITF Approved', description: 'Approuvé pour courts de tennis internationaux' },
  { name: 'CE Marking', description: 'Conformité aux normes européennes de sécurité' },
  { name: 'ISO 9001', description: 'Système de management de la qualité certifié' },
  { name: 'REACH Compliant', description: 'Respect des réglementations chimiques européennes' },
  { name: 'UV Resistant', description: 'Résistance UV testée et garantie 15 ans' }
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section-padding nurteks-gradient text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Franchise Officielle Nurteks
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                L'Excellence Turque au Service du Maroc
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Nurteks apporte au Maroc plus de 15 ans d'expertise turque dans le gazon artificiel, 
                avec des solutions innovantes adaptées au climat et aux besoins locaux.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-white/80">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Projets Réalisés</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-large">
              <Image
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe Nurteks Morocco au travail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-large">
                <Image
                  src="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Installation de gazon artificiel Nurteks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -right-6 bg-white shadow-large border-0 p-6">
                <div className="flex items-center space-x-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-bold text-gray-900">Présence Internationale</div>
                    <div className="text-gray-600 text-sm">Turquie, Moyen-Orient, Afrique</div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Fondée en 2008 en Turquie, Nurteks est rapidement devenue une référence 
                  dans l'industrie du gazon artificiel grâce à son innovation constante 
                  et sa qualité exceptionnelle.
                </p>
                <p>
                  Forte de son succès en Turquie et au Moyen-Orient, Nurteks s'implante 
                  au Maroc en 2023 pour apporter son expertise aux professionnels et 
                  particuliers marocains.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'être le partenaire de confiance de 
                  centaines de clients satisfaits qui profitent de pelouses parfaites 
                  toute l'année, tout en économisant l'eau et en réduisant l'entretien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 années d'innovation et de croissance continue
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-emerald-400" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions chez Nurteks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-500 text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Certifications & Qualité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos produits respectent les plus hauts standards internationaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto container-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Notre Mission
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
            Transformer les paysages marocains avec des solutions de gazon artificiel innovantes 
            qui préservent l'eau, réduisent l'entretien et créent des espaces extérieurs durables 
            pour les générations futures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovation Continue</h3>
                <p className="text-white/80">Recherche et développement pour des solutions toujours plus performantes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Leaf className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Respect Environnemental</h3>
                <p className="text-white/80">Solutions durables pour préserver les ressources naturelles</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Partenariat Local</h3>
                <p className="text-white/80">Développement d'un réseau de partenaires marocains qualifiés</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}