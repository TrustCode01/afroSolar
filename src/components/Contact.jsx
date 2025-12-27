import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaDirections } from 'react-icons/fa'

const Contact = () => {
  // Coordinates: Lagos, Nigeria office location
  const lat = 6.5244
  const lng = 3.3520
  const locationName = 'Afro Solar'
  const mapRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  // Initialize map on mount
  useEffect(() => {
    if (!mapRef.current) return

    // Check if Google Maps API is loaded
    if (!window.google || !window.google.maps) {
      mapRef.current.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f3f4f6; color: #666; font-size: 14px; text-align: center; padding: 20px;"><div><p style="margin: 0 0 10px 0;"><strong>Map unavailable</strong></p><p style="margin: 0;">Please add a valid Google Maps API key to index.html to enable the interactive map.</p></div></div>'
      return
    }

    // Create map centered on the office location
    const mapOptions = {
      zoom: 15,
      center: { lat, lng },
      mapTypeControl: true,
      fullscreenControl: true,
      streetViewControl: true,
    }

    const map = new window.google.maps.Map(mapRef.current, mapOptions)

    // Add a custom marker at the office location
    new window.google.maps.Marker({
      position: { lat, lng },
      map,
      title: locationName,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    })

    // Add info window with location name
    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div style="color: #000; font-weight: bold; padding: 8px;">${locationName}</div>`,
      position: { lat, lng },
    })
    infoWindow.open(map)
  }, [lat, lng, locationName])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name || !email || !message) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
      return
    }

    setStatus({ type: 'pending', msg: 'Sending your message…' })
    setTimeout(() => {
      setStatus({ type: 'success', msg: 'Message sent successfully! We will get back to you soon.' })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    }, 1200)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our solar solutions? Reach out and our team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-1 space-y-6">
            <article className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FaPhone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <a href="tel:+263781281412" className="mt-1 text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                    +263781281412
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400">
                  <FaEnvelope className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:info@afrosolar.example" className="mt-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded">
                    circuitcrafrelectricals@gmail.com
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400">
                  <FaMapMarkerAlt className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">86 phase 10 Eastview Park Harare Zimbabwe </p>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-2">
            <form onSubmit={handleSubmit} action="mailto:circuitcraftelectricals@gmail.com" className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name <span aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span aria-label="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+263 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project…"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaPaperPlane className="w-4 h-4" aria-hidden="true" />
                Send message
              </motion.button>

              <div aria-live="polite" className="mt-4">
                {status && (
                  <div className={`text-sm p-3 rounded-lg ${status.type === 'error' ? 'bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-200' : status.type === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200' : 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'}`}>
                    {status.msg}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Embedded Map Placeholder */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visit our office</h3>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={`Get directions to ${locationName}`}
            >
              <FaDirections className="w-4 h-4" aria-hidden="true" />
              Get directions
            </a>
          </div>
          <div ref={mapRef} className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800" />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
