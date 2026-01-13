import React from 'react'
import { motion } from 'motion/react'
import { FaPhone, FaWhatsapp, FaCommentDots } from 'react-icons/fa'

const StickyCTA = ({ onOpen }) => {
  return (
    <div className="fixed right-4 bottom-6 sm:bottom-10 z-50 flex flex-col items-end gap-3">
      <motion.a
        href="tel:+263781281412"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Call us"
      >
        <FaPhone className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">Call</span>
      </motion.a>

      <motion.a
        href="https://wa.me/+263713077914" //to use this number as the best option.
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.12 }}
        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>

      <motion.button
        onClick={onOpen}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.18 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Request a quote"
      >
        <FaCommentDots className="w-4 h-4" aria-hidden="true" />
        <span>Get Quote</span>
      </motion.button>
    </div>
  )
}

export default StickyCTA
