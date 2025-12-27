import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const usePrefersReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const AnimatedCounter = ({ value, suffix = '', duration = 1200, active }) => {
  const [display, setDisplay] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!active) return
    if (usePrefersReducedMotion()) {
      setDisplay(value)
      return
    }

    let start = null
    const startVal = 0
    const diff = value - startVal

    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.floor(startVal + diff * progress))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }

    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [value, duration, active])

  return (
    <span aria-hidden="true" className="font-extrabold text-3xl text-white sm:text-4xl">
      {display}
      {suffix}
    </span>
  )
}

const stats = [
  { id: 'projects', label: 'Projects completed', value: 480, suffix: '+' },
  { id: 'kw', label: 'kW installed', value: 1250, suffix: '+' },
  { id: 'co2', label: 'Tons CO₂ saved', value: 980, suffix: '+' },
  { id: 'customers', label: 'Happy customers', value: 420, suffix: '+' },
]

const Stats = () => {
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
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stats" aria-labelledby="stats-title" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="stats-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Our impact so far
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Every panel we install is more than just technology—it’s a promise of cleaner air, lower costs, and brighter futures. So far, we’ve delivered reliable solar energy to hundreds of homes and businesses, reducing thousands of kilograms of carbon emissions and cutting electricity bills by up to 60%. From rural schools now powered sustainably, to families enjoying uninterrupted energy, our work is lighting up communities and driving Zimbabwe closer to energy independence. With every project maintained and every system optimized, we’re proving that solar isn’t just an alternative—it’s the future. <br /> Real results from installations, maintenance and community impact.</p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: i * 0.08 }} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center">
                <AnimatedCounter value={s.value} suffix={s.suffix} active={visible} />
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="sr-only" aria-live="polite">
          {visible ? `Statistics updated: ${stats.map((s) => `${s.label} ${s.value}${s.suffix}`).join(', ')}` : 'Statistics not visible yet.'}
        </div>
      </div>
    </section>
  )
}

export default Stats
