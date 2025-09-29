import React, { useEffect } from 'react';
import Layout from '../layout/Layout';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/hero.jpg"
                    alt="Contact"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">CONTACT US</h1>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        {/* Header with yarn ball icon */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-8 h-8">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="50" cy="50" r="40" fill="#FF69B4" />
                                    <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="white" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-light text-blue-600">Get in touch to schedule an appointment</h2>
                        </div>

                        {/* Main Contact Info */}
                        <div className="space-y-3 mb-12">
                            <a
                                href="mailto:knit@knitster-ldn.com"
                                className="text-xl text-blue-600 hover:text-blue-700 transition-colors block"
                            >
                                knit@knitster-ldn.com
                            </a>
                            <div className="text-gray-700">
                                <p>Unit 5, Leyton Studios, 15 Argall Avenue</p>
                                <p>London, E10 7QE, United Kingdom</p>
                            </div>
                            <a
                                href="tel:+442089881768"
                                className="text-lg text-blue-600 hover:text-blue-700 transition-colors block"
                            >
                                +44 (0) 208 988 1768
                            </a>
                        </div>

                        {/* Individual Contact Cards */}
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Aysen's Card */}
                            <div className="bg-pink-50 py-16 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-light mb-4">Aysen Bayram</h3>
                                <p className="text-gray-600 mb-4">Co-Founder & Creative Director</p>
                                <a
                                    href="mailto:aysen@knitster-ldn.com"
                                    className="block text-blue-600 hover:text-blue-700 mb-2 transition-colors"
                                >
                                    aysen@knitster-ldn.com
                                </a>
                                <a
                                    href="tel:+447946534504"
                                    className="block text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    +44 (0) 7946 534 504
                                </a>
                            </div>

                            {/* Emma's Card */}
                            <div className="bg-pink-50 py-16 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-light mb-4">Emma McClelland</h3>
                                <p className="text-gray-600 mb-4">Co-Founder & Design Director</p>
                                <a
                                    href="mailto:emma@knitster-ldn.com"
                                    className="block text-blue-600 hover:text-blue-700 mb-2 transition-colors"
                                >
                                    emma@knitster-ldn.com
                                </a>
                                <a
                                    href="tel:+447888823403"
                                    className="block text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    +44 (0) 7888 823 403
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Us Section */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-12">VISIT OUR STUDIO</h2>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg font-light leading-relaxed mb-12">
                            We welcome visits to our London facility by appointment. See our production process firsthand,
                            meet our team, and discuss your knitwear requirements in person.
                        </p>

                        <div className="bg-white p-12 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-light mb-6 text-blue-600">Location</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Unit 5, Leyton Studios</strong><br />
                                15 Argall Avenue<br />
                                London, E10 7QE<br />
                                United Kingdom
                            </p>
                            <p className="text-gray-600 mb-6">
                                Easily accessible by public transport. We're located in East London,
                                just a short distance from Leyton station.
                            </p>
                            <a
                                href="https://maps.google.com/?q=Unit+5+Leyton+Studios+15+Argall+Avenue+London+E10+7QE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                            >
                                VIEW ON MAP
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Hours */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-12">WORKING HOURS</h2>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="space-y-4 text-center">
                                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                    <span className="text-gray-700 font-light">Monday - Friday</span>
                                    <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                    <span className="text-gray-700 font-light">Saturday</span>
                                    <span className="text-gray-900 font-medium">By Appointment Only</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-light">Sunday</span>
                                    <span className="text-gray-900 font-medium">Closed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 text-center mt-6">
                                Please email or call to schedule an appointment before visiting
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Follow Us</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-10">
                        Stay connected with Knitster LDN on social media for updates on our latest projects,
                        behind-the-scenes content, and industry insights.
                    </p>
                    <div className="flex justify-center space-x-8">
                        <a
                            href="https://www.facebook.com/KnitsterLDN/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-200 transition-colors"
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/knitster_ldn/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-200 transition-colors"
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/knitster_online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-200 transition-colors"
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;