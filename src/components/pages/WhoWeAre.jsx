import React, { useEffect, useRef } from 'react';
import Layout from '../layout/Layout';

const WhoWeAre = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Refs for scroll animations
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
              src="/images/hero.jpg"
              alt="Who We Are"
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-6xl font-light text-white text-center px-4">WHO WE ARE</h1>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div ref={missionRef} className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-12">OUR MISSION</h2>
              <div className="text-xl font-light leading-relaxed">
                <p className="mb-6">
                  Established in 2013, Knitster LDN was founded with a clear mission: to produce exceptional quality knitwear with
                  a focus on craftsmanship, innovation, and sustainability.
                </p>
                <p className="mb-6">
                  We believe in creating beautiful, well-made garments that stand the test of time,
                  challenging the fast fashion mindset that has dominated the industry.
                </p>
                <p>
                  Our goal is to be at the forefront of knitwear manufacturing in the UK, supporting
                  the British fashion industry and maintaining the highest standards of ethical production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Story Timeline */}
        <section className="py-24 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">OUR JOURNEY</h2>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-300"></div>

                {/* Timeline items - Simplified to 3 key moments */}
                <div className="grid grid-cols-1 gap-16">
                  {/* 2013 */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                        2013
                      </div>
                    </div>
                    <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                      <h3 className="text-2xl font-light mb-4 text-blue-600">THE FOUNDATION</h3>
                      <p className="text-gray-700">
                        Aysen Bayram established Knitster LDN as a London-based knitwear manufacturer and design consultancy.
                        With a background in fashion and specialization in knitwear from Ravensbourne, Aysen
                        brought technical expertise and creative vision to build what would become a leading UK manufacturer.
                      </p>
                    </div>
                  </div>

                  {/* Partnership */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                        Partnership
                      </div>
                    </div>
                    <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                      <h3 className="text-2xl font-light mb-4 text-blue-600">JOINING FORCES</h3>
                      <p className="text-gray-700">
                        Emma McClelland joined Knitster LDN, bringing her expertise from years at Marks & Spencer
                        as an in-house knitwear designer. Together, Aysen and Emma transformed Knitster LDN into
                        a premier boutique manufacturer with a dedicated team of 14 skilled craftspeople.
                      </p>
                    </div>
                  </div>

                  {/* Today */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                        Today
                      </div>
                    </div>
                    <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                      <h3 className="text-2xl font-light mb-4 text-blue-600">INDUSTRY LEADERS</h3>
                      <p className="text-gray-700">
                        Knitster LDN has grown to become a trusted partner for luxury brands including Burberry,
                        Bottega Veneta, and Christian Dior. With capacity to produce 20,000 pieces annually
                        and additional overseas partnerships, we continue to champion British manufacturing
                        while serving clients globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Capabilities */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">OUR CAPABILITIES</h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-4xl font-light text-pink-500 mb-4">20,000</div>
                <h3 className="text-xl font-light mb-2 text-blue-600">Annual Capacity</h3>
                <p className="text-gray-700">
                  Knitwear pieces produced annually at our London facility, with additional overseas capacity available.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-light text-pink-500 mb-4">14</div>
                <h3 className="text-xl font-light mb-2 text-blue-600">Team Members</h3>
                <p className="text-gray-700">
                  Dedicated staff providing fair wages, ethical working conditions, and exceptional craftsmanship.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-light text-pink-500 mb-4">3</div>
                <h3 className="text-xl font-light mb-2 text-blue-600">Overseas Partners</h3>
                <p className="text-gray-700">
                  Trusted factory partnerships in Turkey, Romania, and Bulgaria for scalable production solutions.
                </p>
              </div>
            </div>

            {/* Machinery Overview */}
            <div className="bg-gray-50 p-12 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-light mb-8 text-center">STATE-OF-THE-ART MACHINERY</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4 text-blue-600">Flat Bed Knitting Machines</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Shima SES122 - 12gg</li>
                    <li>• Shima SIG123 - 7gg / 5gg Multi</li>
                    <li>• Shima NSSR122 - 7gg / 5gg Multi</li>
                    <li>• Shima SES122 - 3gg</li>
                    <li>• Stoll CMS530HP - 5gg</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4 text-blue-600">Linking & Finishing</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Complett Linking - 12gg, 7gg, 5gg</li>
                    <li>• Exacta - 3gg</li>
                    <li>• Industrial washing & finishing equipment</li>
                    <li>• Hand frame knitting machines</li>
                    <li>• Complete quality control systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 ref={valuesRef} className="text-4xl font-light text-center mb-16">OUR VALUES</h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#F9E6F0"/>
                    <path d="M32 16C25.4 16 20 21.4 20 28C20 38 32 48 32 48C32 48 44 38 44 28C44 21.4 38.6 16 32 16ZM32 32C29.8 32 28 30.2 28 28C28 25.8 29.8 24 32 24C34.2 24 36 25.8 36 28C36 30.2 34.2 32 32 32Z" fill="#FF69B4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-blue-600">BRITISH MANUFACTURING</h3>
                <p className="text-gray-700">
                  We're proud to be part of the British supply chain, supporting local industry and championing
                  UK wool while reducing our carbon footprint.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#F9E6F0"/>
                    <path d="M44 24H20C18.9 24 18 24.9 18 26V38C18 39.1 18.9 40 20 40H44C45.1 40 46 39.1 46 38V26C46 24.9 45.1 24 44 24ZM44 38H20V26H44V38ZM32 37C34.7614 37 37 34.7614 37 32C37 29.2386 34.7614 27 32 27C29.2386 27 27 29.2386 27 32C27 34.7614 29.2386 37 32 37Z" fill="#FF69B4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-blue-600">PRECISION & EFFICIENCY</h3>
                <p className="text-gray-700">
                  Using both Shima and Stoll technology, we combine precision manufacturing with exceptional
                  craftsmanship to deliver consistent, high-quality results.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#F9E6F0"/>
                    <path d="M34 27.3V16H30V27.3C28.8 28 28 29.4 28 31C28 33.2 29.8 35 32 35C34.2 35 36 33.2 36 31C36 29.4 35.2 28 34 27.3ZM32 33C30.9 33 30 32.1 30 31C30 29.9 30.9 29 32 29C33.1 29 34 29.9 34 31C34 32.1 33.1 33 32 33ZM40 25H36V21H40V25ZM40 37H36V29H40V37ZM40 48H36V40H40V48ZM28 48H24V40H28V48ZM28 37H24V29H28V37ZM28 25H24V21H28V25Z" fill="#FF69B4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-blue-600">SUSTAINABLE PRACTICES</h3>
                <p className="text-gray-700">
                  From fiber selection to finished product, we prioritize natural, recyclable materials and
                  ethical production methods that benefit people and planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 ref={teamRef} className="text-4xl font-light text-center mb-16">MEET THE TEAM</h2>

            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Aysen */}
              <div>
                <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                  <img
                      src="/images/aysen-portrait.jpg"
                      alt="Aysen Bayram"
                      className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2">Aysen Bayram</h3>
                <p className="text-blue-600 mb-4">Co-Founder & Creative Director</p>
                <p className="text-gray-700 leading-relaxed">
                  Born in London's East End to Turkish-Cypriot parents, Aysen draws both inspiration and
                  energy from her native city. After studying Fashion with textiles at Ravensbourne and
                  working for Ally Capellino and Tommy Hilfiger, she established Knitster LDN in 2013.
                  A true appreciation of craftsmanship coupled with an instinctive eye for colour characterises Aysen's work.
                </p>
                <a
                    href="mailto:aysen@knitster-ldn.com"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  aysen@knitster-ldn.com
                </a>
              </div>

              {/* Emma */}
              <div>
                <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                  <img
                      src="/images/emma-portrait.jpg"
                      alt="Emma McClelland"
                      className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2">Emma McClelland</h3>
                <p className="text-blue-600 mb-4">Co-Founder & Design Director</p>
                <p className="text-gray-700 leading-relaxed">
                  Dublin-born Emma's passion for textiles began watching her mother craft traditional Aran sweaters.
                  After studying fashion design in Dublin and Milan, she worked for 8 years as an in-house
                  knitwear designer at Marks & Spencer. Emma joined forces with Aysen to transform Knitster LDN
                  into the industry-leading manufacturer it is today.
                </p>
                <a
                    href="mailto:emma@knitster-ldn.com"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  emma@knitster-ldn.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-6">Want to learn more about us?</h2>
            <p className="text-xl font-light max-w-2xl mx-auto mb-10">
              Schedule a visit to our London studio or get in touch to discuss how we can collaborate.
            </p>
            <a
                href="mailto:knit@knitster-ldn.com"
                className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
            >
              CONTACT US
            </a>
          </div>
        </section>
      </Layout>
  );
};

export default WhoWeAre;