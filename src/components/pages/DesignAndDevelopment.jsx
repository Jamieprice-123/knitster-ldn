import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const DesignAndDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/bespoke-knitwear.jpg"
                    alt="Design & Development"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">DESIGN & DEVELOPMENT</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-light mb-12">COMPREHENSIVE DESIGN SERVICES</h2>
                        <div className="text-lg font-light leading-relaxed">
                            <p className="mb-6">
                                From initial concept to final sample, our design and development team works closely
                                with designers to translate creative vision into technically viable, beautifully crafted knitwear.
                            </p>
                            <p className="mb-6">
                                We offer full-service design consultation, sampling, prototyping, and technical development,
                                ensuring every piece meets both aesthetic and production requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Services */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">OUR SERVICES</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-[#90172a]">DESIGN CONSULTATION</h3>
                            <p className="text-gray-700 mb-6">
                                Our experienced team works closely with designers to translate creative vision into technically viable knitwear.
                                We offer expertise in yarn selection, stitch development, and garment construction.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Concept development and feasibility assessment</li>
                                <li>• Technical advice and material recommendations</li>
                                <li>• Cost analysis and production planning</li>
                                <li>• Trend forecasting and market insights</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-[#90172a]">SAMPLING & PROTOTYPING</h3>
                            <p className="text-gray-700 mb-6">
                                We develop comprehensive swatches and prototypes that showcase our technical capabilities
                                and allow designers to refine their designs before production.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Stitch and texture development</li>
                                <li>• Color work and pattern creation</li>
                                <li>• Size grading and fit assessment</li>
                                <li>• Multiple prototype iterations</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-[#90172a]">TECHNICAL DEVELOPMENT</h3>
                            <p className="text-gray-700 mb-6">
                                Complete technical development services from initial sketches through to production-ready
                                specifications, ensuring every detail is perfected.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Tech pack creation and specification sheets</li>
                                <li>• Digital knit programming</li>
                                <li>• Material sourcing and trim selection</li>
                                <li>• Quality control standards development</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-[#90172a]">FULL PRODUCTION MANAGEMENT</h3>
                            <p className="text-gray-700 mb-6">
                                End-to-end project management from sample approval through to final delivery,
                                with transparent communication at every stage.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Production timeline planning</li>
                                <li>• Quality assurance throughout manufacturing</li>
                                <li>• Progress updates and milestone reporting</li>
                                <li>• Final inspection and delivery coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">OUR DEVELOPMENT PROCESS</h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-[#90172a]">Initial Consultation</h3>
                                    <p className="text-gray-700">
                                        Meet with directors Aysen Bayram and Emma McClelland to discuss your vision, timeline, and budget.
                                        We'll assess feasibility and provide initial guidance on materials and construction methods.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-[#90172a]">Concept Development</h3>
                                    <p className="text-gray-700">
                                        Our product development team creates initial tech packs, sources yarns and materials,
                                        and develops a comprehensive sampling strategy aligned with your creative vision.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-[#90172a]">Sampling & Iteration</h3>
                                    <p className="text-gray-700">
                                        Our programmer creates digital knit programs and produces initial samples. We work through
                                        multiple iterations, refining fit, drape, and details until the design is perfected.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-[#90172a]">Production Approval</h3>
                                    <p className="text-gray-700">
                                        Final sample approval, production timeline confirmation, and detailed quality control
                                        standards documentation ensure a smooth transition from development to manufacturing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    5
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-[#90172a]">Manufacturing & Delivery</h3>
                                    <p className="text-gray-700">
                                        Full production begins with ongoing quality control, progress updates, and final inspection
                                        before delivery. We maintain close communication throughout the entire process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-[#90172a] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Ready to Develop Your Collection?</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-10">
                        Contact us to discuss your design needs and discover how our experienced team
                        can bring your knitwear vision to life.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
                    >
                        START YOUR PROJECT
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default DesignAndDevelopment;