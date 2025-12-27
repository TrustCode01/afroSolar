import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email.' })
      return
    }
    setStatus({ type: 'pending', msg: 'Subscribing…' })
    setTimeout(() => setStatus({ type: 'success', msg: 'Subscribed — check your inbox!' }), 900)
    setEmail('')
  }

  return (
    <footer aria-labelledby="site-footer-title" className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 id="site-footer-title" className="text-xl font-semibold text-white">Afro Solar</h3>
            <p className="mt-2 text-sm text-gray-300 max-w-sm">
              Delivering reliable, efficient solar solutions — from design to long-term support. Contact us to start your solar journey.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded" aria-label="Call Afro Solar">
                <FaPhone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">+263781281412</span>
              </a>
              <a href="mailto:info@afrosolar.example" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded" aria-label="Email Afro Solar">
                <FaEnvelope className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">circuitcraftelectricals@gmail.com</span>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded">
                <FaFacebookF className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded">
                <FaTwitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded">
                <FaInstagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded">
                <FaLinkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.nav aria-label="Footer navigation" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6 md:col-span-1">
            <div>
              <h4 className="text-sm font-semibold text-gray-200">Products</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#products" className="text-gray-300 hover:text-white">Residential</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white">Commercial</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white">Off-grid</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200">Company</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-sm font-semibold text-gray-200">Newsletter</h4>
            <p className="mt-2 text-sm text-gray-300">Get updates on projects, tips and special offers.</p>

            <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">Subscribe</button>
            </form>

            <div className="mt-2" aria-live="polite">
              {status && <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : status.type === 'success' ? 'text-green-400' : 'text-gray-300'}`}>{status.msg}</p>}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Afro Solar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
