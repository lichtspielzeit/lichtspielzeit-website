import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import FreebieDownload from './components/FreebieDownload'
import Shop from './components/Shop'
import About from './components/About'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import Imprint from './components/Imprint'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/freebie" element={<FreebieDownload />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/impressum" element={<Imprint />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

