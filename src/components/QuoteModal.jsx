import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[tabindex]:not([-1])', '[contenteditable]']

const QuoteModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement
      // wait a tick for dialog to be in DOM
      setTimeout(() => {
        const focusable = dialogRef.current?.querySelectorAll(focusableSelectors)
        if (focusable && focusable.length) focusable[0].focus()
      }, 0)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      // restore focus
      previouslyFocused.current?.focus?.()
    }

    const onKey = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // simple focus trap
        const focusable = dialogRef.current?.querySelectorAll(focusableSelectors)
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) setStatus(null)
  }, [isOpen])

  const onOverlayMouseDown = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name || !email) {
      setStatus({ type: 'error', message: 'Please provide your name and email.' })
      return
    }

    // Simulate submit
    setStatus({ type: 'pending', message: 'Sending…' })
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Thanks — we received your request. We will contact you shortly.' })
      // auto-close after a short delay
      setTimeout(() => {
        onClose()
      }, 1600)
    }, 900)
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onMouseDown={onOverlayMouseDown}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-hidden={!isOpen}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        aria-describedby="quote-modal-desc"
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-xl w-full p-6 sm:p-8 ring-1 ring-black/5"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="quote-modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">
              Request a Quote
            </h2>
            <p id="quote-modal-desc" className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Tell us a bit about your project and we'll get back with an estimate.
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <label className="sr-only" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" placeholder="Phone (optional)" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" rows="4" placeholder="Project details (optional)" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <div className="flex items-center justify-between gap-4 mt-2">
            <button type="submit" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send request
            </button>

            <button type="button" onClick={onClose} className="text-sm text-gray-600 dark:text-gray-300 hover:underline focus:outline-none">
              Cancel
            </button>
          </div>

          <div aria-live="polite" className="mt-2">
            {status && (
              <div className={`text-sm ${status.type === 'error' ? 'text-red-600' : status.type === 'success' ? 'text-green-600' : 'text-gray-700'}`}>
                {status.message}
              </div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default QuoteModal
