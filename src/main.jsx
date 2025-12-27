import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Dynamically load Google Maps JS API using Vite env var VITE_GOOGLE_MAPS_API_KEY
// Add your API key to a local .env file (see .env.example) as:
// VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
const loadGoogleMaps = () => {
  try {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if (!key) {
      console.warn('VITE_GOOGLE_MAPS_API_KEY is not set. Interactive maps will be unavailable.')
      return
    }

    if (typeof window === 'undefined') return
    if (window.google && window.google.maps) return

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`
    script.async = true
    script.defer = true
    script.onload = () => console.info('Google Maps API loaded')
    script.onerror = (err) => console.error('Failed to load Google Maps API', err)
    document.head.appendChild(script)
  } catch (err) {
    console.error('Error loading Google Maps API', err)
  }
}

loadGoogleMaps()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
