import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Footer from '../components/Footer'
import ContactForm from '../components/Contact'

const Contact = () => {
  return (
    <div>
      <PageHeader
        headingStart="Let Us"
        headingEnd="Talk Now"
        tagLine="Let us help you harness the power of the sun."
        sentences={[
          "Do you have questions about our solar products or services?",
          "Reach out to our team for personalized solar solutions tailored to your needs.",
          "We're here to answer your questions and guide you on your journey to clean energy."
        ]}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default Contact