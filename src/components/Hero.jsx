import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Typed from 'typed.js'
import { FaSolarPanel } from 'react-icons/fa'
import Banner from "../assets/AfroSolar-hero.jpg"

const Hero = () => {
  const typedRef = useRef(null)
  const elRef = useRef(null)

  useEffect(() => {
    if (!elRef.current) return

    const options = {
      strings: [
        'Solar panel installation',
        'Maintenance and repair of solar systems',
        'Energy efficiency audits and consulting',
        'Off-grid and hybrid solar systems installation',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1600,
      loop: true,
      showCursor: true,
      cursorChar: '_',
      smartBackspace: true,
    }

    typedRef.current = new Typed(elRef.current, options)

    return () => {
      typedRef.current?.destroy()
    }
  }, [])

  return (
    <header
      id="home"
      aria-label="Hero section"
      className="relative bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <img
          src={Banner}
          alt="Background illustration of solar panels"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <p className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-400 to-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold mb-4 shadow-md">
              <FaSolarPanel className="w-4 h-4" aria-hidden="true" />
              Trusted solar experts
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Power your future with sustainable energy
            </h1>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              Cut your electricity bills, stay resilient during outages, and make every watt count for the planet. Our solar solutions are designed and installed to fit your home or business seamlessly. With us, you save money, gain independence, and proudly reduce your carbon footprint—turning sunlight into lasting value.
            </p>

             <div className="mt-8 text-md text-gray-600 dark:text-gray-400">
              <span className="font-medium">We offer:</span>{' '}
              <span className="font-semibold text-gray-900 dark:text-white" aria-live="polite" aria-atomic="true">
                <span ref={elRef} />
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Get a quote
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-md font-medium shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:border-b-2 focus:border-blue-500"
              >
                Our services
              </a>
            </div>

           
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <img
              src={Banner}
              alt="Solar panels on a modern rooftop under a clear sky"
              className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              loading="lazy"
            />
          </motion.figure>
        </div>
      </div>
    </header>
  )
}

export default Hero
