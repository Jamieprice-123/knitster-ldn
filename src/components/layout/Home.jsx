import React, { useRef } from 'react';

const Home = ({ currentSlide, portfolioItems }) => {
  // Refs for scroll animations
  const aboutTitleRef = useRef(null);
  const aboutTextRef = useRef(null);

  return (
      <>
        {/* Hero Section */}
        <section className="h-screen relative">
          <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-6">KNITSTER LDN</h1>
              <p className="text-2xl font-light">Luxury Knitwear Manufacturing</p>
              <p className="text-lg font-light mt-4">Established 2013 • London, UK</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 ref={aboutTitleRef} className="text-4xl font-light text-center mb-12">
              ABOUT US
            </h2>
            <div ref={aboutTextRef} className="max-w-4xl mx-auto text-lg font-light leading-relaxed">
              <p className="mb-6">
                Established in 2013, Knitster LDN is a London-based knitwear manufacturer and design consultancy
                specializing in luxury product development with a focus on quality and innovation. Using both Shima and
                Stoll technology, we combine the best of both worlds — creating a wide range of silhouettes and structures
                with precision and efficiency.
              </p>
              <p className="mb-6">
                We manage every stage of the knitwear process, from initial concept and swatch development to
                prototyping and full production. As wool specialists, we work closely with UK spinners and champion British
                wool, celebrating local skills and natural fibres in every garment.
              </p>
              <p className="mb-6">
                Our mission is to support and grow British manufacturing, proudly contributing to the domestic supply chain
                and ensuring full responsibility for the provenance of our pieces. By blending craftsmanship with efficiency,
                we offer shorter lead times, reduced shipping impact and complete local traceability.
              </p>
              <p>
                We specialize in mid to heavy gauge, fully fashioned knitwear, hand-finished with precision by our dynamic
                team of 14 Knitsters, with capacity to produce up to 20,000 pieces annually.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative h-96 group overflow-hidden">
                <img
                    src="/images/bespoke-knitwear.jpg"
                    alt="Service 1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-3xl font-light text-white">LUXURY MANUFACTURING</h3>
                </div>
              </div>
              <div className="relative h-96 group overflow-hidden">
                <img
                    src="/images/sustainable-production.jpg"
                    alt="Service 2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-3xl font-light text-white">SUSTAINABLE PRODUCTION</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Portfolio Section */}
        <section className="py-24 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">TRUSTED BY LEADING BRANDS</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto mb-16">
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Burberry</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Bottega Veneta</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Christian Dior</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">JW Anderson</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Molly Goddard</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Stefan Cooke</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Cole Buxton</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">S.S Daley</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Toast</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Beulah</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Hayley Menzies</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light text-blue-600">Isa Arfen</h3>
              </div>
            </div>

            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              From luxury fashion houses to emerging designers, we've built lasting partnerships
              with brands that value quality, craftsmanship, and sustainable manufacturing practices.
            </p>
          </div>
        </section>

        {/* Portfolio Carousel Section */}
        <section className="py-24 bg-white bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-12">OUR LATEST WORK</h2>
            <div className="relative overflow-hidden">
              <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{transform: `translateX(-${currentSlide * 20}%)`}}
              >
                {portfolioItems.map((item, index) => (
                    <div key={index} className="min-w-[20%] px-4">
                      <div className="relative group overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-light">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Knitstory Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">KNITSTORY</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Aysen */}
              <div className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative overflow-hidden mb-4 aspect-[2/3] max-h-[600px] w-2/3">
                    <img
                        src="/images/aysen-portrait.jpg"
                        alt="Aysen Bayram"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-light mb-2">Aysen Bayram</h3>
                  <p className="text-blue-600 mb-4">Co-Founder & Creative Director</p>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden max-w-2xl">
                    <p className="text-gray-600 leading-relaxed">
                      Born in London's East End to Turkish-Cypriot parents, Aysen draws both inspiration and energy from her native city.
                      After studying Fashion with textiles at Ravensbourne and working for Ally Capellino and Tommy Hilfiger,
                      she launched Knitster LDN in 2013 as a bespoke knitwear sampling facility. Her true appreciation of
                      craftsmanship coupled with an instinctive eye for colour characterises Aysen's work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emma */}
              <div className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative overflow-hidden mb-4 aspect-[2/3] max-h-[600px] w-2/3">
                    <img
                        src="/images/emma-portrait.jpg"
                        alt="Emma McClelland"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-light mb-2">Emma McClelland</h3>
                  <p className="text-blue-600 mb-4">Co-Founder & Design Director</p>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden max-w-2xl">
                    <p className="text-gray-600 leading-relaxed">
                      Dublin-born Emma's interest in textiles began watching her mother craft traditional Aran sweaters.
                      After studying fashion design in Dublin and Milan, she moved to London for internships at Roland Mouret
                      and Eley Kishimoto, then worked for 8 years as an in-house knitwear designer at Marks & Spencer.
                      She joined forces with Aysen to relaunch Knitster LDN as the premier knitwear consultancy it is today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Home;