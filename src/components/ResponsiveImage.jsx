

/**
 * ResponsiveImage Component
 *
 * Serves different image sizes based on viewport width for optimal performance.
 * Uses the HTML <picture> element with <source> elements for responsive images.
 *
 * @param {Object} props
 * @param {string} props.src - Fallback image source
 * @param {Object} props.sources - Object with breakpoint keys and image sources
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS classes for styling
 * @param {string} props.loading - Loading strategy ('lazy' | 'eager')
 * @param {string} props.decoding - Decoding strategy ('async' | 'sync' | 'auto')
 * @param {string} props.fetchPriority - Fetch priority ('high' | 'low' | 'auto')
 */
const ResponsiveImage = ({
  src,
  sources = {},
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  ...props
}) => {
  // Default breakpoints for responsive images
  const defaultBreakpoints = {
    xl: '(min-width: 1920px)',    // Extra large screens
    lg: '(min-width: 1024px)',    // Large screens (desktop)
    md: '(min-width: 768px)',     // Medium screens (tablet)
    sm: '(min-width: 640px)',     // Small screens (large mobile)
    xs: '(max-width: 639px)',     // Extra small screens (mobile)
  }

  return (
    <picture className={className} {...props}>
      {/* Generate source elements for each provided source */}
      {Object.entries(sources)
        .filter(([key]) => sources[key] && defaultBreakpoints[key]) // Only include sources that exist and have media queries
        .sort(([a], [b]) => {
          // Sort by breakpoint size (largest first for proper fallback)
          const order = { xl: 5, lg: 4, md: 3, sm: 2, xs: 1 }
          return (order[b] || 0) - (order[a] || 0)
        })
        .map(([key]) => (
          <source
            key={key}
            media={defaultBreakpoints[key]}
            srcSet={sources[key]}
            type="image/jpeg"
          />
        ))}

      {/* Fallback img element */}
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  )
}

export default ResponsiveImage