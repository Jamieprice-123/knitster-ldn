import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const OverseasProduction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/sustainable-production.jpg"
                    alt="Overseas Production"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">OVERSEAS PRODUCTION</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-light mb-12">SCALABLE PRODUCTION SOLUTIONS</h2>
                        <div className="text-lg font-light leading-relaxed">
                            <p className="mb-6">
                                In addition to our London facility, we have established trusted partnerships with
                                high-quality knitwear factories in Turkey, Romania, and Bulgaria. These partnerships
                                allow us to offer scalable production solutions while maintaining our exacting quality standards.
                            </p>
                            <p className="mb-6">
                                Our overseas partners are carefully selected for their technical capabilities, ethical
                                practices, and commitment to quality. We maintain close oversight of all overseas production,
                                ensuring consistency with our London-based manufacturing.
                            </p>
                            <p>
                                Whether you need 100 pieces or 10,000, we can recommend the most appropriate production
                                solution to meet your requirements, timeline, and budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Overseas Production */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">WHEN TO CONSIDER OVERSEAS PRODUCTION</h2>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4L8 12V22C8 32 14.4 41.2 24 44C33.6 41.2 40 32 40 22V12L24 4ZM24 22H36C35.2 29.6 30.4 36.4 24 39.2V24H12V14L24 8V22Z" fill="#FF69B4"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-light mb-4 text-[#90172a]">LARGER VOLUMES</h3>
                            <p className="text-gray-700">
                                For orders exceeding our 20,000-piece annual London capacity, our overseas partners
                                provide the infrastructure to scale production efficiently.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38 10H34V6H30V10H18V6H14V10H10C7.8 10 6 11.8 6 14V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V14C42 11.8 40.2 10 38 10ZM38 38H10V20H38V38ZM38 16H10V14H38V16Z" fill="#FF69B4"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-light mb-4 text-blue-600">FASTER TURNAROUND</h3>
                            <p className="text-gray-700">
                                Overseas facilities with dedicated production lines can often accommodate tighter
                                deadlines for bulk orders.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40ZM28 24C28 26.2 26.2 28 24 28C21.8 28 20 26.2 20 24C20 21.8 21.8 20 24 20C26.2 20 28 21.8 28 24ZM24 14C18.48 14 14 18.48 14 24H18C18 20.68 20.68 18 24 18V14ZM30 24C30 27.32 27.32 30 24 30V34C29.52 34 34 29.52 34 24H30Z" fill="#FF69B4"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-light mb-4 text-blue-600">COST OPTIMIZATION</h3>
                            <p className="text-gray-700">
                                Competitive pricing on larger production runs while maintaining quality standards
                                and ethical manufacturing practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factory Partners */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">OUR FACTORY PARTNERS</h2>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {/* Turkey */}
                        <div className="bg-gray-50 p-12 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="text-3xl font-light mb-4 text-blue-600">Turkey</h3>
                                    <p className="text-gray-600 mb-2">Istanbul & Izmir Regions</p>
                                    <p className="text-sm text-gray-500">Established Partnership Since 2015</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-gray-700 mb-4">
                                        Our Turkish partners are renowned for their expertise in both traditional and contemporary
                                        knitwear manufacturing. With state-of-the-art facilities and skilled craftspeople, they
                                        excel in producing mid to high-volume orders with exceptional quality control.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-blue-600 mb-2">Specialties:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• All gauge knitwear (3gg-12gg)</li>
                                                <li>• Complex colorwork and jacquard</li>
                                                <li>• Large-scale production</li>
                                                <li>• Natural fiber expertise</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-600 mb-2">Capabilities:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• 50,000+ pieces annually</li>
                                                <li>• MOQ: 500 pieces per style</li>
                                                <li>• Lead time: 8-12 weeks</li>
                                                <li>• Full finishing services</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Romania */}
                        <div className="bg-gray-50 p-12 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="text-3xl font-light mb-4 text-blue-600">Romania</h3>
                                    <p className="text-gray-600 mb-2">Transylvania Region</p>
                                    <p className="text-sm text-gray-500">Established Partnership Since 2017</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-gray-700 mb-4">
                                        Romanian facilities combine European quality standards with competitive pricing.
                                        Their strong tradition in textile manufacturing and proximity to the UK make them
                                        an excellent choice for medium-volume production with shorter lead times.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-blue-600 mb-2">Specialties:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Fine to medium gauge (7gg-12gg)</li>
                                                <li>• Luxury knitwear</li>
                                                <li>• European quality standards</li>
                                                <li>• Technical construction</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-600 mb-2">Capabilities:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• 30,000+ pieces annually</li>
                                                <li>• MOQ: 300 pieces per style</li>
                                                <li>• Lead time: 6-10 weeks</li>
                                                <li>• Hand-finishing available</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bulgaria */}
                        <div className="bg-gray-50 p-12 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="text-3xl font-light mb-4 text-blue-600">Bulgaria</h3>
                                    <p className="text-gray-600 mb-2">Sofia Region</p>
                                    <p className="text-sm text-gray-500">Established Partnership Since 2018</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-gray-700 mb-4">
                                        Bulgarian partners offer excellent value for medium to large production runs.
                                        With modern equipment and skilled workforce, they provide reliable quality
                                        at competitive prices, ideal for commercial fashion brands.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-blue-600 mb-2">Specialties:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• All gauge production</li>
                                                <li>• Commercial knitwear</li>
                                                <li>• Value-driven manufacturing</li>
                                                <li>• Consistent quality</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-600 mb-2">Capabilities:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• 40,000+ pieces annually</li>
                                                <li>• MOQ: 400 pieces per style</li>
                                                <li>• Lead time: 8-10 weeks</li>
                                                <li>• Full package services</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">QUALITY ASSURANCE</h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg font-light leading-relaxed text-center mb-12">
                            Maintaining quality standards across all production locations is our top priority.
                            We implement rigorous quality control processes and regular factory audits to ensure
                            every piece meets our exacting standards.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Quality Control Process</h3>
                                <ul className="text-gray-700 space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Pre-production sample approval</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>In-line inspection during production</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Final inspection before shipment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Random sampling and testing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Detailed inspection reports</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-light mb-4 text-blue-600">Factory Audits & Standards</h3>
                                <ul className="text-gray-700 space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Regular factory audits and assessments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Ethical manufacturing certifications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Worker welfare and safety standards</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Environmental compliance verification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-pink-500 mr-2">•</span>
                                        <span>Transparent supply chain documentation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">HOW WE MANAGE OVERSEAS PRODUCTION</h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">Initial Assessment</h3>
                                <p className="text-gray-700">
                                    We assess your requirements and recommend the most appropriate production partner
                                    based on quantity, complexity, timeline, and budget considerations.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">Sample Development</h3>
                                <p className="text-gray-700">
                                    All initial samples are developed in our London facility to ensure technical accuracy
                                    before transitioning to overseas production.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">Production Management</h3>
                                <p className="text-gray-700">
                                    Our team maintains close communication with factory partners, conducting regular
                                    inspections and providing technical support throughout production.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">Quality Verification</h3>
                                <p className="text-gray-700">
                                    Final quality control inspection is conducted before shipment, with detailed reports
                                    and any necessary corrections handled promptly.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                5
                            </div>
                            <div>
                                <h3 className="text-xl font-light mb-2 text-blue-600">Logistics & Delivery</h3>
                                <p className="text-gray-700">
                                    We coordinate all shipping and customs documentation, ensuring timely delivery
                                    to your specified location with full transparency on costs and timing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-[#90172a] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Explore Overseas Production Options</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-10">
                        Contact us to discuss your production needs. We'll recommend the best manufacturing
                        solution for your requirements, whether in London or through our trusted overseas partners.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
                    >
                        DISCUSS PRODUCTION OPTIONS
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default OverseasProduction;