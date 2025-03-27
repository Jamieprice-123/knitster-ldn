import React from 'react';
import Layout from './Layout';
import YarnCalculator from './YarnCalculator';

const YarnTools = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img
              src="/images/bespoke-knitwear.jpg"
              alt="Yarn Tools"
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-6xl font-light text-white text-center px-4">YARN TOOLS</h1>
          </div>
        </section>

        {/* Tools Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-8">HELPFUL RESOURCES</h2>
              <p className="text-lg font-light leading-relaxed mb-8">
                We've created these tools to help you plan your knitwear projects. Whether you're calculating
                yarn requirements or converting between different measurements, we've got you covered.
              </p>
              <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
            </div>
          </div>
        </section>

        {/* Yarn Calculator Section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-12">YARN CALCULATOR</h2>
            <p className="text-lg font-light leading-relaxed text-center max-w-3xl mx-auto mb-12">
              Use our yarn calculator to estimate how much yarn you'll need for your next project.
              Simply select your garment type, size, pattern complexity, and preferred yarn weight to get started.
            </p>

            <YarnCalculator />
          </div>
        </section>

        {/* Knitting Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-12">KNITTING RESOURCES</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-pink-50 p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-2 duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">GAUGE CONVERSION</h3>
                <p className="text-gray-700 mb-4">
                  Understanding gauge is crucial for achieving the correct size in your knitting projects.
                  Our guide helps you convert between different measurements and yarn weights.
                </p>
                <a href="#" className="text-pink-500 hover:underline">Coming Soon →</a>
              </div>

              <div className="bg-pink-50 p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-2 duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">STITCH GLOSSARY</h3>
                <p className="text-gray-700 mb-4">
                  Explore our comprehensive stitch glossary with clear instructions and helpful diagrams for
                  both basic and advanced knitting techniques.
                </p>
                <a href="#" className="text-pink-500 hover:underline">Coming Soon →</a>
              </div>

              <div className="bg-pink-50 p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-2 duration-300">
                <h3 className="text-2xl font-light mb-4 text-blue-600">YARN SUBSTITUTION</h3>
                <p className="text-gray-700 mb-4">
                  Not sure how to substitute one yarn for another? Our guide will help you understand
                  fiber properties and make smart substitutions in your projects.
                </p>
                <a href="#" className="text-pink-500 hover:underline">Coming Soon →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Knitwear Care Instructions */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-12">KNITWEAR CARE GUIDE</h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-light mb-6">Washing Instructions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Hand wash using lukewarm water and mild detergent specifically formulated for wool or delicates.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Gently squeeze without rubbing or twisting to prevent felting and stretching.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Rinse thoroughly in water of the same temperature to prevent shock to the fibers.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Press excess water out gently - never wring or twist your knitwear.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6">Drying & Storage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Lay flat to dry on a clean towel away from direct sunlight or heat sources.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Reshape while damp to maintain the original dimensions.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Store folded in a cool, dry place. Never hang knitwear as this can stretch the fibers.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-300 font-bold">•</span>
                    <p>Consider using acid-free tissue paper between folds for long-term storage.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                  href="#"
                  className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
              >
                DOWNLOAD COMPLETE CARE GUIDE
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Sign-up */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-pink-50 p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-6">Join Our Knitters Community</h2>
              <p className="text-lg font-light mb-8">
                Subscribe to our newsletter for knitting tips, pattern inspirations, and first access to new tools and resources.
              </p>

              <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow p-3 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    required
                />
                <button
                    type="submit"
                    className="bg-pink-500 text-white py-3 px-6 rounded hover:bg-pink-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default YarnTools;