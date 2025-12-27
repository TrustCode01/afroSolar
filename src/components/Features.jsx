import { motion } from 'motion/react'
import { FaBolt, FaTools, FaLeaf, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    id: 'design-install',
    icon: FaBolt,
    title: 'Design & Installation',
    desc: 'Custom system design, professional install, and commissioning for homes and businesses.',
  },
  {
    id: 'maintenance',
    icon: FaTools,
    title: 'Maintenance & Repair',
    desc: 'Preventative maintenance, panel cleaning, inverter checks and rapid repairs.',
  },
  {
    id: 'efficiency',
    icon: FaLeaf,
    title: 'Energy Efficiency',
    desc: 'Audits and retrofit recommendations to reduce consumption and increase savings.',
  },
  {
    id: 'warranty',
    icon: FaShieldAlt,
    title: 'Warranty & Support',
    desc: 'Reliable aftercare, performance monitoring and warranty management.',
  },
]

const FeatureCard = ({ feature, i }) => {
  const Icon = feature.icon
  return (
    <motion.article
      role="article"
      aria-labelledby={`feature-${feature.id}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      whileHover={{ translateY: -6, scale: 1.02 }}
      className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow focus-within:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-yellow-400 to-orange-500 text-white shadow-md shrink-0">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h3 id={`feature-${feature.id}`} className="text-lg font-semibold text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {feature.desc}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`Learn more about ${feature.title}`}
        >
          Learn more
        </a>
      </div>
    </motion.article>
  )
}

const Features = () => {
  return (
    <section aria-labelledby="features-title" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="features-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            What we do
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solar services from initial assessment to long-term support — built to deliver reliable energy and meaningful savings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
