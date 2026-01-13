import PageHeader from '../components/PageHeader.jsx'
import Footer from '../components/Footer.jsx'
import Panels from '../assets/panels.jpg'
import Battery from '../assets/battery.jpg'
import Hybrid from '../assets/inverter.jpg'
import Grid from '../assets/Grid.jpg'

  const products = [
    {
      id: 1,
      title: "Quality Solar Panels",
      description: "Custom solar system planning and professional installation tailored to your energy needs and budget.",
      image: Panels,
      link: "#design-installation"
    },
    {
      id: 2,
      title: "Li Ion Batteries",
      description: "Fast diagnostics, preventative maintenance, and comprehensive warranty support for your solar system.",
      image: Battery,
      link: "#maintenance-repair"
    },
    {
      id: 3,
      title: "Hybrid Inverters",
      description: "Comprehensive energy assessments to identify savings opportunities and optimize your system performance.",
      image: Hybrid,
      link: "#energy-audits"
    },
    {
      id: 4,
      title: "Solar Power Grid",
      description: "Complete off-grid system design and installation for homes and businesses seeking energy independence.",
      image: Grid,
      link: "#off-grid-solutions"
    },
    {
      id: 5,
      title: "Charge Controllers",
      description: "Advanced battery storage solutions to maximize your solar energy usage and provide backup power.",
      image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=600&h=400&fit=crop",
      link: "#battery-storage"
    },
    {
      id: 6,
      title: "System Monitoring Devices",
      description: "Real-time monitoring and analytics to track your solar performance and energy consumption patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#system-monitoring"
    }
  ];

const Products = () => {
  return (
    <div>
      <PageHeader
        headingStart="Our"
        headingEnd="Products"
        tagLine="High-quality panels, inverters, and battery storage solutions selected for performance and reliability."
        sentences={[
          "We have a wide range of genuine solar products in store.",
          "These products range from solar panels to Li-ion batteries.",
          "We can help design and scaffold a system tailored to your needs."
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section aria-labelledby="services-intro" className="mb-12">
          <h2 id="services-intro" className="text-3xl font-bold text-center mb-4">Our Service Offerings</h2>
          <p className="text-center text-black dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive solar solutions designed to meet your unique energy needs. From initial consultation to ongoing maintenance, our expert team is committed to your success.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article 
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-1/2 p-2  overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {product.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 grow">
                  {product.description}
                </p>

                {/* View More Link */}
                <a 
                  href={product.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default Products