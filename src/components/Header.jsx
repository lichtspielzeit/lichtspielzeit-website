import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Star } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Star className="w-8 h-8 text-purple-600 fill-current" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Lichtspielzeit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/freebie" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Kostenloses Freebie
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/ueber-uns" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Über uns
            </Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/freebie" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Kostenloses Freebie
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/ueber-uns" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link 
                to="/kontakt" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

