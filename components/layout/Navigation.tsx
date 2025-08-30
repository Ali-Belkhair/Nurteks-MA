'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Accueil', labelEn: 'Home' },
  { href: '/about', label: 'À Propos', labelEn: 'About' },
  { 
    href: '/products', 
    label: 'Produits', 
    labelEn: 'Products',
    submenu: [
      { href: '/products/residential', label: 'Résidentiel', labelEn: 'Residential' },
      { href: '/products/sports', label: 'Terrains de Sport', labelEn: 'Sports Fields' },
      { href: '/products/commercial', label: 'Commercial', labelEn: 'Commercial' },
      { href: '/products/landscaping', label: 'Aménagement', labelEn: 'Landscaping' },
    ]
  },
  { href: '/projects', label: 'Projets', labelEn: 'Projects' },
  { href: '/blog', label: 'Blog', labelEn: 'Blog' },
  { href: '/contact', label: 'Contact', labelEn: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm no-print">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+212 522-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@nurteks.ma</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span>Livraison gratuite dans tout le Maroc</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg mt-0' 
            : 'bg-transparent mt-10'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="h-7 w-7 text-white" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className={cn(
                  'text-2xl font-bold font-poppins transition-colors',
                  isScrolled ? 'text-gray-900' : 'text-white'
                )}>
                  Nurteks
                </span>
                <span className={cn(
                  'text-xs font-medium transition-colors',
                  isScrolled ? 'text-primary' : 'text-white/80'
                )}>
                  MOROCCO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:scale-105',
                      isActive(item.href)
                        ? isScrolled 
                          ? 'text-primary font-semibold' 
                          : 'text-white font-semibold'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-primary' 
                          : 'text-white/90 hover:text-white'
                    )}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={cn(
                        'h-4 w-4 transition-transform',
                        activeSubmenu === item.href && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-large border border-gray-100 py-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Button 
                asChild
                className="nurteks-gradient text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Devis Gratuit
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container-padding py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block text-base font-medium transition-colors py-2',
                        isActive(item.href) 
                          ? 'text-primary font-semibold' 
                          : 'text-gray-700 hover:text-primary'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button 
                  asChild
                  className="w-full nurteks-gradient text-white mt-6"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Devis Gratuit
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}