import { Heart, Star, Sparkles, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
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
            Über <span className="text-purple-600">Lichtspielzeit</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die Geschichte hinter unserem Herzensprojekt für mehr Verbindung, 
            Achtsamkeit und Magie im Familienalltag.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Unsere Geschichte</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lichtspielzeit entstand aus dem tiefen Wunsch heraus, Familien wieder 
                  näher zusammenzubringen. In einer Welt voller Termine, Bildschirme und 
                  Alltagsstress sehnen sich viele Eltern nach echten, verbindenden Momenten 
                  mit ihren Kindern.
                </p>
                <p>
                  Virginia, die Gründerin von Lichtspielzeit, erlebte selbst, wie wertvoll 
                  es ist, bewusst innezuhalten und gemeinsame Rituale zu schaffen. Aus dieser 
                  persönlichen Erfahrung heraus entstanden die liebevoll gestalteten Materialien, 
                  die heute Familien auf der ganzen Welt begleiten.
                </p>
                <p>
                  Jedes Produkt, jede Idee und jeder Impuls ist durchdrungen von der Überzeugung, 
                  dass Magie in den kleinen Momenten liegt – und dass diese Momente für jede 
                  Familie erreichbar sind.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Star className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-purple-800 font-semibold">
                    Hier könnte ein schönes Foto von Virginia<br />
                    in der Natur stehen
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Wofür wir stehen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Echtheit</h3>
              <p className="text-gray-600">
                Keine Perfektion, sondern authentische Momente und echte Verbindung 
                zwischen Eltern und Kindern.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Einfachheit</h3>
              <p className="text-gray-600">
                Magische Momente brauchen keine komplizierten Vorbereitungen – 
                oft reichen wenige Materialien und viel Herz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Achtsamkeit</h3>
              <p className="text-gray-600">
                Bewusst im Hier und Jetzt ankommen und die kleinen Wunder 
                des Alltags gemeinsam entdecken.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gemeinschaft</h3>
              <p className="text-gray-600">
                Familien stärken und eine liebevolle Community aufbauen, 
                in der sich alle unterstützt fühlen.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Mission</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Wir möchten Familien dabei unterstützen, wieder mehr Verbindung, Ruhe und Freude 
            in ihren Alltag zu bringen. Durch liebevoll gestaltete Materialien, praktische 
            Rituale und eine herzliche Community schaffen wir Räume für echte Begegnungen 
            zwischen Eltern und Kindern.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 rounded-full p-4">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Das Team hinter Lichtspielzeit
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Star className="w-16 h-16 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Virginia</h3>
            <p className="text-lg text-purple-600 mb-6">Gründerin & Herzensmensch</p>
            <p className="text-gray-600 leading-relaxed">
              Virginia ist Mutter, Träumerin und leidenschaftliche Verfechterin von mehr 
              Achtsamkeit im Familienalltag. Mit ihrer warmen Art und ihrem tiefen Verständnis 
              für die Bedürfnisse von Familien schafft sie Materialien, die wirklich berühren 
              und nachhaltig verändern.
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Möchtest du Teil unserer Community werden?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Folge uns auf Instagram für tägliche Inspiration oder schreib uns eine E-Mail. 
            Wir freuen uns auf den Austausch mit dir!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/lichtspielzeit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Folge uns auf Instagram
            </a>
            <a
              href="mailto:mail@lichtspielzeit.de"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Schreib uns eine E-Mail
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

