import { Link } from 'react-router-dom'
import { Star, Heart, Sparkles, Download, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-pink-200 rounded-full opacity-25"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Star className="w-16 h-16 text-purple-600 fill-current" />
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-pulse" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                  Lichtspielzeit
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Magische Familienmomente, Achtsamkeit und kreative Verbindung im Alltag. 
                Für Mütter und Familien, die wieder mehr Herzzeit spüren wollen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/freebie"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Kostenloses Freebie holen
              </Link>
              <Link
                to="/shop"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Zum Shop
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Was ist <span className="text-purple-600">Lichtspielzeit</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lichtspielzeit steht für Achtsamkeit, Naturverbundenheit, Kreativität und Herzzeit im Familienleben. 
              Es geht nicht um Perfektion, sondern um Echtheit, Verbindung und Magie im Kleinen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Achtsamkeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Rituale und Momente, die euch ins Hier und Jetzt bringen. 
                Gemeinsame Atemzüge, bewusste Berührungen und stille Verbindung.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kreativität</h3>
              <p className="text-gray-600 leading-relaxed">
                Basteln mit wenig Material und viel Herz. 25 magische Ideen, 
                die Fantasie wecken und gemeinsame Erinnerungen schaffen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Naturverbindung</h3>
              <p className="text-gray-600 leading-relaxed">
                Barfuß durch den Garten, Schätze sammeln im Wald. 
                Die Natur als Spielpartner und Lehrerin entdecken.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Unsere <span className="text-purple-600">Herzensprodukte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Liebevoll gestaltete Begleiter für mehr Verbindung und Magie in eurem Familienalltag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Freebie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Download className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kostenloses Freebie</h3>
                <p className="text-gray-600 mb-4">10 Rituale für entspannte Mama-Kind-Momente</p>
                <Link
                  to="/freebie"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Jetzt herunterladen <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>

            {/* E-Book 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bastelzauber E-Book</h3>
                <p className="text-gray-600 mb-4">25 kreative Ideen für wenig Material und viel Herz</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">18€</span>
                  <Link
                    to="/shop"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Kaufen
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* E-Book 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Verbundenheitsreise</h3>
                <p className="text-gray-600 mb-4">7-Tage-Reise für Mamas und Kinder</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">15€</span>
                  <Link
                    to="/shop"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Kaufen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Alle Produkte entdecken <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für mehr Magie im Familienalltag?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Starte noch heute mit unserem kostenlosen Freebie und entdecke, 
              wie einfach es ist, magische Momente zu schaffen.
            </p>
            <Link
              to="/freebie"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Jetzt kostenlos starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

