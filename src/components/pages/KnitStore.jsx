import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const KnitStore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/Yarn-Shop.JPG"
                    alt="Knit Store"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 leading-[60pt] tracking-[-0.02em] text-white text-center px-4">
                        KNIT STORE
                    </h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-12 text-primary-dark-red">
                            PREMIUM YARNS & FIBERS
                        </h2>
                        <div className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em]">
                            <p className="mb-6">
                                As wool specialists, we work closely with UK spinners and champion British wool,
                                celebrating local skills and natural fibers in every garment. Our yarn selection
                                reflects our commitment to quality, sustainability, and traceability.
                            </p>
                            <p className="mb-6">
                                We source a carefully curated range of natural, sustainable, and innovative
                                yarns from trusted suppliers across the UK and Europe. Every yarn in our collection
                                is chosen for its quality, performance, and environmental credentials.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yarn Categories */}
            <section className="py-24 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        OUR YARN COLLECTION
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4 text-center">🐑</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red text-center">
                                BRITISH WOOL
                            </h3>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                Our specialty and passion. We champion British wool from local farms, celebrating
                                native breeds and supporting UK agriculture.
                            </p>
                            <ul className="font-poppins font-normal text-sub text-gray-600 space-y-2">
                                <li>• Blue-faced Leicester</li>
                                <li>• Shetland</li>
                                <li>• Romney Marsh</li>
                                <li>• Welsh Mountain</li>
                                <li>• Wensleydale</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4 text-center">🌿</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red text-center">
                                ORGANIC & NATURAL
                            </h3>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                Certified organic and naturally processed fibers that are gentle on the environment
                                and luxurious to wear.
                            </p>
                            <ul className="font-poppins font-normal text-sub text-gray-600 space-y-2">
                                <li>• Organic Merino Wool</li>
                                <li>• Organic Cotton</li>
                                <li>• Alpaca</li>
                                <li>• Cashmere</li>
                                <li>• Mohair</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4 text-center">♻️</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red text-center">
                                RECYCLED & SUSTAINABLE
                            </h3>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                Innovative recycled yarns that give new life to post-consumer and post-industrial
                                textile waste without compromising quality.
                            </p>
                            <ul className="font-poppins font-normal text-sub text-gray-600 space-y-2">
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
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        UK SPINNER PARTNERSHIPS
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-center mb-12">
                            We maintain close relationships with British spinning mills, ensuring complete traceability
                            and supporting the UK textile industry. These partnerships allow us to offer custom yarn
                            development and guarantee the provenance of every fiber.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-accent-powder-green p-8 rounded-lg">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">Yorkshire Mills</h3>
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                    Partnering with historic Yorkshire woolen mills for traditional British wool yarns,
                                    spun using time-honored techniques combined with modern quality standards.
                                </p>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    <strong>Specialties:</strong> Worsted wools, British breed blends, heavy gauge yarns
                                </p>
                            </div>

                            <div className="bg-accent-powder-green p-8 rounded-lg">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">Scottish Spinners</h3>
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                    Working with Scottish spinning mills renowned for their expertise in fine gauge
                                    yarns and luxury fibers like cashmere and mohair blends.
                                </p>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    <strong>Specialties:</strong> Fine gauge yarns, luxury blends, Shetland wool
                                </p>
                            </div>

                            <div className="bg-accent-powder-green p-8 rounded-lg">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">Welsh Producers</h3>
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                    Collaborating with Welsh wool producers for distinctive mountain breed yarns
                                    with unique characteristics and exceptional durability.
                                </p>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    <strong>Specialties:</strong> Welsh Mountain wool, hardy breeds, textured yarns
                                </p>
                            </div>

                            <div className="bg-accent-powder-green p-8 rounded-lg">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">Organic Specialists</h3>
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700 mb-4">
                                    Partnerships with certified organic spinners who process wool and cotton
                                    without harmful chemicals, maintaining the highest environmental standards.
                                </p>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    <strong>Specialties:</strong> GOTS certified yarns, organic cotton, natural dyes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gauge Range */}
            <section className="py-24 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        GAUGE RANGE
                    </h2>

                    <div className="max-w-5xl mx-auto">
                        <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-center mb-12">
                            We specialize in mid to heavy gauge knitwear, with yarn selections perfectly suited
                            to our machinery capabilities and expertise.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-primary-red mb-2">3gg</div>
                                <h3 className="font-poppins font-semibold text-h3 text-primary-dark-red mb-2">Heavy Gauge</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Chunky knits, bold textures, statement pieces
                                </p>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-primary-red mb-2">5gg</div>
                                <h3 className="font-poppins font-semibold text-h3 text-primary-dark-red mb-2">Mid-Heavy</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Structured knitwear, outerwear, classic pieces
                                </p>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-primary-red mb-2">7gg</div>
                                <h3 className="font-poppins font-semibold text-h3 text-primary-dark-red mb-2">Medium Gauge</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Versatile knitwear, layering pieces, all-season
                                </p>
                            </div>

                            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                                <div className="text-3xl font-light text-primary-red mb-2">12gg</div>
                                <h3 className="font-poppins font-semibold text-h3 text-primary-dark-red mb-2">Fine Gauge</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
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
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        YARN CERTIFICATIONS
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-center mb-12">
                            We prioritize yarns with recognized sustainability and quality certifications,
                            ensuring transparency and ethical production throughout our supply chain.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="bg-accent-powder-green w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🌱</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">GOTS</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Global Organic Textile Standard for organic fibers
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-accent-powder-green w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">✓</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">OEKO-TEX</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Standard 100 - tested for harmful substances
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-accent-powder-green w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">♻️</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">GRS</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Global Recycled Standard for recycled content
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-accent-powder-green w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🐑</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">RWS</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Responsible Wool Standard for animal welfare
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-accent-powder-green w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🌾</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">OCS</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Organic Content Standard for organic materials
                                </p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-accent-powder-green w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🇬🇧</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">British Wool</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600">
                                    Traceable UK-sourced wool from British farms
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary-dark-red text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-6">
                        Interested in Our Yarn Collection?
                    </h2>
                    <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] max-w-2xl mx-auto mb-10">
                        Contact us to discuss yarn options, request samples, or explore possibilities
                        for your next project.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-primary-red text-white hover:bg-pink-600 transition-colors duration-300 font-poppins font-semibold text-h3"
                    >
                        DISCUSS YARN OPTIONS
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default KnitStore;