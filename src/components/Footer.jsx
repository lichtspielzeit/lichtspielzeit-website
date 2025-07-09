import { Link } from 'react-router-dom'
import { Star, Heart, Mail, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-8 h-8 text-purple-400 fill-current" />
              <span className="text-2xl font-bold">Lichtspielzeit</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Magische Familienmomente, Achtsamkeit und kreative Verbindung im Alltag. 
              Für Mütter und Familien, die wieder mehr Herzzeit spüren wollen.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:mail@lichtspielzeit.de" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/lichtspielzeit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/freebie" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Kostenloses Freebie
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lichtspielzeit. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <Heart className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-gray-400 text-sm">
                Mit Liebe für Familien gemacht
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

