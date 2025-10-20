import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const OurValues = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/Our-Values.JPG"
                    alt="Our Values"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 leading-[60pt] tracking-[-0.02em] text-white text-center px-4">
                        OUR VALUES
                    </h1>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-12 text-primary-dark-red">
                            OUR MISSION
                        </h2>
                        <div className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em]">
                            <p className="mb-6">
                                Established in 2013, Knitster LDN was founded with a clear mission: to produce exceptional quality knitwear with
                                a focus on craftsmanship, innovation, and sustainability.
                            </p>
                            <p className="mb-6">
                                We believe in creating beautiful, well-made garments that stand the test of time,
                                challenging the fast fashion mindset that has dominated the industry.
                            </p>
                            <p>
                                Our goal is to be at the forefront of knitwear manufacturing in the UK, supporting
                                the British fashion industry and maintaining the highest standards of ethical production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        WHAT WE STAND FOR
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#cfdacc"/>
                                    <path d="M32 16C25.4 16 20 21.4 20 28C20 38 32 48 32 48C32 48 44 38 44 28C44 21.4 38.6 16 32 16ZM32 32C29.8 32 28 30.2 28 28C28 25.8 29.8 24 32 24C34.2 24 36 25.8 36 28C36 30.2 34.2 32 32 32Z" fill="#fc1048"/>
                                </svg>
                            </div>
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">BRITISH MANUFACTURING</h3>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700">
                                We're proud to be part of the British supply chain, supporting local industry and championing
                                UK wool while reducing our carbon footprint.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#cfdacc"/>
                                    <path d="M44 24H20C18.9 24 18 24.9 18 26V38C18 39.1 18.9 40 20 40H44C45.1 40 46 39.1 46 38V26C46 24.9 45.1 24 44 24ZM44 38H20V26H44V38ZM32 37C34.7614 37 37 34.7614 37 32C37 29.2386 34.7614 27 32 27C29.2386 27 27 29.2386 27 32C27 34.7614 29.2386 37 32 37Z" fill="#fc1048"/>
                                </svg>
                            </div>
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">PRECISION & QUALITY</h3>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700">
                                Using both Shima and Stoll technology, we combine precision manufacturing with exceptional
                                craftsmanship to deliver consistent, high-quality results.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#cfdacc"/>
                                    <path d="M34 27.3V16H30V27.3C28.8 28 28 29.4 28 31C28 33.2 29.8 35 32 35C34.2 35 36 33.2 36 31C36 29.4 35.2 28 34 27.3ZM32 33C30.9 33 30 32.1 30 31C30 29.9 30.9 29 32 29C33.1 29 34 29.9 34 31C34 32.1 33.1 33 32 33ZM40 25H36V21H40V25ZM40 37H36V29H40V37ZM40 48H36V40H40V48ZM28 48H24V40H28V48ZM28 37H24V29H28V37ZM28 25H24V21H28V25Z" fill="#fc1048"/>
                                </svg>
                            </div>
                            <h3 className="font-poppins font-semibold text-h3 mb-4 text-primary-red">SUSTAINABLE PRACTICES</h3>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700">
                                From fiber selection to finished product, we prioritize natural, recyclable materials and
                                ethical production methods that benefit people and planet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knitstory - Founders Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-16 text-primary-dark-red">
                        MEET THE FOUNDERS
                    </h2>
                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                        {/* Aysen */}
                        <div>
                            <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                                <img
                                    src="/images/aysen-portrait.jpg"
                                    alt="Aysen Bayram"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-poppins font-semibold text-h3 mb-2">Aysen Bayram</h3>
                            <p className="font-poppins font-normal text-body text-primary-red mb-4">Co-Founder & Creative Director</p>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700">
                                Born in London's East End to Turkish-Cypriot parents, Aysen draws both inspiration and
                                energy from her native city. After studying Fashion with textiles at Ravensbourne and
                                working for Ally Capellino and Tommy Hilfiger, she established Knitster LDN in 2013.
                                A true appreciation of craftsmanship coupled with an instinctive eye for colour characterises Aysen's work.
                            </p>
                        </div>

                        {/* Emma */}
                        <div>
                            <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                                <img
                                    src="/images/emma-portrait.jpg"
                                    alt="Emma McClelland"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-poppins font-semibold text-h3 mb-2">Emma McClelland</h3>
                            <p className="font-poppins font-normal text-body text-primary-red mb-4">Co-Founder & Design Director</p>
                            <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] text-gray-700">
                                Dublin-born Emma's passion for textiles began watching her mother craft traditional Aran sweaters.
                                After studying fashion design in Dublin and Milan, she worked for 8 years as an in-house
                                knitwear designer at Marks & Spencer. Emma joined forces with Aysen to transform Knitster LDN
                                into the industry-leading manufacturer it is today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default OurValues;