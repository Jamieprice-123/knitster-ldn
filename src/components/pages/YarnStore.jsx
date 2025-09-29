import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const YarnStore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/sustainable-production.jpg"
                    alt="Yarn Store"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">YARN STORE</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-light mb-12">PREMIUM YARNS & FIBERS</h2>
                        <div className="text-lg font-light leading-relaxed">
                            <p className="mb-6">
                                As wool specialists, we work closely with UK spinners and champion British wool,
                                celebrating local skills and natural fibers in every garment. Our yarn selection
                                reflects our commitment to quality, sustainability, and traceability.
                            </p>
                            <p className="mb-6">
                                We source and stock a carefully curated range of natural, sustainable, and innovative
                                yarns from trusted suppliers across the UK and Europe. Every yarn in our collection
                                is chosen for its quality, performance, and environmental credentials.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yarn Categories */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">OUR YARN COLLECTION</h2>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4 text-center">🐑</div>
                            <h3 className="text-2xl font-light mb-4 text-blue-600 text-center">BRITISH WOOL</h3>
                            <p className="text-gray-700 mb-4">
                                Our specialty and passion. We champion British wool from local farms, celebrating
                                native breeds and supporting UK agriculture.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Blue-faced Leicester</li>
                                <li>• Shetland</li>
                                <li>• Romney Marsh</li>
                                <li>• Welsh Mountain</li>
                                <li>• Wensleydale</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4 text-center">🌿</div>
                            <h3 className="text-2xl font-light mb-4 text-blue-600 text-center">ORGANIC & NATURAL</h3>
                            <p className="text-gray-700 mb-4">
                                Certified organic and naturally processed fibers that are gentle on the environment
                                and luxurious to wear.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Organic Merino Wool</li>
                                <li>• Organic Cotton</li>
                                <li>• Alpaca</li>
                                <li>• Cashmere</li>
                                <li>• Mohair</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4 text-center">♻️</div>
                            <h3 className="text-2xl font-light mb-4 text-blue-600 text-center">RECYCLED & SUSTAINABLE</h3>
                            <p className="text-gray-700 mb-4">
                                Innovative recycled yarns that give new life to post-consumer and post-industrial
                                textile waste without compromising quality.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Recycled Wool</li>
                                <li>• Recycled Cotton</li>
                                <li>• Recycled Cashmere</li>
                                <li>• Recycled Polyester</li>
                                <li>• Econyl (Recycled Nylon)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* UK Spinner Partnerships */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">UK SPINNER PARTNERSHIPS</h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg font-light leading-relaxed text-center mb-12">
                            We maintain close relationships with British spinning mills, ensuring complete traceability
                            and supporting the UK textile industry. These partnerships allow us to offer custom yarn
                            development and guarantee the provenance of every fiber.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-pink-50 p-8 rounded-lg">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Yorkshire Mills</h3>
                                <p className="text-gray-700 mb-4">
                                    Partnering with historic Yorkshire woolen mills for traditional British wool yarns,
                                    spun using time-honored techniques combined with modern quality standards.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Specialties:</strong> Worsted wools, British breed blends, heavy gauge yarns
                                </p>
                            </div>

                            <div className="bg-pink-50 p-8 rounded-lg">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Scottish Spinners</h3>
                                <p className="text-gray-700 mb-4">
                                    Working with Scottish spinning mills renowned for their expertise in fine gauge
                                    yarns and luxury fibers like cashmere and mohair blends.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Specialties:</strong> Fine gauge yarns, luxury blends, Shetland wool
                                </p>
                            </div>

                            <div className="bg-pink-50 p-8 rounded-lg">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Welsh Producers</h3>
                                <p className="text-gray-700 mb-4">
                                    Collaborating with Welsh wool producers for distinctive mountain breed yarns
                                    with unique characteristics and exceptional durability.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Specialties:</strong> Welsh Mountain wool, hardy breeds, textured yarns
                                </p>
                            </div>

                            <div className="bg-pink-50 p-8 rounded-lg">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Organic Specialists</h3>
                                <p className="text-gray-700 mb-4">
                                    Partnerships with certified organic spinners who process wool and cotton
                                    without harmful chemicals, maintaining the highest environmental standards.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Specialties:</strong> GOTS certified yarns, organic cotton, natural dyes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yarn Specifications */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">GAUGE RANGE</h2>

                    <div className="max-w-5xl mx-auto">
                        <p className="text-lg font-light leading-relaxed text-center mb-12">
                            We specialize in mid to heavy gauge knitwear, with yarn selections perfectly suited
                            to our machinery capabilities and expertise.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-pink-500 mb-2">3gg</div>
                                <h3 className="text-lg font-light text-blue-600 mb-2">Heavy Gauge</h3>
                                <p className="text-sm text-gray-600">
                                    Chunky knits, bold textures, statement pieces
                                </p>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-pink-500 mb-2">5gg</div>
                                <h3 className="text-lg font-light text-blue-600 mb-2">Mid-Heavy</h3>
                                <p className="text-sm text-gray-600">
                                    Structured knitwear, outerwear, classic pieces
                                </p>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-pink-500 mb-2">7gg</div>
                                <h3 className="text-lg font-light text-blue-600 mb-2">Medium Gauge</h3>
                                <p className="text-sm text-gray-600">
                                    Versatile knitwear, layering pieces, all-season
                                </p>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-pink-500 mb-2">12gg</div>
                                <h3 className="text-lg font-light text-blue-600 mb-2">Fine Gauge</h3>
                                <p className="text-sm text-gray-600">
                                    Refined knitwear, detailed stitches, elegant finish
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Certifications */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">YARN CERTIFICATIONS</h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg font-light leading-relaxed text-center mb-12">
                            We prioritize yarns with recognized sustainability and quality certifications,
                            ensuring transparency and ethical production throughout our supply chain.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🌱</span>
                                </div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">GOTS</h3>
                                <p className="text-sm text-gray-600">
                                    Global Organic Textile Standard for organic fibers
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">✓</span>
                                </div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">OEKO-TEX</h3>
                                <p className="text-sm text-gray-600">
                                    Standard 100 - tested for harmful substances
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">♻️</span>
                                </div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">GRS</h3>
                                <p className="text-sm text-gray-600">
                                    Global Recycled Standard for recycled content
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🐑</span>
                                </div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">RWS</h3>
                                <p className="text-sm text-gray-600">
                                    Responsible Wool Standard for animal welfare
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🌾</span>
                                </div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">OCS</h3>
                                <p className="text-sm text-gray-600">
                                    Organic Content Standard for organic materials
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🇬🇧</span>
                                </div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">British Wool</h3>
                                <p className="text-sm text-gray-600">
                                    Traceable UK-sourced wool from British farms
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Yarn Development */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">CUSTOM YARN DEVELOPMENT</h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg font-light leading-relaxed text-center mb-12">
                            Working directly with UK spinners, we can develop custom yarns tailored to your
                            specific requirements, from fiber blend to color matching and gauge optimization.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Custom Blends</h3>
                                <p className="text-gray-700 mb-4">
                                    Create unique fiber blends combining natural and sustainable materials
                                    to achieve specific performance characteristics and aesthetic qualities.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Color Matching</h3>
                                <p className="text-gray-700 mb-4">
                                    Precision color matching services using natural dyes or low-impact synthetic
                                    dyes to match your exact Pantone or physical sample requirements.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Gauge Optimization</h3>
                                <p className="text-gray-700 mb-4">
                                    Yarn specifications optimized for your target gauge, ensuring consistent
                                    tension, drape, and appearance across production runs.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Minimum Orders</h3>
                                <p className="text-gray-700 mb-4">
                                    Flexible minimum order quantities for custom yarn development, making
                                    bespoke yarns accessible for both small runs and large-scale production.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Interested in Our Yarn Collection?</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-10">
                        Contact us to discuss yarn options, request samples, or explore custom yarn
                        development for your next project.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
                    >
                        DISCUSS YARN OPTIONS
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default YarnStore;