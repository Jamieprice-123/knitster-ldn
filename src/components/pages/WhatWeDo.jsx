import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const WhatWeDo = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/images/bespoke-knitwear.jpg" 
          alt="Knitwear Production" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white text-center px-4">WHAT WE DO</h1>
        </div>
      </section>

      {/* Our Services Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-center">
            <p className="mb-8">
              At Knitster LDN, we create luxury knitwear with an emphasis on quality, innovation, and sustainability. 
              Our London-based factory and atelier offers a comprehensive range of knitwear services to designers, 
              brands, and fashion houses worldwide.
            </p>
            <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-light mb-4 text-blue-600">DESIGN CONSULTATION</h3>
              <p className="text-gray-700 mb-6">
                Our team works closely with designers to translate their creative vision into technically viable knitwear. 
                We offer expertise in yarn selection, stitch development, and garment construction to bring concepts to life.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Trend forecasting and concept development</li>
                <li>• Technical advice and feasibility assessment</li>
                <li>• Material and yarn recommendations</li>
                <li>• Cost considerations and production planning</li>
              </ul>
            </div>

            <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-light mb-4 text-blue-600">SAMPLING & PROTOTYPING</h3>
              <p className="text-gray-700 mb-6">
                We develop swatches and prototypes that showcase our technical capabilities and allow designers to 
                refine their designs before production.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Stitch and texture development</li>
                <li>• Color work and pattern creation</li>
                <li>• Size grading and fit assessment</li>
                <li>• Prototype refinement</li>
              </ul>
            </div>

            <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-light mb-4 text-blue-600">PRODUCTION</h3>
              <p className="text-gray-700 mb-6">
                Our skilled team produces high-quality knitwear at various scales, from small runs for independent 
                designers to larger production for established brands.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Fully-fashioned garment production</li>
                <li>• Mid to heavy gauge specialization</li>
                <li>• Consistent quality control</li>
                <li>• Ethical manufacturing practices</li>
              </ul>
            </div>

            <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-light mb-4 text-blue-600">FINISHING & DETAILING</h3>
              <p className="text-gray-700 mb-6">
                Our attention to detail extends to every aspect of the finishing process, ensuring each 
                piece meets our exacting standards.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Hand-finishing techniques</li>
                <li>• Embellishment application</li>
                <li>• Blocking and pressing</li>
                <li>• Quality assurance and inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12">SUSTAINABLE APPROACH</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <img 
                src="/images/sustainable-production.jpg" 
                alt="Sustainable Production" 
                className="w-full h-auto shadow-lg"
              />
            </div>
            
            <div className="text-lg font-light leading-relaxed">
              <p className="mb-6">
                Sustainability is at the core of our practice. From fibre through to finished product, 
                we endeavour to consistently make choices that positively impact our people and our planet.
              </p>
              
              <p className="mb-6">
                We prioritize locally sourced noble fibres and natural materials, reducing our carbon 
                footprint while supporting British suppliers.
              </p>
              
              <p className="mb-6">
                Our production processes are designed to minimize waste and energy consumption. Any waste 
                yarn is repurposed or recycled whenever possible.
              </p>
              
              <p>
                We believe in transparency and traceability, ensuring that our clients and customers 
                know exactly where and how their knitwear is made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to start your knitwear project?</h2>
          <p className="text-xl font-light max-w-2xl mx-auto mb-10">
            Contact us to discuss your requirements and see how we can bring your knitwear vision to life.
          </p>
          <a 
            href="mailto:knit@knitster-ldn.com" 
            className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;