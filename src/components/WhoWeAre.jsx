import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { FaRegUser, FaCalendarAlt, FaSolarPanel } from 'react-icons/fa'
import Banner2 from '../assets/about-banner.jpg'

const AnimatedNumber = ({ value, duration = 800 }) => {
  const [num, setNum] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    let start = null
    const startVal = 0
    const diff = value - startVal
    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      setNum(Math.floor(startVal + diff * progress))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [value, duration])

  return (
    <span aria-hidden="true" className="font-extrabold">
      {num}
    </span>
  )
}

const WhoWeAre = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="who-we-are" aria-labelledby="who-we-are-title" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 id="who-we-are-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Who we are
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-prose">
              Afro Solar is a team of engineers, installers and sustainability experts dedicated to making clean energy accessible. We combine local knowledge with global best practices to deliver systems that last.AfroSolar Energy Solutions Pvt Ltd is a leading provider of innovative solar energy solutions, 
              electrical contracting, and electronics services in Africa. Our mission is to empower 
              individuals, businesses, and communities to harness the power of solar energy, reduce 
              their reliance on fossil fuels, and promote a sustainable future. With expertise in 
              commercial electrical work, electronics services, and electrical work, we offer 
              comprehensive solutions to meet our customers' energy needs. 
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-blue-50 text-blue-700">
                  <FaRegUser className="w-4 h-4" aria-hidden="true" />
                </span>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Team members</div>
                <div className="text-2xl mt-1 text-gray-900 dark:text-white">
                  <span className="sr-only">Team members</span>
                  <span aria-hidden="true">15+</span>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-yellow-50 text-yellow-700">
                  <FaCalendarAlt className="w-4 h-4" aria-hidden="true" />
                </span>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Years experience</div>
                <div className="text-2xl mt-1 text-gray-900 dark:text-white">
                  <AnimatedNumber value={8} />+
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-amber-50 text-amber-700">
                  <FaSolarPanel className="w-4 h-4" aria-hidden="true" />
                </span>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">kW installed</div>
                <div className="text-2xl mt-1 text-gray-900 dark:text-white">
                  <AnimatedNumber value={240} />+
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Work with us
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <img src={Banner2} alt="Team installing solar panels" className="w-full max-w-md rounded-2xl shadow-xl object-cover" loading="lazy" />
          </motion.figure>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
