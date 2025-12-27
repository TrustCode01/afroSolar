import React from 'react'
import { motion } from 'motion/react'
import { FaGlobe, FaLightbulb, FaLeaf } from 'react-icons/fa'

const goals = [
  { id: 1, icon: FaGlobe, title: 'Energy access', desc: 'Bring affordable clean energy to underserved communities.' },
  { id: 2, icon: FaLightbulb, title: 'Innovation', desc: 'Adopt intelligent storage and monitoring for smarter systems.' },
  { id: 3, icon: FaLeaf, title: 'Sustainability', desc: 'Reduce carbon footprint and promote long-term resilience.' },
]

const OurVision = () => {
  return (
    <section id="our-vision" aria-labelledby="our-vision-title" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="our-vision-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our vision
          </h2>
          <p className="mt-2 text-lg text-gray-600 text-justify dark:text-gray-300 max-w-2xl mx-auto">
            We believe energy should be empowering, not limiting. Our mission is to design and deliver solar solutions that bring freedom, resilience, and sustainability to every home and business we serve. By turning rooftops into power stations and sunlight into savings, we help communities cut costs, reduce carbon footprints, and embrace a cleaner future. With every installation and every system we maintain, we’re not just providing electricity—we’re building a brighter, greener tomorrow together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {goals.map((g, i) => {
            const Icon = g.icon
            return (
              <motion.article key={g.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-yellow-400 to-orange-500 text-white mx-auto">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{g.desc}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-emerald-500">
            Join our mission
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurVision
