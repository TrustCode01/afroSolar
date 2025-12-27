import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Typed from 'typed.js'
import images from '../assets/index.js'
import ResponsiveImage from './ResponsiveImage'

const AboutHeader = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Leading solar energy solutions in Africa',
        'Empowering communities with clean energy',
        'Innovative solar technology for sustainable development',
        'Your trusted partner in renewable energy'
      ],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <header
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-labelledby="about-heading"
    >
      {/* Responsive Background Image */}
      <ResponsiveImage
        
        sources={{
          xl: images.BannerXL, // Will be about-banner-xl.jpg when created
          lg: images.BannerLarge, // Will be about-banner-large.jpg when created
          md: images.BannerMedium, // Will be about-banner-medium.jpg when created
          sm: images.BannerSmall, // Will be about-banner-small.jpg when created
        }}
        src={images.BannerLarge}
        alt="About Afro Solar background - Pioneering sustainable energy solutions"
        className="absolute inset-0"
        imgClassName="w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <motion.h1
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow-2xs leading-tight"
          >
            About{' '}
            <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text  text-transparent">
              Afro Solar
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-200 text-shadow-2xs font-bold max-w-2xl mx-auto leading-relaxed"
          >
            Pioneering sustainable energy solutions across Africa
          </motion.p>

          {/* Typed Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <div
              ref={typedRef}
              className="text-lg sm:text-xl text-yellow-300 font-medium min-h-12 flex items-center justify-center"
              aria-live="polite"
              aria-atomic="true"
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#our-story"
              className="inline-flex items-center px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Learn more about our story"
            >
              Our Story
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Contact us to learn more"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </header>
  )
}

export default AboutHeader