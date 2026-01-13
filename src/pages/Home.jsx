import PageHeader from '../components/PageHeader'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import OurVision from '../components/OurVision'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FeaturesShow from '../components/FeaturesShow'

const Home = () => {
  return (
    <div>
      <PageHeader
        headingStart="welcome to"
        headingEnd="AfroSolar"
        tagLine="High-quality panels, inverters, and battery storage solutions selected for performance and reliability."
        sentences={[
          "We have a wide range of genuine solar products instore ",
          "These products range from solar panels to Li ion batteries",
          "We are always there to scafold a system that is tailor made for your needs"
        ]}
      />
      <Stats />
      <FeaturesShow/>
      <Hero />
      <Features />
      <WhoWeAre />
      <OurVision />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default Home