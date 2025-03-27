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
          <div ref={missionRef} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-12">OUR MISSION</h2>
            <div className="text-xl font-light leading-relaxed">
              <p className="mb-6">
                Knitster LDN was founded with a clear mission: to produce exceptional quality knitwear with 
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

      {/* Our Story */}
      <section className="py-24 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">OUR STORY</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-300"></div>
              
              {/* Timeline items */}
              <div className="grid grid-cols-1 gap-16">
                {/* 2012 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                      2012
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                    <h3 className="text-2xl font-light mb-4 text-blue-600">THE BEGINNING</h3>
                    <p className="text-gray-700">
                      Aysen Bayram founded Knitster LDN as a bespoke knitwear sampling facility in East London. 
                      With a background in fashion and specialization in knitwear from Ravensbourne, Aysen 
                      brought technical expertise and creative vision to the venture.
                    </p>
                  </div>
                </div>
                
                {/* 2015 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                      2015
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                    <h3 className="text-2xl font-light mb-4 text-blue-600">EXPANDING HORIZONS</h3>
                    <p className="text-gray-700">
                      Aysen established UK-made cult knitwear label FANCLUB, showcasing her thought-provoking 
                      design and flair for pattern. FANCLUB's 'premium kitsch' aesthetic garnered rave reviews 
                      and established Knitster LDN's reputation for innovative knitwear design.
                    </p>
                  </div>
                </div>
                
                {/* 2018 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                      2018
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                    <h3 className="text-2xl font-light mb-4 text-blue-600">A NEW PARTNERSHIP</h3>
                    <p className="text-gray-700">
                      Emma McClelland joined Knitster LDN, bringing her expertise from years at Marks & Spencer 
                      as an in-house knitwear designer. Together, Aysen and Emma relaunched Knitster LDN as a 
                      boutique swatch house and knitwear design consultancy, with a dedicated sampling facility.
                    </p>
                  </div>
                </div>
                
                {/* 2020 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                      2020
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                    <h3 className="text-2xl font-light mb-4 text-blue-600">SUSTAINABILITY FOCUS</h3>
                    <p className="text-gray-700">
                      Knitster LDN strengthened its commitment to sustainable practices, implementing 
                      eco-friendly production methods and sourcing locally produced yarns. The studio 
                      began exploring innovative techniques to reduce waste and minimize environmental impact.
                    </p>
                  </div>
                </div>
                
                {/* Present */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-pink-500 text-white px-6 py-2 rounded-full z-10">
                      Today
                    </div>
                  </div>
                  <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                    <h3 className="text-2xl font-light mb-4 text-blue-600">LOOKING FORWARD</h3>
                    <p className="text-gray-700">
                      Knitster LDN continues to grow as a leading knitwear production studio, collaborating with 
                      renowned designers and emerging talents alike. The company remains committed to quality, 
                      craftsmanship, and sustainable practices, all while supporting the British fashion industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
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
              <h3 className="text-2xl font-light mb-4 text-blue-600">LOCAL PRODUCTION</h3>
              <p className="text-gray-700">
                We're proud to be part of the British supply chain, supporting local industry and reducing our 
                carbon footprint by keeping production close to home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#F9E6F0"/>
                  <path d="M44 24H20C18.9 24 18 24.9 18 26V38C18 39.1 18.9 40 20 40H44C45.1 40 46 39.1 46 38V26C46 24.9 45.1 24 44 24ZM44 38H20V26H44V38ZM32 37C34.7614 37 37 34.7614 37 32C37 29.2386 34.7614 27 32 27C29.2386 27 27 29.2386 27 32C27 34.7614 29.2386 37 32 37Z" fill="#FF69B4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-blue-600">QUALITY CRAFTSMANSHIP</h3>
              <p className="text-gray-700">
                We believe in creating garments that last, using premium materials and skilled craftsmanship 
                to produce knitwear of exceptional quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#F9E6F0"/>
                  <path d="M34 27.3V16H30V27.3C28.8 28 28 29.4 28 31C28 33.2 29.8 35 32 35C34.2 35 36 33.2 36 31C36 29.4 35.2 28 34 27.3ZM32 33C30.9 33 30 32.1 30 31C30 29.9 30.9 29 32 29C33.1 29 34 29.9 34 31C34 32.1 33.1 33 32 33ZM40 25H36V21H40V25ZM40 37H36V29H40V37ZM40 48H36V40H40V48ZM28 48H24V40H28V48ZM28 37H24V29H28V37ZM28 25H24V21H28V25Z" fill="#FF69B4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-blue-600">SUSTAINABILITY</h3>
              <p className="text-gray-700">
                From fiber selection to finished product, we make choices that positively impact our people and 
                our planet, prioritizing natural, recycled, and recyclable materials.
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
              <p className="text-blue-600 mb-4">Founder & Creative Director</p>
              <p className="text-gray-700 leading-relaxed">
                Born in London's East End to Turkish-Cypriot parents, Aysen draws both inspiration and 
                energy from her native city. Aysen studied Fashion with textiles at Ravensbourne and 
                specialised in knitwear. She subsequently went on to work for London-based Ally Capellino 
                and then relocated to Amsterdam to design the Men's knitwear for Tommy Hilfiger. In 2012 
                Aysen launched Knitster LDN as a bespoke knitwear sampling facility and later established 
                UK-made cult knitwear label FANCLUB to rave reviews. A true appreciation of craftmanship 
                coupled with an instinctive eye for colour characterises Aysen's work.
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
              <p className="text-blue-600 mb-4">Partner & Design Director</p>
              <p className="text-gray-700 leading-relaxed">
                Dublin-born Emma knows fashion, and thankfully she put her taste for a la mode to good use. 
                It was watching her mother craft traditional Aran sweaters that piqued an early interest 
                in the artistry of textiles and lead to a career in knitwear design. Emma studied fashion 
                design at the National College of Art and Design in Dublin and at NABA in Milan. On graduation 
                in 2004 she moved to London and after various internships at houses such as Roland Mouret 
                and Eley Kishimoto she went on to work for Marks & Spencer for 8 years as an in-house 
                knitwear designer. After a period travelling the world satisfying an innate thirst for 
                adventurous sights Emma met fellow knitwear enthusiast Aysen and together they proudly 
                relaunched Knitster LDN.
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

      {/* Studio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">OUR STUDIO</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <img 
                src="/images/sustainable-production.jpg" 
                alt="Knitster Studio" 
                className="w-full h-auto shadow-lg"
              />
            </div>
            
            <div className="text-lg font-light leading-relaxed">
              <p className="mb-6">
                Our East London studio is the heart of our operation, housed in a converted industrial 
                space that combines functionality with creative inspiration.
              </p>
              
              <p className="mb-6">
                The studio is equipped with state-of-the-art knitting machines, allowing us to create 
                everything from delicate fine gauge pieces to substantial heavy gauge garments.
              </p>
              
              <p className="mb-6">
                Our space is designed to facilitate every stage of the knitwear development process, 
                from initial concept and design through to sampling, production, and finishing.
              </p>
              
              <p>
                Visitors to our studio can expect to find a dynamic, creative environment where traditional 
                craft meets contemporary design, and where quality and attention to detail are paramount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Want to learn more about us?</h2>
          <p className="text-xl font-light max-w-2xl mx-auto mb-10">
            Schedule a visit to our studio or get in touch to discuss how we can collaborate.
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