import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const MadeInLondon = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/Made-in-London.JPG"
                    alt="Made In London"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 leading-[60pt] tracking-[-0.02em] text-white text-center px-4">
                        MADE IN LONDON
                    </h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-center">
                        <p className="mb-8">
                            Our London-based facility is the heart of Knitster LDN. Here, our dedicated team of 14 skilled
                            craftspeople produce up to 20,000 pieces of luxury knitwear annually, managing every stage from
                            initial concept to finished garment.
                        </p>
                        <p className="mb-8">
                            We specialize in mid to heavy gauge, fully fashioned knitwear, hand-finished with precision.
                            Using both Shima and Stoll technology, we combine traditional craftsmanship with modern efficiency.
                        </p>
                        <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
                    </div>
                </div>
            </section>

            {/* Production Capabilities */}
            <section className="py-16 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        PRODUCTION CAPABILITIES
                    </h2>

                    <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto mb-16">
                        <div className="text-center">
                            <div className="text-4xl font-light text-primary-red mb-4">20,000</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-dark-red">Annual Capacity</h3>
                            <p className="font-poppins font-normal text-sub text-gray-700">
                                Knitwear pieces produced annually at our London facility
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-light text-primary-red mb-4">14</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-dark-red">Team Members</h3>
                            <p className="font-poppins font-normal text-sub text-gray-700">
                                Dedicated staff providing exceptional craftsmanship
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-light text-primary-red mb-4">50</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-dark-red">MOQ</h3>
                            <p className="font-poppins font-normal text-sub text-gray-700">
                                Minimum order quantity per style
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-light text-primary-red mb-4">2013</div>
                            <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-dark-red">Established</h3>
                            <p className="font-poppins font-normal text-sub text-gray-700">
                                Over a decade of luxury knitwear production
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        FROM CONCEPT TO COMPLETION
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <img src="/images/logo-stitches.png" alt="" className="w-12 h-12" />
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-3 text-primary-red">
                                    BRIEFING & PLANNING
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Initial consultation with directors Aysen Bayram & Emma McClelland for concept development and sample strategy.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <img src="/images/logo-stitches.png" alt="" className="w-12 h-12" />
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-3 text-primary-red">
                                    DEVELOPMENT & PROGRAMMING
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Our programmer creates digital knit programs while our product development team sources materials and develops tech packs.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <img src="/images/logo-stitches.png" alt="" className="w-12 h-12" />
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-3 text-primary-red">
                                    PRODUCTION
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Our skilled technicians, linkers, and craftspeople execute bulk production using approved samples and specifications.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <img src="/images/logo-stitches.png" alt="" className="w-12 h-12" />
                                </div>
                                <h3 className="font-poppins font-semibold text-h3 mb-3 text-primary-red">
                                    FINISHING & QC
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Final quality control checks, hand-finishing, and packing following our strict quality manual standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Machinery & Equipment */}
            <section className="py-24 bg-accent-powder-green">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        MACHINERY & EQUIPMENT
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        {/* Flat Bed Knitting Machines */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Shima SES122 - 12gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Fine gauge flat bed knitting machine for delicate, detailed knitwear production.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Shima SIG123 - 7gg/5gg Multi
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Multi-gauge capability for versatile mid-weight knitwear production.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Shima NSSR122 - 7gg/5gg Multi
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Advanced multi-gauge machine for complex structures and patterns.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Shima SES122 - 3gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Heavy gauge machine for chunky knits and bold textures.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Stoll CMS530HP - 5gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    High-performance Stoll machine for precision mid-weight production.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Dubied - 12gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Hand frame knitting for traditional craftsmanship and samples.
                                </p>
                            </div>
                        </div>

                        {/* Linking Machines */}
                        <h3 className="font-poppins font-semibold text-h3 mb-6 text-center text-primary-dark-red mt-12">
                            LINKING MACHINES
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Complett - 12gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Fine gauge linking for seamless finishing.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Complett - 7gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Medium gauge linking for versatile applications.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Complett - 5gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Mid-heavy gauge linking for structured pieces.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Exacta - 3gg
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Heavy gauge linking for chunky knitwear.
                                </p>
                            </div>
                        </div>

                        {/* Equipment & Software */}
                        <h3 className="font-poppins font-semibold text-h3 mb-6 text-center text-primary-dark-red mt-12">
                            EQUIPMENT & SOFTWARE
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Industrial Washer & Dryer
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Electrolux industrial equipment for professional finishing.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Corghi Cone Winder
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Precision yarn winding for production preparation.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Industrial Iron & Press
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Professional pressing equipment for perfect finishing.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Sewing & Overlocker
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Industrial machines for trim attachment and finishing.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Shima Apex 3
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Advanced programming system for Shima machines.
                                </p>
                            </div>

                            <div className="bg-white p-8 shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                    Stoll M1plus
                                </h3>
                                <p className="font-poppins font-normal text-sub text-gray-700">
                                    Professional programming system for Stoll equipment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-primary-dark-red text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-6">
                        Visit Our London Facility
                    </h2>
                    <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] max-w-2xl mx-auto mb-8">
                        Unit 5, Leyton Studios<br />
                        15 Argall Avenue<br />
                        London, E10 7QE, United Kingdom
                    </p>
                    <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] mb-10">
                        Contact us to schedule a visit and see our production process firsthand.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-primary-red text-white hover:bg-pink-600 transition-colors duration-300 font-poppins font-semibold text-h3"
                    >
                        Email Us
                    </a>
            </div>
        </section>
</Layout>
);
};

export default MadeInLondon;