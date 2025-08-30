'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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

            {/* Error Icon */}
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une Erreur s'est Produite
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous nous excusons pour ce désagrément. Une erreur technique temporaire 
              empêche l'affichage de cette page.
            </p>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-gray-100 rounded-lg p-4 mb-8 text-left">
                <p className="text-sm text-gray-700 font-mono">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={reset}
                size="lg" 
                className="nurteks-gradient text-white hover:opacity-90"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Réessayer
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Retour à l'Accueil
                </Link>
              </Button>
            </div>

            {/* Support Info */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-600 mb-4">
                Si le problème persiste, contactez notre support :
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="tel:+212522XXXXXX" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +212 522-XXXXXX
                </a>
                <a 
                  href="mailto:support@nurteks.ma" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  support@nurteks.ma
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}