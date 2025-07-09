import { useState } from 'react'
import { Mail, MessageCircle, Send, Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
              <Heart className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Vielen Dank für deine Nachricht! 💜
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir. 
                In der Zwischenzeit kannst du gerne unsere anderen Inhalte entdecken.
              </p>
              <div className="bg-purple-50 rounded-2xl p-6">
                <p className="text-purple-700">
                  Folge uns auch auf Instagram für tägliche Inspiration: 
                  <span className="font-semibold"> @lichtspielzeit</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lass uns <span className="text-purple-600">in Kontakt</span> bleiben
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hast du Fragen, Anregungen oder möchtest einfach Hallo sagen? 
            Wir freuen uns auf deine Nachricht und antworten so schnell wie möglich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Wir sind für dich da
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-Mail</h3>
                    <p className="text-gray-600">mail@lichtspielzeit.de</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Wir antworten normalerweise innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Instagram</h3>
                    <p className="text-gray-600">@lichtspielzeit</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Folge uns für tägliche Inspiration und schreib uns eine DM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Häufige Themen, bei denen wir helfen:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-purple-500 mr-2" />
                    Fragen zu unseren Produkten
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-purple-500 mr-2" />
                    Technische Probleme beim Download
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-purple-500 mr-2" />
                    Individuelle Beratung für Familien
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-purple-500 mr-2" />
                    Kooperationsanfragen
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-purple-500 mr-2" />
                    Feedback und Verbesserungsvorschläge
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Schreib uns eine Nachricht
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Dein Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Wie heißt du?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Deine E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Deine Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Erzähl uns, was dich beschäftigt..."
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
                      <Send className="w-5 h-5" />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Werde Teil unserer Community
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Folge uns auf Instagram für tägliche Inspiration, Basteltipps und 
            Einblicke hinter die Kulissen. Dort teilen wir auch exklusive Inhalte 
            und beantworten eure Fragen direkt.
          </p>
          <a
            href="https://instagram.com/lichtspielzeit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            @lichtspielzeit folgen
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

