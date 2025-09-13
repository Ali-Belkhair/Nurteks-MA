import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Nurteks</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Transforming Morocco's landscapes with premium artificial grass solutions for homes, sports facilities, and urban spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=residential" className="text-gray-300 hover:text-primary transition-colors">Residential Grass</Link></li>
              <li><Link href="/products?category=sports" className="text-gray-300 hover:text-primary transition-colors">Sports Fields</Link></li>
              <li><Link href="/products?category=commercial" className="text-gray-300 hover:text-primary transition-colors">Commercial Spaces</Link></li>
              <li><Link href="/products?category=landscaping" className="text-gray-300 hover:text-primary transition-colors">Landscaping</Link></li>
              <li><span className="text-gray-300">Accessories</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+212 5XX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@nurteks.ma</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-300">Casablanca, Morocco</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nurteks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}