import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const ModernSlaveryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[50vh] overflow-hidden">
                <img
                    src="/images/Our-Values.JPG"
                    alt="Modern Slavery Statement"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for navbar contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 text-white text-center px-4">
                        MODERN SLAVERY STATEMENT
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

            {/* Statement Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-poppins font-light text-h2 mb-8 text-primary-dark-red">
                            OUR COMMITMENT
                        </h2>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                Knitster LDN is committed to preventing acts of modern slavery and human trafficking 
                                from occurring within our business and supply chain. We recognise our responsibility 
                                to be transparent and proactive in our approach to tackling modern slavery.
                            </p>
                            <p>
                                This statement is made pursuant to section 54(1) of the Modern Slavery Act 2015 and 
                                constitutes our slavery and human trafficking statement for the current financial year.
                            </p>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            OUR BUSINESS
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                Knitster LDN is a London-based knitwear manufacturer and design consultancy established 
                                in 2013. We specialise in luxury product development with a focus on quality, innovation, 
                                and sustainability. Our London facility employs a dedicated team of 14 staff members.
                            </p>
                            <p>
                                We are committed to providing fair wages, ethical working conditions, and a supportive 
                                environment for all our employees. Our in-house team is integral to maintaining the 
                                quality, transparency, and craftsmanship our clients rely on.
                            </p>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            OUR SUPPLY CHAIN
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                Our supply chain includes yarn suppliers, primarily UK-based spinners, and trusted 
                                overseas manufacturing partners in Turkey, Romania, and Bulgaria. We maintain close 
                                relationships with all our suppliers and conduct regular assessments to ensure 
                                compliance with our ethical standards.
                            </p>
                            <p>
                                We work closely with UK spinners and champion British wool, ensuring complete 
                                traceability and supporting the UK textile industry.
                            </p>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            OUR POLICIES
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                We operate the following policies that describe our approach to the identification 
                                of modern slavery risks and steps to be taken to prevent slavery and human trafficking 
                                in our operations:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Whistleblowing policy - We encourage all workers, customers and other business 
                                    partners to report any concerns related to the direct activities, or the supply 
                                    chains of, our organisation.</li>
                                <li>Employee code of conduct - Our code makes clear to employees the actions and 
                                    behaviour expected of them when representing the organisation.</li>
                                <li>Supplier code of conduct - We are committed to ensuring that our suppliers 
                                    adhere to the highest standards of ethics.</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            DUE DILIGENCE
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                As part of our initiative to identify and mitigate risk, we:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Conduct regular factory audits and assessments of our overseas partners</li>
                                <li>Verify ethical manufacturing certifications</li>
                                <li>Monitor worker welfare and safety standards</li>
                                <li>Ensure environmental compliance verification</li>
                                <li>Maintain transparent supply chain documentation</li>
                            </ul>
                        </div>

                        <h3 className="font-poppins font-semibold text-h3 mt-12 mb-6 text-primary-red">
                            TRAINING
                        </h3>
                        <div className="font-poppins font-normal text-body space-y-6">
                            <p>
                                To ensure a high level of understanding of the risks of modern slavery and human 
                                trafficking in our supply chains and our business, we provide training to relevant 
                                members of staff. Our directors are committed to reviewing and updating this 
                                statement annually.
                            </p>
                        </div>

                        <div className="mt-16 p-8 bg-accent-powder-green rounded-lg">
                            <p className="font-poppins font-normal text-body text-gray-700">
                                This statement was approved by the Board of Directors and will be reviewed and 
                                updated annually.
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
                        Questions About Our Policies?
                    </h2>
                    <p className="font-poppins font-normal text-body max-w-2xl mx-auto mb-10">
                        If you have any questions about our Modern Slavery Statement or any of our 
                        ethical policies, please don't hesitate to contact us.
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

export default ModernSlaveryPage;
