import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhoWeAre from "./components/WhoWeAre"
import Features from "./components/Features"
import OurVision from "./components/OurVision"
import StickyCTA from "./components/StickyCTA"
import QuoteModal from "./components/QuoteModal"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import Contact from "./pages/Contact"
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Home from './pages/Home'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Router>
      <div className="">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <StickyCTA onOpen={() => setIsModalOpen(true)} />

        <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  )
}

export default App