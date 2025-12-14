import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Burberry AW24',
            category: 'press',
            image: '/images/portfolio-1.jpg',
            description: 'Premium knitwear production for Burberry\'s Autumn/Winter 2024 collection, featuring sophisticated British craftsmanship and innovative design techniques.',
            client: 'Burberry',
            year: '2024',
            featured: true
        },
        {
            id: 2,
            title: 'Bottega Veneta SS24',
            category: 'press',
            image: '/images/portfolio-2.jpg',
            description: 'Luxury knitwear pieces for Bottega Veneta\'s Spring/Summer 2024 collection, showcasing exceptional attention to detail and premium materials.',
            client: 'Bottega Veneta',
            year: '2024',
            featured: true
        },
        {
            id: 3,
            title: 'Christian Dior FW24',
            category: 'press',
            image: '/images/portfolio-3.jpg',
            description: 'High-fashion knitwear development for Christian Dior\'s Fall/Winter 2024 collection, combining traditional techniques with modern innovation.',
            client: 'Christian Dior',
            year: '2024',
            featured: true
        },
        {
            id: 4,
            title: 'JW Anderson AW23',
            category: 'press',
            image: '/images/portfolio-4.jpg',
            description: 'Creative knitwear collaboration with JW Anderson for Autumn/Winter 2023, featuring bold silhouettes and innovative construction techniques.',
            client: 'JW Anderson',
            year: '2023',
            featured: true
        },
        {
            id: 5,
            title: 'Molly Goddard SS23',
            category: 'press',
            image: '/images/portfolio-5.jpg',
            description: 'Distinctive knitwear pieces for Molly Goddard\'s Spring/Summer 2023 collection, showcasing playful textures and vibrant colors.',
            client: 'Molly Goddard',
            year: '2023',
            featured: false
        },
        {
            id: 6,
            title: 'Stefan Cooke AW23',
            category: 'press',
            image: '/images/portfolio-6.jpg',
            description: 'Technical knitwear development for Stefan Cooke\'s Autumn/Winter 2023 collection, pushing the boundaries of traditional knitting techniques.',
            client: 'Stefan Cooke',
            year: '2023',
            featured: true
        },
        {
            id: 7,
            title: 'Aperol Merchandise',
            category: 'merchandise',
            image: '/images/portfolio-7.jpg',
            description: 'Custom knitwear merchandise for Aperol brand, featuring bold colors and branded designs.',
            client: 'Aperol',
            year: '2024',
            featured: false
        },
        {
            id: 8,
            title: 'Netflix Merchandise',
            category: 'merchandise',
            image: '/images/portfolio-8.jpg',
            description: 'Branded knitwear collection for Netflix, combining comfort with contemporary style.',
            client: 'Netflix',
            year: '2024',
            featured: false
        },
        {
            id: 9,
            title: 'Manchester City FC',
            category: 'merchandise',
            image: '/images/portfolio-9.jpg',
            description: 'Premium knitwear merchandise for Manchester City FC, blending sportswear with luxury craftsmanship.',
            client: 'Manchester City FC',
            year: '2024',
            featured: false
        }
    ];

    const categories = [
        { id: 'all', name: 'ALL PROJECTS' },
        { id: 'press', name: 'PRESS' },
        { id: 'merchandise', name: 'MERCHANDISE' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/Portfolio.JPG"
                    alt="Portfolio"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay for navbar contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="font-poppins font-light text-h1 leading-[60pt] tracking-[-0.02em] text-white text-center px-4">
                        PORTFOLIO
                    </h1>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-8 text-primary-dark-red">
                            OUR WORK
                        </h2>
                        <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] mb-12">
                            We've had the privilege of collaborating with the world's most prestigious
                            fashion houses and emerging design talents. Each project reflects our commitment
                            to quality, innovation, and sustainable manufacturing practices.
                        </p>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 transition-colors font-poppins font-semibold text-h3 ${
                                        selectedCategory === category.id
                                            ? 'bg-primary-dark-red text-white'
                                            : 'bg-background-cool-blue text-gray-700 hover:bg-accent-powder-green'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio Grid - Vertical Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-white shadow-sm overflow-hidden group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden" style={{ paddingBottom: '150%' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-poppins font-semibold text-h3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-poppins font-semibold text-h3 mb-2">{project.title}</h3>
                                    <p className="font-poppins font-normal text-sub text-gray-600">{project.client} • {project.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
                    <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 z-10 flex justify-end p-4 bg-white">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="mb-6">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto"
                                />
                            </div>
                            <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-4">
                                {selectedProject.title}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-6">
                                <div>
                                    <h4 className="font-poppins font-semibold text-h3 text-gray-500 mb-1">CLIENT</h4>
                                    <p className="font-poppins font-normal text-body">{selectedProject.client}</p>
                                </div>
                                <div>
                                    <h4 className="font-poppins font-semibold text-h3 text-gray-500 mb-1">YEAR</h4>
                                    <p className="font-poppins font-normal text-body">{selectedProject.year}</p>
                                </div>
                                <div>
                                    <h4 className="font-poppins font-semibold text-h3 text-gray-500 mb-1">CATEGORY</h4>
                                    <p className="font-poppins font-normal text-body capitalize">{selectedProject.category.replace('-', ' ')}</p>
                                </div>
                            </div>
                            <div className="prose max-w-none">
                                <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em]">
                                    {selectedProject.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="py-20 bg-primary-dark-red text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-poppins font-light text-h2 leading-[32pt] tracking-[-0.02em] mb-6">
                        Interested in Working Together?
                    </h2>
                    <p className="font-poppins font-normal text-body leading-[13pt] tracking-[0.01em] max-w-2xl mx-auto mb-10">
                        Contact us to discuss your knitwear requirements and discover how we can bring
                        your designs to life with exceptional quality and craftsmanship.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-primary-red text-white hover:bg-pink-600 transition-colors duration-300 font-poppins font-semibold text-h3"
                    >
                        Email Us
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default Portfolio;
