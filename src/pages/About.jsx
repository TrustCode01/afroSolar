import React from 'react'
import AboutHeader from '../components/AboutHeader'
import WhoWeAre from '../components/WhoWeAre'
import OurVision from '../components/OurVision'

import Stats from '../components/Stats'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <AboutHeader />

      <WhoWeAre />
      <OurVision />
      
      <Stats />

      <Footer />
    </div>
  )
}

export default About