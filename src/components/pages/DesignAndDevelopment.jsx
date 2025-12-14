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
                    src="/images/Design-and-Development.JPG"
                    alt="Design & Development"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for navbar contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 text-white text-center px-4">
                        DESIGN & DEVELOPMENT
                    </h1>
                </div>
            </section>

            {/* Work in Progress Notice */}
            <section className="py-12 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-poppins font-semibold text-h3 text-primary-dark-red">
                            WORK IN PROGRESS
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-poppins font-light text-h2 mb-8 text-primary-dark-red">
                            COMPREHENSIVE DESIGN SERVICES
                        </h2>
                        <div className="font-poppins font-normal text-body">
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
            <section className="py-20 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 text-center mb-12 text-primary-dark-red">
                        OUR SERVICES
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                DESIGN CONSULTATION
                            </h3>
                            <p className="font-poppins font-normal text-body mb-4">
                                Our experienced team works closely with designers to translate creative vision into technically viable knitwear.
                                We offer expertise in yarn selection, stitch development, and garment construction.
                            </p>
                            <ul className="font-poppins font-normal text-sub space-y-2">
                                <li>• Concept development and feasibility assessment</li>
                                <li>• Technical advice and material recommendations</li>
                                <li>• Cost analysis and production planning</li>
                                <li>• Trend forecasting and market insights</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                SAMPLING & PROTOTYPING
                            </h3>
                            <p className="font-poppins font-normal text-body mb-4">
                                We develop comprehensive swatches and prototypes that showcase our technical capabilities
                                and allow designers to refine their designs before production.
                            </p>
                            <ul className="font-poppins font-normal text-sub space-y-2">
                                <li>• Stitch and texture development</li>
                                <li>• Color work and pattern creation</li>
                                <li>• Size grading and fit assessment</li>
                                <li>• Multiple prototype iterations</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                TECHNICAL DEVELOPMENT
                            </h3>
                            <p className="font-poppins font-normal text-body mb-4">
                                Complete technical development services from initial sketches through to production-ready
                                specifications, ensuring every detail is perfected.
                            </p>
                            <ul className="font-poppins font-normal text-sub space-y-2">
                                <li>• Tech pack creation and specification sheets</li>
                                <li>• Digital knit programming</li>
                                <li>• Material sourcing and trim selection</li>
                                <li>• Quality control standards development</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">
                                FULL PRODUCTION MANAGEMENT
                            </h3>
                            <p className="font-poppins font-normal text-body mb-4">
                                End-to-end project management from sample approval through to final delivery,
                                with transparent communication at every stage.
                            </p>
                            <ul className="font-poppins font-normal text-sub space-y-2">
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 text-center mb-12 text-primary-dark-red">
                        OUR DEVELOPMENT PROCESS
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src="/images/logo-stitches.png" alt="" className="h-10 w-auto object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">
                                        INITIAL CONSULTATION
                                    </h3>
                                    <p className="font-poppins font-normal text-body">
                                        Meet with directors Aysen Bayram and Emma McClelland to discuss your vision, timeline, and budget.
                                        We'll assess feasibility and provide initial guidance on materials and construction methods.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src="/images/logo-stitches.png" alt="" className="h-10 w-auto object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">
                                        CONCEPT DEVELOPMENT
                                    </h3>
                                    <p className="font-poppins font-normal text-body">
                                        Our product development team creates initial tech packs, sources yarns and materials,
                                        and develops a comprehensive sampling strategy aligned with your creative vision.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src="/images/logo-stitches.png" alt="" className="h-10 w-auto object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">
                                        SAMPLING & ITERATION
                                    </h3>
                                    <p className="font-poppins font-normal text-body">
                                        Our programmer creates digital knit programs and produces initial samples. We work through
                                        multiple iterations, refining fit, drape, and details until the design is perfected.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src="/images/logo-stitches.png" alt="" className="h-10 w-auto object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">
                                        PRODUCTION APPROVAL
                                    </h3>
                                    <p className="font-poppins font-normal text-body">
                                        Final sample approval, production timeline confirmation, and detailed quality control
                                        standards documentation ensure a smooth transition from development to manufacturing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src="/images/logo-stitches.png" alt="" className="h-10 w-auto object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-h3 mb-2 text-primary-red">
                                        MANUFACTURING & DELIVERY
                                    </h3>
                                    <p className="font-poppins font-normal text-body">
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
            <section className="py-20 bg-primary-dark-red text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-poppins font-light text-h2 mb-6">
                        Ready to Develop Your Collection?
                    </h2>
                    <p className="font-poppins font-normal text-body max-w-2xl mx-auto mb-10">
                        Contact us to discuss your design needs and discover how our experienced team
                        can bring your knitwear vision to life.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-primary-red text-white hover:bg-pink-600 transition-colors duration-300 font-poppins font-semibold text-h3 rounded-lg"
                    >
                        Email Us
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default DesignAndDevelopment;
