import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout/Layout';

const Home = () => {
    return (
        <Layout>
            <section className="h-screen relative">
                <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <Link
                            to="/our-values"
                            className="inline-block group cursor-pointer"
                        >
                            <h1 className="text-6xl font-bold mb-6 transition-all duration-300 group-hover:text-pink-200 group-hover:scale-105">
                                KNITSTER LDN
                            </h1>
                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-light">Click to explore</span>
                                <svg
                                    className="w-4 h-4 animate-bounce"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </Link>
                        <p className="text-2xl font-light mt-6">Luxury Knitwear Manufacturing</p>
                        <p className="text-lg font-light mt-4">Established 2013 • London, UK</p>

                        {/* Subtle navigation hint */}
                        <div className="mt-16 animate-pulse">
                            <p className="text-sm font-light text-gray-300">Use the navigation above to explore</p>
                            <svg
                                className="w-6 h-6 mx-auto mt-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;