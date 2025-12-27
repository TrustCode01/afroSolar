import { useState } from 'react'
import { motion } from 'motion/react'
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import images from '../assets/index.js'

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: 'about' },
    { label: 'Products', href: 'products' },
    { label: 'Services', href: 'services' },
    { label: 'Contact', href: 'contact' },
  ]

  const contactLinks = [
    {
      icon: FaPhone,
      label: 'Call us',
      href: 'tel:+263781281412',
      ariaLabel: 'Call us at +263781281412',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/+263713077914',
      ariaLabel: 'Contact us on WhatsApp',
    },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <a
              href="/"
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded px-2 py-1"
              aria-label="Afro Solar - Home"
            >
              <div className="w-15 h-15 rounded-lg flex items-center justify-center shadow-md">
                
                <img className='rounded-full' src={images.Logo} alt="Afro Solar" />
              </div>
              <span className="text-xl font-bold text-gray-900 p-2 dark:text-white hidden sm:block">
                Afro Solar
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link, index) => (
              <motion.div key={link.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}>
                <Link to={link.to || link.href} className="px-4 py-2 text-gray-700 dark:text-gray-200 font-medium rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section: Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-3"
          >
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={contact.ariaLabel}
                  className="p-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" aria-hidden="true" />
            ) : (
              <FaBars className="w-6 h-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '50vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden pb-4 text-lg"
            role="region"
            aria-label="Mobile navigation menu"
          >
              {/* Mobile Links */}
              <div className="flex flex-col gap-6 mb-4">
                {navLinks.map((link, index) => (
                  <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <Link to={link.to || link.href} onClick={closeMenu} className="px-4 py-3 text-gray-700 dark:text-gray-200 font-medium rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Links */}
              <div className="flex gap-2 px-4">
                {contactLinks.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (navLinks.length + index) * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={contact.ariaLabel}
                      className="flex-1 p-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset flex items-center justify-center gap-2"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span className="text-sm font-medium">{contact.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar