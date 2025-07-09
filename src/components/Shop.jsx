import { ShoppingBag, Star, Heart, Sparkles, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Bastelzauber E-Book",
      subtitle: "25 kreative Ideen für wenig Material und viel Herz",
      price: "18€",
      originalPrice: null,
      description: "Ein liebevoll gestaltetes E-Book mit 25 magischen Bastelideen, die Fantasie wecken und gemeinsame Erinnerungen schaffen. Perfekt für Regentage und kreative Nachmittage.",
      features: [
        "25 detaillierte Bastelideen",
        "Schritt-für-Schritt Anleitungen",
        "Wunderschöne Illustrationen",
        "Sofortiger Download",
        "Druckfreundliches Format"
      ],
      icon: Sparkles,
      color: "from-green-400 to-green-600",
      popular: false
    },
    {
      id: 2,
      title: "7-Tage-Verbundenheitsreise",
      subtitle: "Ein achtsamer Wochenplan für Mamas und Kinder",
      price: "15€",
      originalPrice: null,
      description: "Eine wunderschöne 7-Tage-Reise voller Rituale, Seelenmomenten und einer bezaubernden Abendgeschichte. Für mehr Verbindung und Achtsamkeit im Familienalltag.",
      features: [
        "7 Tage strukturierte Rituale",
        "Morgen-, Mittags- und Abendrituale",
        "Exklusive Abendgeschichte",
        "Achtsamkeitsübungen",
        "Sofortiger Download"
      ],
      icon: Heart,
      color: "from-pink-400 to-pink-600",
      popular: false
    },
    {
      id: 3,
      title: "Affirmationskarten Set",
      subtitle: "25 magische Kraftkarten für kleine und große Herzen",
      price: "12€",
      originalPrice: null,
      description: "Wunderschön gestaltete Affirmationskarten mit goldener Schrift und magischen Elementen. Perfekt für tägliche Inspiration und Stärkung des Selbstvertrauens.",
      features: [
        "25 liebevolle Affirmationen",
        "Elegantes Design mit Goldakzenten",
        "A6 Format, druckfertig",
        "Für Kinder und Erwachsene",
        "Hochwertige PDF-Qualität"
      ],
      icon: Star,
      color: "from-yellow-400 to-yellow-600",
      popular: true
    },
    {
      id: 4,
      title: "Komplettes Bundle",
      subtitle: "Alle E-Books + Affirmationskarten",
      price: "35€",
      originalPrice: "45€",
      description: "Das komplette Lichtspielzeit-Paket für maximale Familienmagie. Spare 10€ beim Kauf aller Produkte zusammen und erhalte sofortigen Zugang zu allem.",
      features: [
        "Bastelzauber E-Book (Wert: 18€)",
        "Verbundenheitsreise (Wert: 15€)",
        "Affirmationskarten (Wert: 12€)",
        "10€ Ersparnis",
        "Sofortiger Zugang zu allem"
      ],
      icon: ShoppingBag,
      color: "from-purple-400 to-purple-600",
      popular: true
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Unser <span className="text-purple-600">Herzens-Shop</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Liebevoll gestaltete Begleiter für mehr Verbindung, Kreativität und Magie 
              in eurem Familienalltag. Sofortiger Download nach dem Kauf.
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative ${
                product.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Beliebt
                </div>
              )}

              {/* Product Header */}
              <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                <product.icon className="w-16 h-16 text-white" />
                <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm">{product.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-600">{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">{product.originalPrice}</div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Das ist enthalten:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buy Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Jetzt kaufen & herunterladen
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Warum unsere Produkte besonders sind
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mit Liebe gestaltet</h3>
                <p className="text-gray-600">
                  Jedes Produkt ist mit viel Herz und Aufmerksamkeit für Details erstellt
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sofortiger Zugang</h3>
                <p className="text-gray-600">
                  Nach dem Kauf erhältst du sofort Zugang zu allen Materialien
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Praxiserprobt</h3>
                <p className="text-gray-600">
                  Alle Ideen sind in echten Familien getestet und für gut befunden
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Häufige Fragen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Wie erhalte ich meine Produkte?
              </h3>
              <p className="text-gray-600">
                Nach dem Kauf erhältst du sofort eine E-Mail mit den Download-Links. 
                Alle Produkte sind als PDF verfügbar und können beliebig oft heruntergeladen werden.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Kann ich die Materialien ausdrucken?
              </h3>
              <p className="text-gray-600">
                Ja, alle unsere Produkte sind druckoptimiert. Du kannst sie zu Hause ausdrucken 
                oder in einer Druckerei deiner Wahl professionell drucken lassen.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Für welches Alter sind die Produkte geeignet?
              </h3>
              <p className="text-gray-600">
                Unsere Materialien sind für Familien mit Kindern von 3-12 Jahren konzipiert, 
                können aber flexibel an das Alter angepasst werden.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Gibt es eine Geld-zurück-Garantie?
              </h3>
              <p className="text-gray-600">
                Ja, wenn du nicht zufrieden bist, erhältst du innerhalb von 14 Tagen 
                dein Geld zurück. Schreib uns einfach eine E-Mail.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Shop

