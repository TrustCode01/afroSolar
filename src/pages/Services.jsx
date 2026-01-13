import PageHeader from '../components/PageHeader.jsx'
import Footer from '../components/Footer'
import Design from '../assets/design.jpg'
import Maintanance from '../assets/maintanance.jpg'
import Audit from '../assets/audit.jpg'
import OffGrid from '../assets/offgrid.jpg'
import Batteries from '../assets/batteries.jpg'
import Testimonials from '../components/Testimonials.jsx'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Design & Installation",
      description: "Custom solar system planning and professional installation tailored to your energy needs and budget.",
      image: Design,
      link: "#design-installation"
    },
    {
      id: 2,
      title: "Maintenance & Repair",
      description: "Fast diagnostics, preventative maintenance, and comprehensive warranty support for your solar system.",
      image: Maintanance,
      link: "#maintenance-repair"
    },
    {
      id: 3,
      title: "Energy Audits",
      description: "Comprehensive energy assessments to identify savings opportunities and optimize your system performance.",
      image: Audit,
      link: "#energy-audits"
    },
    {
      id: 4,
      title: "Off-Grid Solutions",
      description: "Complete off-grid system design and installation for homes and businesses seeking energy independence.",
      image: OffGrid,
      link: "#off-grid-solutions"
    },
    {
      id: 5,
      title: "Battery Storage",
      description: "Advanced battery storage solutions to maximize your solar energy usage and provide backup power.",
      image: Batteries,
      link: "#battery-storage"
    },
    {
      id: 6,
      title: "System Monitoring",
      description: "Real-time monitoring and analytics to track your solar performance and energy consumption patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#system-monitoring"
    }
  ];

  return (
    <div>
      <PageHeader
        headingStart="Our"
        headingEnd="Services"
        tagLine="Professional solar solutions designed to maximize efficiency and sustainability for your home or business."
        sentences={[
          "Expert design and installation services tailored to your needs",
          "Comprehensive maintenance and support throughout your system's lifetime",
          "Advanced monitoring and optimization to ensure peak performance"
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section aria-labelledby="services-intro" className="mb-12">
          <h2 id="services-intro" className="text-3xl font-bold text-center mb-4">Our Service Offerings</h2>
          <p className="text-center text-black max-w-2xl mx-auto">
            We provide comprehensive solar solutions designed to meet your unique energy needs. From initial consultation to ongoing maintenance, our expert team is committed to your success.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article 
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-1/2 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 grow">
                  {service.description}
                </p>

                {/* View More Link */}
                <a 
                  href={service.link}
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
        
      </main>

      <Footer />
    </div>
  )
}

export default Services