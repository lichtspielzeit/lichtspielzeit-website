import { Building, Mail, Phone, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const Imprint = () => {
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
            <Building className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Impressum
          </h1>
          <p className="text-xl text-gray-600">
            Rechtliche Informationen zu Lichtspielzeit
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Angaben gemäß § 5 TMG</h2>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="space-y-2 text-gray-700">
                  <p><strong>Lichtspielzeit</strong></p>
                  <p>Virginia Kuhlen</p>
                  <p>[Adresse wird hier eingefügt]</p>
                  <p>[PLZ Ort]</p>
                  <p>Deutschland</p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Kontakt</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-gray-800">E-Mail</span>
                  </div>
                  <p className="text-gray-600">mail@lichtspielzeit.de</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Globe className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-gray-800">Website</span>
                  </div>
                  <p className="text-gray-600">www.lichtspielzeit.de</p>
                </div>
              </div>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-600">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">[USt-IdNr. wird hier eingefügt]</span>
              </p>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  Virginia Kuhlen<br />
                  [Adresse]<br />
                  [PLZ Ort]
                </p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Streitschlichtung</h2>
              <p className="text-gray-600 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-600">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Haftung für Inhalte</h2>
              <p className="text-gray-600 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-600">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Haftung für Links</h2>
              <p className="text-gray-600 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
              <p className="text-gray-600">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Urheberrecht</h2>
              <p className="text-gray-600 mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="text-gray-600">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch 
                gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden 
                wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Kontakt für rechtliche Fragen */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Rechtliche Fragen?</h2>
              <p className="text-gray-600 mb-4">
                Bei Fragen zu diesem Impressum oder anderen rechtlichen Angelegenheiten 
                kontaktieren Sie uns gerne:
              </p>
              <a
                href="mailto:mail@lichtspielzeit.de"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                E-Mail senden
              </a>
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
            Stand: 7. Juli 2024
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Imprint

