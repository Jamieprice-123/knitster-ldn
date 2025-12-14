import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.company}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:knit@knitster-ldn.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/hero.jpg"
                    alt="Contact"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for navbar contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 leading-[60pt] tracking-[-0.02em] text-white text-center px-4">
                        CONTACT US
                    </h1>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="w-8 h-8">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <circle cx="50" cy="50" r="40" fill="#fc1048" />
                                        <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="white" />
                                    </svg>
                                </div>
                                <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-primary-dark-red">
                                    Get in touch to schedule an appointment
                                </h2>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-background-cool-blue p-12 rounded-lg mb-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-poppins font-semibold text-h3 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary-red font-poppins font-normal text-body"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-poppins font-semibold text-h3 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary-red font-poppins font-normal text-body"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-poppins font-semibold text-h3 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary-red font-poppins font-normal text-body"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-poppins font-semibold text-h3 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary-red font-poppins font-normal text-body"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-poppins font-semibold text-h3 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary-red font-poppins font-normal text-body"
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-primary-red text-white hover:bg-primary-dark-red transition-colors duration-300 font-poppins font-semibold text-h3"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Main Contact Info */}
                        <div className="text-center space-y-3 mb-12">
                            <a
                                href="mailto:knit@knitster-ldn.com"
                                className="block font-poppins font-normal text-body text-primary-red hover:text-primary-dark-red transition-colors"
                            >
                                knit@knitster-ldn.com
                            </a>
                            <div className="font-poppins font-normal text-body text-gray-700">
                                <p>Unit 5, Leyton Studios, 15 Argall Avenue</p>
                                <p>London, E10 7QE, United Kingdom</p>
                            </div>
                            <a
                                href="tel:+447449631180"
                                className="block font-poppins font-normal text-body text-primary-red hover:text-primary-dark-red transition-colors"
                            >
                                +44 7449 631180
                            </a>
                        </div>

                        {/* Individual Contact Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Aysen's Card */}
                            <div className="bg-accent-powder-green py-16 px-8 rounded-lg shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4">Aysen Bayram</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600 mb-4">Co-Founder & Creative Director</p>
                                <a
                                    href="mailto:aysen@knitster-ldn.com"
                                    className="block font-poppins font-normal text-sub text-primary-red hover:text-primary-dark-red mb-2 transition-colors"
                                >
                                    aysen@knitster-ldn.com
                                </a>
                                <a
                                    href="tel:+447946534504"
                                    className="block font-poppins font-normal text-sub text-primary-red hover:text-primary-dark-red transition-colors"
                                >
                                    +44 (0) 7946 534 504
                                </a>
                            </div>

                            {/* Emma's Card */}
                            <div className="bg-accent-powder-green py-16 px-8 rounded-lg shadow-sm">
                                <h3 className="font-poppins font-semibold text-h3 mb-4">Emma McClelland</h3>
                                <p className="font-poppins font-normal text-sub text-gray-600 mb-4">Co-Founder & Design Director</p>
                                <a
                                    href="mailto:emma@knitster-ldn.com"
                                    className="block font-poppins font-normal text-sub text-primary-red hover:text-primary-dark-red mb-2 transition-colors"
                                >
                                    emma@knitster-ldn.com
                                </a>
                                <a
                                    href="tel:+447888823403"
                                    className="block font-poppins font-normal text-sub text-primary-red hover:text-primary-dark-red transition-colors"
                                >
                                    +44 (0) 7888 823 403
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Us Section */}
            <section className="py-24 bg-background-cool-blue">
                <div className="container mx-auto px-4">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-12 text-primary-dark-red">
                        VISIT OUR STUDIO
                    </h2>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] mb-12">
                            We welcome visits to our London facility by appointment. See our production process firsthand,
                            meet our team, and discuss your knitwear requirements in person.
                        </p>

                        <div className="bg-white p-12 rounded-lg shadow-sm">
                            <h3 className="font-poppins font-semibold text-h3 mb-6 text-primary-red">Location</h3>
                            <p className="font-poppins font-normal text-body text-gray-700 mb-4">
                                <strong>Unit 5, Leyton Studios</strong><br />
                                15 Argall Avenue<br />
                                London, E10 7QE<br />
                                United Kingdom
                            </p>
                            <p className="font-poppins font-normal text-sub text-gray-600 mb-6">
                                Easily accessible by public transport. We're located in East London,
                                just a short distance from Leyton station.
                            </p>
                            <a
                                href="https://maps.google.com/?q=Unit+5+Leyton+Studios+15+Argall+Avenue+London+E10+7QE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-primary-red text-white hover:bg-primary-dark-red transition-colors duration-300 font-poppins font-semibold text-h3"
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
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] text-center mb-12 text-primary-dark-red">
                        WORKING HOURS
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-accent-powder-green p-8 rounded-lg">
                            <div className="space-y-4 text-center">
                                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                    <span className="font-poppins font-normal text-body text-gray-700">Monday - Friday</span>
                                    <span className="font-poppins font-semibold text-body text-gray-900">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                    <span className="font-poppins font-normal text-body text-gray-700">Saturday</span>
                                    <span className="font-poppins font-semibold text-body text-gray-900">By Appointment Only</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-poppins font-normal text-body text-gray-700">Sunday</span>
                                    <span className="font-poppins font-semibold text-body text-gray-900">Closed</span>
                                </div>
                            </div>
                            <p className="font-poppins font-normal text-sub text-gray-600 text-center mt-6">
                                Please email or call to schedule an appointment before visiting
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;
