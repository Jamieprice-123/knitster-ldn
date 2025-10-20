import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout/Layout';

const Home = () => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Layout>
            <section className="h-screen relative">
                <img src="/images/Home-Page.JPG" alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <div
                            className="inline-block cursor-pointer"
                            onClick={() => setShowInfo(!showInfo)}
                        >
                            <img
                                src="/images/logo.png"
                                alt="Knitster LDN"
                                className="h-32 mb-6 transition-all duration-300 hover:scale-105"
                            />
                            {!showInfo && (
                                <p className="font-poppins font-light text-lg mt-4 opacity-75">Click for more information</p>
                            )}
                        </div>

                        {showInfo && (
                            <div
                                className="mt-8 max-w-3xl mx-auto px-4 animate-fade-in cursor-pointer"
                                onClick={() => setShowInfo(false)}
                            >
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] mb-6">
                                    Established in 2013, Knitster LDN was founded with a clear mission: to produce
                                    exceptional quality knitwear with a focus on craftsmanship, innovation, and sustainability.
                                </p>
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] mb-6">
                                    We believe in creating beautiful, well-made garments that stand the test of time,
                                    challenging the fast fashion mindset that has dominated the industry.
                                </p>
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em]">
                                    Our goal is to be at the forefront of knitwear manufacturing in the UK, supporting
                                    the British fashion industry and maintaining the highest standards of ethical production.
                                </p>
                                <p className="font-poppins font-light text-sub mt-6 opacity-75">Click to close</p>
                            </div>
                        )}

                        {!showInfo && (
                            <>
                                <p className="font-poppins font-light text-2xl mt-6">Luxury Knitwear Manufacturing</p>
                                <p className="font-poppins font-light text-lg mt-4">Established 2013 • London, UK</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;