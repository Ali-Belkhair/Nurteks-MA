import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Square, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Projets Réalisés - Nurteks Morocco | Références Gazon Artificiel',
  description: 'Découvrez nos projets de gazon artificiel réalisés au Maroc : résidences, terrains de sport, espaces commerciaux. Références et réalisations Nurteks.',
  openGraph: {
    title: 'Projets Réalisés - Nurteks Morocco | Références Gazon Artificiel',
    description: 'Découvrez nos projets de gazon artificiel réalisés au Maroc : résidences, terrains de sport, espaces commerciaux.',
    url: 'https://nurteks.ma/projects',
  },
};

const projects = [
  {
    id: 1,
    title: 'Villa Moderne Ain Diab',
    category: 'Résidentiel',
    location: 'Casablanca',
    area: '250m²',
    duration: '2 jours',
    year: '2024',
    description: 'Transformation complète d\'un jardin résidentiel avec gazon artificiel premium et aménagement paysager.',
    image: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Gazon Premium', 'Système drainage', 'Éclairage LED', 'Arrosage décoratif'],
    client: 'Famille Benali',
    featured: true
  },
  {
    id: 2,
    title: 'Complexe Sportif Mohammed V',
    category: 'Sport',
    location: 'Rabat',
    area: '7000m²',
    duration: '3 semaines',
    year: '2024',
    description: 'Installation d\'un terrain de football certifié FIFA avec gazon artificiel professionnel.',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Certifié FIFA', 'Éclairage professionnel', 'Tribunes', 'Vestiaires'],
    client: 'Commune de Rabat',
    featured: true
  },
  {
    id: 3,
    title: 'Hôtel Marriott Marrakech',
    category: 'Commercial',
    location: 'Marrakech',
    area: '1200m²',
    duration: '1 semaine',
    year: '2024',
    description: 'Aménagement des espaces verts d\'un hôtel 5 étoiles avec gazon artificiel haut de gamme.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Gazon Luxury', 'Zones détente', 'Piscine', 'Restaurant'],
    client: 'Marriott International',
    featured: true
  },
  {
    id: 4,
    title: 'Résidence Les Jardins',
    category: 'Résidentiel',
    location: 'Fès',
    area: '180m²',
    duration: '1 jour',
    year: '2024',
    description: 'Création d\'un espace de jeu sécurisé pour enfants avec gazon artificiel doux.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Sécurité enfants', 'Aire de jeux', 'Clôture', 'Mobilier'],
    client: 'Résidence privée'
  },
  {
    id: 5,
    title: 'Centre Commercial Anfa Place',
    category: 'Commercial',
    location: 'Casablanca',
    area: '800m²',
    duration: '5 jours',
    year: '2023',
    description: 'Aménagement des terrasses et espaces détente d\'un centre commercial moderne.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Terrasses', 'Espaces détente', 'Fontaines', 'Éclairage'],
    client: 'Anfa Place Mall'
  },
  {
    id: 6,
    title: 'Académie de Tennis Agadir',
    category: 'Sport',
    location: 'Agadir',
    area: '2400m²',
    duration: '2 semaines',
    year: '2023',
    description: 'Construction de 4 courts de tennis avec gazon artificiel certifié ITF.',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['4 courts ITF', 'Éclairage nocturne', 'Gradins', 'Club house'],
    client: 'Tennis Academy Agadir'
  }
];

const categories = [
  { id: 'all', label: 'Tous les Projets', count: projects.length },
  { id: 'residential', label: 'Résidentiel', count: projects.filter(p => p.category === 'Résidentiel').length },
  { id: 'sport', label: 'Sport', count: projects.filter(p => p.category === 'Sport').length },
  { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'Commercial').length },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <span className="text-primary font-semibold text-lg">Nos Réalisations</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Projets de Référence au Maroc
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos réalisations à travers le Maroc : jardins résidentiels, 
              terrains de sport professionnels et aménagements commerciaux d'exception.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets Phares</h2>
            <p className="text-gray-600">Nos réalisations les plus emblématiques</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={project.id} className="group hover:shadow-large transition-all duration-500 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {project.area}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div>Client: {project.client}</div>
                      <div>Durée: {project.duration}</div>
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                      Voir Détails
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Toutes Nos Réalisations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white text-xs">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {project.area}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{project.year}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                        Détails
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-primary text-white border-0 shadow-large">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">
                  Votre Projet Sera Notre Prochaine Référence
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Rejoignez nos clients satisfaits et transformez votre espace avec Nurteks
                </p>
                <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/contact">
                    Démarrer Mon Projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}