import { useState } from 'react'
import { Download, Star, Heart, CheckCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const FreebieDownload = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Vielen Dank, {name}! 🌟
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Dein kostenloses Freebie "10 Rituale für entspannte Mama-Kind-Momente" 
                ist auf dem Weg zu dir! Schau gleich in dein E-Mail-Postfach.
              </p>
              <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Was dich erwartet:
                </h3>
                <ul className="text-left text-purple-700 space-y-2">
                  <li>✨ 10 liebevoll gestaltete Rituale</li>
                  <li>💜 Sofort umsetzbare Ideen für den Alltag</li>
                  <li>🌟 Mehr Verbindung und Achtsamkeit</li>
                  <li>📧 Regelmäßige Inspirationen per E-Mail</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Folge uns auch auf Instagram für tägliche Inspiration: 
                <span className="text-purple-600 font-semibold"> @lichtspielzeit</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-purple-600 fill-current mr-3" />
              <span className="text-purple-600 font-semibold text-lg">Kostenloses Freebie</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              10 Rituale für entspannte 
              <span className="text-purple-600"> Mama-Kind-Momente</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Entdecke liebevolle Rituale, die euch wieder näher zusammenbringen. 
              Ohne Stress, ohne Perfektion – einfach mit Herz und Achtsamkeit.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Sofort umsetzbar</h3>
                  <p className="text-gray-600">Keine komplizierten Vorbereitungen – startet gleich heute</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Für jeden Tag</h3>
                  <p className="text-gray-600">Rituale für Morgen, Mittag und Abend – passend zu eurem Rhythmus</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Download className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Liebevoll gestaltet</h3>
                  <p className="text-gray-600">Wunderschönes PDF zum Ausdrucken oder digital nutzen</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-semibold text-purple-800 mb-3">Das sagen andere Mamas:</h3>
              <blockquote className="text-purple-700 italic">
                "Diese Rituale haben unser Familienleben so bereichert. Endlich wieder echte Verbindung 
                statt Alltagsstress. Danke für diese wundervollen Ideen!" 
                <span className="block text-right mt-2 not-italic font-semibold">- Sarah, Mama von zwei Kindern</span>
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Hol dir dein kostenloses Freebie
                </h2>
                <p className="text-gray-600">
                  Trage dich ein und erhalte sofort Zugang zu den 10 magischen Ritualen
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Dein Vorname
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Wie sollen wir dich nennen?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Deine E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Jetzt kostenlos herunterladen
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Deine Daten sind bei uns sicher. Kein Spam, versprochen!
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Du kannst dich jederzeit wieder abmelden.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FreebieDownload

