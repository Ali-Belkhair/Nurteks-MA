import Link from 'next/link';
import { Home, ArrowLeft, Search, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
      <div className="max-w-2xl mx-auto container-padding text-center">
        <Card className="shadow-large border-0">
          <CardContent className="p-12">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Nurteks</span>
            </div>

            {/* 404 */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Page Non Trouvée
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="nurteks-gradient text-white hover:opacity-90">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Retour à l'Accueil
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/products">
                  <Search className="mr-2 h-5 w-5" />
                  Voir nos Produits
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 mb-4">Pages populaires :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
                  À Propos
                </Link>
                <Link href="/products" className="text-primary hover:text-primary/80 transition-colors">
                  Produits
                </Link>
                <Link href="/projects" className="text-primary hover:text-primary/80 transition-colors">
                  Projets
                </Link>
                <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}