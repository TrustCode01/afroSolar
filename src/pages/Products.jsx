import PageHeader from '../components/PageHeader.jsx'
import Footer from '../components/Footer.jsx'

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="prose dark:prose-invert mx-auto">
          <h2>Our products</h2>
          <p>
            We partner with trusted manufacturers to bring you solar modules, inverters, and storage systems with competitive
            warranties and proven field performance.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="p-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold">Solar Panels</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">High-efficiency monocrystalline modules for durable performance.</p>
          </article>

          <article className="p-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold">Inverters</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Grid-tie and hybrid inverters with smart monitoring features.</p>
          </article>

          <article className="p-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold">Battery Storage</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Scalable battery systems for backup and peak-shaving strategies.</p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Products