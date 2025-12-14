import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const EnvironmentalPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[50vh] overflow-hidden">
                <img
                    src="/images/Our-Values.JPG"
                    alt="Environmental Policy"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for navbar contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 text-white text-center px-4">
                        ENVIRONMENTAL POLICY
                    </h1>
                </div>
            </section>

            {/* Draft Notice */}
            <section className="py-8 bg-primary-red">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="font-poppins font-semibold text-h3 text-white">
                            DRAFT - This document is currently under review
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-poppins font-light text-h2 mb-8 text-primary-dark-red">
                            OUR ENVIRONMENTAL COMMITMENT
                        </h2>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                At Knitster LDN, we recognise that our operations have an impact on the environment 
                                and we are committed to minimising this impact through sustainable practices and 
                                continuous improvement. We believe that responsible manufacturing is not just good 
                                for the planet – it's essential for the future of our industry.
                            </p>
                            <p>
                                As proud supporters of the British wool revival, we are dedicated to promoting 
                                sustainable, locally-sourced materials and reducing the environmental footprint 
                                of fashion manufacturing.
                            </p>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            SUSTAINABLE MATERIALS
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                We prioritise the use of sustainable, natural, and recycled materials in our production:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>British Wool:</strong> We champion British wool from local farms, 
                                    celebrating native breeds and supporting UK agriculture.</li>
                                <li><strong>Organic Fibres:</strong> We source GOTS-certified organic wool and 
                                    cotton wherever possible.</li>
                                <li><strong>Recycled Materials:</strong> We offer recycled wool, cotton, cashmere, 
                                    and other sustainable alternatives.</li>
                                <li><strong>Natural Fibres:</strong> We prioritise natural, biodegradable fibres 
                                    that have minimal environmental impact.</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            LOCAL MANUFACTURING
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                By manufacturing in London, we significantly reduce the environmental impact 
                                associated with long-distance shipping and transportation:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Reduced carbon footprint through local production</li>
                                <li>Shorter supply chains with greater transparency</li>
                                <li>Support for the UK textile industry and local economy</li>
                                <li>Complete traceability from fibre to finished garment</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            WASTE REDUCTION
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                We are committed to minimising waste at every stage of production:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Careful pattern cutting to minimise fabric waste</li>
                                <li>Recycling of yarn waste and offcuts where possible</li>
                                <li>Reduction of packaging materials and use of recycled packaging</li>
                                <li>Digital processes to reduce paper consumption</li>
                                <li>Energy-efficient equipment and practices in our facility</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            CERTIFICATIONS & STANDARDS
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                We work with yarns and materials that meet recognised environmental standards:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>GOTS:</strong> Global Organic Textile Standard for organic fibres</li>
                                <li><strong>OEKO-TEX:</strong> Standard 100 - tested for harmful substances</li>
                                <li><strong>GRS:</strong> Global Recycled Standard for recycled content</li>
                                <li><strong>RWS:</strong> Responsible Wool Standard for animal welfare</li>
                                <li><strong>British Wool:</strong> Traceable UK-sourced wool from British farms</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            CONTINUOUS IMPROVEMENT
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                We are committed to continuously improving our environmental performance through:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Regular review and update of our environmental practices</li>
                                <li>Staff training on environmental awareness and sustainability</li>
                                <li>Monitoring and measuring our environmental impact</li>
                                <li>Setting targets for improvement and tracking progress</li>
                                <li>Staying informed about new sustainable technologies and practices</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            SUPPORTING THE BRITISH WOOL REVIVAL
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                We are proud supporters of the Great British Wool Revival, an initiative that 
                                promotes the use of British wool and supports UK farmers. By choosing British 
                                wool, we help to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Support British farmers and rural communities</li>
                                <li>Reduce the carbon footprint of imported fibres</li>
                                <li>Preserve traditional skills and heritage breeds</li>
                                <li>Promote a natural, renewable, and biodegradable fibre</li>
                            </ul>
                            <p className="mt-4">
                                Learn more at{' '}
                                <a 
                                    href="https://www.greatbritishwoolrevival.co.uk/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-primary-red hover:text-primary-dark-red underline"
                                >
                                    greatbritishwoolrevival.co.uk
                                </a>
                            </p>
                        </div>

                        <div className="mt-16 p-8 bg-accent-powder-green rounded-lg">
                            <p className="font-poppins font-normal text-body text-gray-700">
                                This policy was approved by the Directors and will be reviewed annually to ensure 
                                it remains relevant and effective.
                            </p>
                            <div className="mt-6">
                                <p className="font-poppins font-semibold text-h3">Aysen Bayram & Emma McClelland</p>
                                <p className="font-poppins font-normal text-sub text-gray-600">Co-Founders & Directors, Knitster LDN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-primary-dark-red text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-poppins font-light text-h2 mb-6">
                        Questions About Our Environmental Practices?
                    </h2>
                    <p className="font-poppins font-normal text-body max-w-2xl mx-auto mb-10">
                        We're always happy to discuss our sustainability initiatives and how we can 
                        help make your knitwear production more environmentally friendly.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-primary-red text-white hover:bg-pink-600 transition-colors duration-300 font-poppins font-semibold text-h3 rounded-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default EnvironmentalPolicyPage;
