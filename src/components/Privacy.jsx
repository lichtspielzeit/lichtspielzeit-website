import { Shield, Lock, Eye, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-600">
            Deine Privatsphäre ist uns wichtig. Hier erfährst du, wie wir mit deinen Daten umgehen.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">1. Verantwortliche Stelle</h2>
              </div>
              <p className="text-gray-600">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-purple-50 rounded-lg p-4 mt-4">
                <p className="text-gray-700 m-0">
                  <strong>Lichtspielzeit</strong><br />
                  Virginia Kuhlen<br />
                  E-Mail: mail@lichtspielzeit.de
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">2. Welche Daten wir sammeln</h2>
              </div>
              <p className="text-gray-600">
                Wir sammeln nur die Daten, die für die Bereitstellung unserer Dienste notwendig sind:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Kontaktdaten:</strong> Name und E-Mail-Adresse beim Freebie-Download oder Kontaktformular</li>
                <li><strong>Technische Daten:</strong> IP-Adresse, Browser-Typ, Besuchszeit (automatisch durch IONOS)</li>
                <li><strong>Nutzungsdaten:</strong> Welche Seiten du besuchst (zur Verbesserung unserer Website)</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 m-0">3. Wie wir deine Daten verwenden</h2>
              </div>
              <p className="text-gray-600">
                Deine Daten verwenden wir ausschließlich für folgende Zwecke:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Freebie-Versand:</strong> Um dir das kostenlose PDF zuzusenden</li>
                <li><strong>Newsletter:</strong> Für Inspirationen und Updates (nur mit deiner Einwilligung)</li>
                <li><strong>Kundenservice:</strong> Um deine Anfragen zu beantworten</li>
                <li><strong>Website-Verbesserung:</strong> Zur Optimierung unserer Inhalte</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Deine Rechte</h2>
              <p className="text-gray-600 mb-4">
                Du hast jederzeit folgende Rechte bezüglich deiner Daten:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Auskunft</h3>
                  <p className="text-gray-600 text-sm">
                    Du kannst erfahren, welche Daten wir über dich gespeichert haben.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Berichtigung</h3>
                  <p className="text-gray-600 text-sm">
                    Falsche Daten können jederzeit korrigiert werden.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Löschung</h3>
                  <p className="text-gray-600 text-sm">
                    Du kannst die Löschung deiner Daten verlangen.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Widerspruch</h3>
                  <p className="text-gray-600 text-sm">
                    Du kannst der Verarbeitung deiner Daten widersprechen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies und Tracking</h2>
              <p className="text-gray-600 mb-4">
                Unsere Website verwendet nur technisch notwendige Cookies. Wir setzen keine 
                Tracking-Tools oder Analysesoftware ein, die deine Privatsphäre beeinträchtigen.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-800 m-0">
                  <strong>Gut zu wissen:</strong> Wir verwenden keine Cookies von Drittanbietern 
                  und geben deine Daten nicht an Werbepartner weiter.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Datensicherheit</h2>
              <p className="text-gray-600">
                Deine Daten werden sicher übertragen und gespeichert:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>SSL-Verschlüsselung für alle Datenübertragungen</li>
                <li>Sichere Server in Deutschland (IONOS)</li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Zugriff nur durch autorisierte Personen</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Newsletter abbestellen</h2>
              <p className="text-gray-600">
                Du kannst dich jederzeit vom Newsletter abmelden:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Klick auf den Abmelde-Link in jeder E-Mail</li>
                <li>Schreib uns eine E-Mail an mail@lichtspielzeit.de</li>
                <li>Nutze unser Kontaktformular</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-gray-600">
                Wir können diese Datenschutzerklärung gelegentlich aktualisieren, um Änderungen 
                in unseren Praktiken oder aus rechtlichen Gründen zu berücksichtigen. 
                Die aktuelle Version findest du immer auf dieser Seite.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Fragen zum Datenschutz?</h2>
              <p className="text-gray-600 mb-4">
                Wenn du Fragen zu unserer Datenschutzerklärung hast oder deine Rechte 
                ausüben möchtest, kontaktiere uns gerne:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:mail@lichtspielzeit.de"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  E-Mail senden
                </a>
                <a
                  href="/kontakt"
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center"
                >
                  Kontaktformular
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500">
            Letzte Aktualisierung: 7. Juli 2024
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Privacy

