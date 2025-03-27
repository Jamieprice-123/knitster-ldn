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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 ref={aboutTitleRef} className="text-4xl font-light text-center mb-12">
            ABOUT US
          </h2>
          <div ref={aboutTextRef} className="max-w-3xl mx-auto text-lg font-light leading-relaxed">
            <p>Knitster LDN is a London based factory and atelier specialising in the production of luxury knitwear with an emphasis on quality and innovation. All aspects of the knit development process are covered in-house to ensure consistency and quality are at the forefront of what we do.</p>
            <p className="mt-6">We use our experience, artistry and skill to translate clients' initial concepts into swatches, prototypes and beautifully crafted production runs. We pride ourselves on being part of the British supply chain and firmly believe the provenance of the pieces we create to be our responsibility.</p>
            <p className="mt-6">From fibre through to finished product we endeavour to consistently make choices that positivity impact our people and our planet. Our specialism is mid to heavy gauge, fully fashioned garments, knitted in locally sourced noble fibres and hand finished with care and precision by our dynamic Knitsters.</p>
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
                <h3 className="text-3xl font-light text-white">BESPOKE KNITWEAR</h3>
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

      {/* Portfolio Carousel Section */}
      <section className="py-24 bg-white bg-opacity-80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12">WE KNOW OUR KNITS</h2>
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
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden max-w-2xl">
                  <p className="text-gray-600 leading-relaxed">
                    Born in London's East End to Turkish-Cypriot parents, Aysen draws both inspiration and energy from her native city. Aysen studied Fashion with textiles at Ravensbourne and specialised in knitwear. She subsequently went on to work for London-based Ally Capellino and then relocated to Amsterdam to design the Men's knitwear for Tommy Hilfiger. In 2012 Aysen launched Knitster LDN as a bespoke knitwear sampling facility and later established UK-made cult knitwear label FANCLUB to rave reviews. FANCLUB'S 'premium kitsch' aesthetic was synonymous with tongue-in cheek humour and was an ode to Aysen's thought-provoking design and flair for pattern. A true appreciation of craftmanship coupled with an instinctive eye for colour characterises Aysen's work.
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
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden max-w-2xl">
                  <p className="text-gray-600 leading-relaxed">
                    Dublin-born Emma knows fashion, and thankfully she put her taste for a la mode to good use. It was watching her mother craft traditional Aran sweaters that piqued an early interest in the artistry of textiles and lead to a career in knitwear design. Emma studied fashion design at the National College of Art and Design in Dublin and at NABA in Milan. On graduation in 2004 she moved to London and after various internships at houses such as Roland Mouret and Eley Kishimoto she went on to work for Marks & Spencer for 8 years as an in-house knitwear designer. After a period travelling the world satisfying an innate thirst for adventurous sights Emma met fellow knitwear enthusiast Aysen and together they proudly relaunched Knitster LDN as a boutique swatch house and knitwear design consultancy, with a dedicated sampling facility. The rest as they say, is knitstory…
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