import React, { useEffect, useState } from 'react';
import Layout from './Layout';

const SustainabilityTimeline = () => {
  // Animation states for timeline items
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Timeline data
  const timelineItems = [
    {
      year: "Sourcing",
      title: "ETHICALLY SOURCED MATERIALS",
      description: "We prioritize locally sourced noble fibers and natural materials, reducing our carbon footprint while supporting British suppliers.",
      icon: "🧶"
    },
    {
      year: "Process",
      title: "ZERO-WASTE PHILOSOPHY",
      description: "Our production processes are designed to minimize waste and energy consumption. Any waste yarn is repurposed or recycled whenever possible.",
      icon: "♻️"
    },
    {
      year: "People",
      title: "FAIR PRACTICES",
      description: "We ensure fair wages and safe working conditions for all our artisans and staff, maintaining high ethical standards throughout our supply chain.",
      icon: "👥"
    },
    {
      year: "Transparency",
      title: "FULL TRANSPARENCY",
      description: "We believe in transparency and traceability, ensuring that our clients and customers know exactly where and how their knitwear is made.",
      icon: "🔍"
    },
    {
      year: "Future",
      title: "CONSTANT INNOVATION",
      description: "We're continuously researching and implementing new sustainable practices and technologies to reduce our environmental impact further.",
      icon: "🌱"
    }
  ];

  // Auto-advance timeline
  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % timelineItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [timelineItems.length]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
              src="/images/sustainable-production.jpg"
              alt="Sustainability"
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-6xl font-light text-white text-center px-4">OUR SUSTAINABLE APPROACH</h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-8">SUSTAINABILITY AT KNITSTER LDN</h2>
              <p className="text-lg font-light leading-relaxed mb-6">
                Sustainability is at the core of our practice. From fibre through to finished product,
                we endeavour to consistently make choices that positively impact our people and our planet.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Our commitment to sustainable practices extends throughout our entire production process,
                from sourcing materials to manufacturing techniques and packaging solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">OUR SUSTAINABILITY JOURNEY</h2>

            <div className="max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-300"></div>

                {/* Timeline Items */}
                {timelineItems.map((item, index) => (
                    <div
                        key={index}
                        className={`relative mb-16 transition-all duration-700 transform ${
                            isVisible
                                ? index === activeItem
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-50 scale-95'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                      <div className="flex items-center justify-center mb-8">
                        <div
                            className={`flex items-center justify-center w-16 h-16 rounded-full z-10 text-2xl transition-all duration-500 ${
                                index === activeItem
                                    ? 'bg-pink-500 text-white transform scale-110'
                                    : 'bg-white text-pink-500 border-2 border-pink-300'
                            }`}
                        >
                          {item.icon}
                        </div>
                      </div>
                      <div
                          className={`bg-white p-8 shadow-sm max-w-2xl mx-auto transition-all duration-500 ${
                              index === activeItem
                                  ? 'border-l-4 border-pink-500'
                                  : ''
                          }`}
                      >
                        <h3 className="text-xl font-medium mb-2 text-pink-600">{item.year}</h3>
                        <h4 className="text-2xl font-light mb-4 text-blue-600">{item.title}</h4>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Materials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">SUSTAINABLE MATERIALS WE USE</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-pink-50 p-8 text-center rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🐑</div>
                <h3 className="text-2xl font-light mb-4">ORGANIC WOOL</h3>
                <p className="text-gray-700">
                  Sourced from British farms with high animal welfare standards, our organic wool
                  is processed without harmful chemicals and dyed using natural methods.
                </p>
              </div>

              <div className="bg-pink-50 p-8 text-center rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-2xl font-light mb-4">ORGANIC COTTON</h3>
                <p className="text-gray-700">
                  Our organic cotton is grown without pesticides or synthetic fertilizers,
                  reducing environmental impact and providing safer working conditions for farmers.
                </p>
              </div>

              <div className="bg-pink-50 p-8 text-center rounded-lg shadow-sm">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-2xl font-light mb-4">RECYCLED FIBERS</h3>
                <p className="text-gray-700">
                  We incorporate recycled wool, cotton, and synthetic fibers into our collections,
                  giving new life to post-consumer and post-industrial textile waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-12">OUR SUSTAINABILITY CERTIFICATIONS</h2>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <h3 className="text-xl font-light mb-2">GOTS Certified</h3>
                <p className="text-sm">Global Organic Textile Standard</p>
              </div>

              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <h3 className="text-xl font-light mb-2">Oeko-Tex Standard 100</h3>
                <p className="text-sm">Tested for harmful substances</p>
              </div>

              <div className="p-6 bg-white bg-opacity-10 rounded-lg">
                <h3 className="text-xl font-light mb-2">GRS Certified</h3>
                <p className="text-sm">Global Recycled Standard</p>
              </div>
            </div>

            <p className="text-xl font-light max-w-2xl mx-auto">
              We're committed to continuous improvement in our sustainability journey.
              Read our full sustainability report to learn more about our initiatives and goals.
            </p>

            <a
                href="#"
                className="inline-block mt-8 px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
            >
              DOWNLOAD SUSTAINABILITY REPORT
            </a>
          </div>
        </section>
      </Layout>
  );
};

export default SustainabilityTimeline;