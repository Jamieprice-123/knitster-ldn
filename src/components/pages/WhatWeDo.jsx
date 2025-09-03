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
            <div className="max-w-4xl mx-auto text-lg font-light leading-relaxed text-center">
              <p className="mb-8">
                Knitster LDN is a London-based knitwear manufacturer and design consultancy specializing in luxury
                product development with a focus on quality and innovation. Using both Shima and Stoll technology,
                we combine the best of both worlds — creating a wide range of silhouettes and structures with precision and efficiency.
              </p>
              <p className="mb-8">
                We manage every stage of the knitwear process, from initial concept and swatch development to
                prototyping and full production, with capacity to produce up to 20,000 pieces annually.
              </p>
              <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">FROM CONCEPT TO COMPLETION</h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">1</div>
                  <h3 className="text-xl font-light mb-3 text-blue-600">BRIEFING & PLANNING</h3>
                  <p className="text-gray-700 text-sm">
                    Initial consultation with directors Aysen Bayram & Emma McClelland for concept development and sample strategy.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">2</div>
                  <h3 className="text-xl font-light mb-3 text-blue-600">DEVELOPMENT & PROGRAMMING</h3>
                  <p className="text-gray-700 text-sm">
                    Our programmer creates digital knit programs while our product development team sources materials and develops tech packs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">3</div>
                  <h3 className="text-xl font-light mb-3 text-blue-600">PRODUCTION</h3>
                  <p className="text-gray-700 text-sm">
                    Our skilled technicians, linkers, and craftspeople execute bulk production using approved samples and specifications.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">4</div>
                  <h3 className="text-xl font-light mb-3 text-blue-600">FINISHING & QC</h3>
                  <p className="text-gray-700 text-sm">
                    Final quality control checks, hand-finishing, and packing following our strict quality manual standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-pink-50 p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">DESIGN CONSULTATION</h3>
                <p className="text-gray-700 mb-6">
                  Our experienced team works closely with designers to translate creative vision into technically viable knitwear.
                  We offer expertise in yarn selection, stitch development, and garment construction.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Concept development and feasibility assessment</li>
                  <li>• Technical advice and material recommendations</li>
                  <li>• Cost analysis and production planning</li>
                  <li>• Trend forecasting and market insights</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">SAMPLING & PROTOTYPING</h3>
                <p className="text-gray-700 mb-6">
                  We develop comprehensive swatches and prototypes that showcase our technical capabilities
                  and allow designers to refine their designs before production.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Stitch and texture development</li>
                  <li>• Color work and pattern creation</li>
                  <li>• Size grading and fit assessment</li>
                  <li>• Multiple prototype iterations</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">LUXURY MANUFACTURING</h3>
                <p className="text-gray-700 mb-6">
                  Our London facility produces high-quality knitwear at various scales, from small runs for emerging
                  designers to larger production for luxury fashion houses.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Mid to heavy gauge specialization</li>
                  <li>• Fully-fashioned garment production</li>
                  <li>• Up to 20,000 pieces annual capacity</li>
                  <li>• Consistent quality control standards</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">GLOBAL PRODUCTION</h3>
                <p className="text-gray-700 mb-6">
                  In addition to our London capabilities, we offer scalable solutions through trusted
                  partnerships with established factories in Turkey, Romania, and Bulgaria.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Overseas production partnerships</li>
                  <li>• Scalable manufacturing solutions</li>
                  <li>• Maintained quality standards globally</li>
                  <li>• Comprehensive project management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Equipment */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">ADVANCED TECHNOLOGY</h2>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-light mb-6 text-blue-600">Precision Knitting Technology</h3>
                <p className="text-lg font-light leading-relaxed mb-6">
                  Using both Shima and Stoll technology, we combine the best of both worlds — creating a wide range of
                  silhouettes and structures with precision and efficiency.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-blue-600">Shima Seiki Machines</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• SES122 - 12gg</li>
                      <li>• SIG123 - 7gg/5gg Multi</li>
                      <li>• NSSR122 - 7gg/5gg</li>
                      <li>• SES122 - 3gg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-blue-600">Stoll Technology</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• CMS530HP - 5gg</li>
                      <li>• M1plus Operating System</li>
                      <li>• Advanced programming</li>
                      <li>• Precision linking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <img
                    src="/images/sustainable-production.jpg"
                    alt="Advanced Knitting Technology"
                    className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Focus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-12">SUSTAINABLE MANUFACTURING</h2>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <img
                    src="/images/sustainable-production.jpg"
                    alt="Sustainable Production"
                    className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>

              <div className="text-lg font-light leading-relaxed">
                <p className="mb-6">
                  As wool specialists, we work closely with UK spinners and champion British wool,
                  celebrating local skills and natural fibres in every garment.
                </p>

                <p className="mb-6">
                  Our mission is to support and grow British manufacturing, proudly contributing to the domestic
                  supply chain and ensuring full responsibility for the provenance of our pieces.
                </p>

                <p className="mb-6">
                  By blending craftsmanship with efficiency, we offer shorter lead times, reduced shipping
                  impact and complete local traceability.
                </p>

                <p>
                  Every garment is made responsibly, transparently and with care, ensuring that sustainability
                  is woven into every aspect of our production process.
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
              Contact us to discuss your requirements and discover how we can bring your knitwear vision to life
              with precision, quality, and sustainability.
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