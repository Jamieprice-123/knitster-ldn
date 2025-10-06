import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';

const MadeInLondon = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const portfolioItems = [
        { image: '/images/portfolio-1.jpg', title: 'Burberry AW24' },
        { image: '/images/portfolio-2.jpg', title: 'Bottega Veneta SS24' },
        { image: '/images/portfolio-3.jpg', title: 'Christian Dior FW24' },
        { image: '/images/portfolio-4.jpg', title: 'JW Anderson AW23' },
        { image: '/images/portfolio-5.jpg', title: 'Molly Goddard SS23' },
        { image: '/images/portfolio-6.jpg', title: 'Stefan Cooke AW23' },
        { image: '/images/portfolio-7.jpg', title: 'Cole Buxton FW23' },
        { image: '/images/portfolio-8.jpg', title: 'S.S Daley SS23' },
        { image: '/images/portfolio-9.jpg', title: 'Toast AW23' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [portfolioItems.length]);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/bespoke-knitwear.jpg"
                    alt="Made In London"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">MADE IN LONDON</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-lg font-light leading-relaxed text-center">
                        <p className="mb-8">
                            Our London-based facility is the heart of Knitster LDN. Here, our dedicated team of 14 skilled
                            craftspeople produce up to 20,000 pieces of luxury knitwear annually, managing every stage from
                            initial concept to finished garment.
                        </p>
                        <p className="mb-8">
                            We specialize in mid to heavy gauge, fully fashioned knitwear, hand-finished with precision.
                            Using both Shima and Stoll technology, we combine traditional craftsmanship with modern efficiency.
                        </p>
                        <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
                    </div>
                </div>
            </section>

            {/* Production Capabilities */}
            <section className="py-16 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">PRODUCTION CAPABILITIES</h2>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
                        <div className="text-center">
                            <div className="text-4xl font-light text-pink-500 mb-4">20,000</div>
                            <h3 className="text-xl font-light mb-2 text-[#90172a]">Annual Capacity</h3>
                            <p className="text-gray-700 text-sm">
                                Knitwear pieces produced annually at our London facility, depending on garment complexity and yarn type.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-light text-pink-500 mb-4">14</div>
                            <h3 className="text-xl font-light mb-2 text-[#90172a]">Team Members</h3>
                            <p className="text-gray-700 text-sm">
                                Dedicated staff providing fair wages, ethical working conditions, and exceptional craftsmanship.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-light text-pink-500 mb-4">2013</div>
                            <h3 className="text-xl font-light mb-2 text-[#90172a]">Established</h3>
                            <p className="text-gray-700 text-sm">
                                Over a decade of experience producing luxury knitwear for the world's leading brands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">FROM CONCEPT TO COMPLETION</h2>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">1</div>
                                <h3 className="text-xl font-light mb-3 text-[#90172a]">BRIEFING & PLANNING</h3>
                                <p className="text-gray-700 text-sm">
                                    Initial consultation with directors Aysen Bayram & Emma McClelland for concept development and sample strategy.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">2</div>
                                <h3 className="text-xl font-light mb-3 text-[#90172a]">DEVELOPMENT & PROGRAMMING</h3>
                                <p className="text-gray-700 text-sm">
                                    Our programmer creates digital knit programs while our product development team sources materials and develops tech packs.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">3</div>
                                <h3 className="text-xl font-light mb-3 text-[#90172a]">PRODUCTION</h3>
                                <p className="text-gray-700 text-sm">
                                    Our skilled technicians, linkers, and craftspeople execute bulk production using approved samples and specifications.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">4</div>
                                <h3 className="text-xl font-light mb-3 text-[#90172a]">FINISHING & QC</h3>
                                <p className="text-gray-700 text-sm">
                                    Final quality control checks, hand-finishing, and packing following our strict quality manual standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Latest Work - Moved from OurValues */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-12">OUR LATEST WORK</h2>
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 20}%)` }}
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

            {/* Machinery & Equipment */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">MACHINERY & EQUIPMENT</h2>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                            <div>
                                <h3 className="text-2xl font-light mb-6 text-[#90172a]">State-of-the-Art Technology</h3>
                                <p className="text-lg font-light leading-relaxed mb-6">
                                    Using both Shima and Stoll technology, we combine the best of both worlds — creating a wide range of
                                    silhouettes and structures with precision and efficiency.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Our advanced knitting machines allow us to produce everything from delicate 12-gauge pieces
                                    to robust 3-gauge knitwear, with full control over every aspect of the manufacturing process.
                                </p>
                            </div>

                            <div>
                                <img
                                    src="/images/sustainable-production.jpg"
                                    alt="Advanced Knitting Technology"
                                    className="w-full h-auto shadow-lg rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Machinery Details */}
                        <div className="bg-white p-12 rounded-lg shadow-sm">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-xl font-medium mb-6 text-[#90172a]">Flat Bed Knitting Machines</h4>
                                    <ul className="text-gray-700 space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Shima SES122 - 12gg</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Shima SIG123 - 7gg / 5gg Multi</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Shima NSSR122 - 7gg / 5gg Multi</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Shima SES122 - 3gg</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Stoll CMS530HP - 5gg</span>
                                        </li>
                                    </ul>

                                    <h4 className="text-xl font-medium mb-6 mt-8 text-[#90172a]">Hand Frame Knitting</h4>
                                    <ul className="text-gray-700 space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Dubied - 12gg</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Brother Domestic Knitting machines x 3</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-medium mb-6 text-[#90172a]">Linking Machines</h4>
                                    <ul className="text-gray-700 space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Complett - 12gg</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Complett - 7gg</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Complett - 5gg</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Exacta - 3gg</span>
                                        </li>
                                    </ul>

                                    <h4 className="text-xl font-medium mb-6 mt-8 text-[#90172a]">Equipment & Software</h4>
                                    <ul className="text-gray-700 space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Electrolux industrial Washer & Dryer</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Corghi Cone Winder</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Industrial Iron & Press</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Industrial Sewing Machine & Overlocker</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Shima Apex 3 Operating System</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-pink-500 mr-2">•</span>
                                            <span>Stoll M1plus Operating System</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-[#90172a] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Visit Our London Facility</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-8">
                        Unit 5, Leyton Studios<br />
                        15 Argall Avenue<br />
                        London, E10 7QE, United Kingdom
                    </p>
                    <p className="text-lg font-light mb-10">
                        Contact us to schedule a visit and see our production process firsthand.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
                    >
                        SCHEDULE A VISIT
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default MadeInLondon;