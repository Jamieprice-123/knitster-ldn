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
            category: 'luxury',
            image: '/images/portfolio-1.jpg',
            description: 'Premium knitwear production for Burberry\'s Autumn/Winter 2024 collection, featuring sophisticated British craftsmanship and innovative design techniques.',
            client: 'Burberry',
            year: '2024',
            featured: true
        },
        {
            id: 2,
            title: 'Bottega Veneta SS24',
            category: 'luxury',
            image: '/images/portfolio-2.jpg',
            description: 'Luxury knitwear pieces for Bottega Veneta\'s Spring/Summer 2024 collection, showcasing exceptional attention to detail and premium materials.',
            client: 'Bottega Veneta',
            year: '2024',
            featured: true
        },
        {
            id: 3,
            title: 'Christian Dior FW24',
            category: 'luxury',
            image: '/images/portfolio-3.jpg',
            description: 'High-fashion knitwear development for Christian Dior\'s Fall/Winter 2024 collection, combining traditional techniques with modern innovation.',
            client: 'Christian Dior',
            year: '2024',
            featured: true
        },
        {
            id: 4,
            title: 'JW Anderson AW23',
            category: 'fashion-week',
            image: '/images/portfolio-4.jpg',
            description: 'Creative knitwear collaboration with JW Anderson for Autumn/Winter 2023, featuring bold silhouettes and innovative construction techniques.',
            client: 'JW Anderson',
            year: '2023',
            featured: true
        },
        {
            id: 5,
            title: 'Molly Goddard SS23',
            category: 'fashion-week',
            image: '/images/portfolio-5.jpg',
            description: 'Distinctive knitwear pieces for Molly Goddard\'s Spring/Summer 2023 collection, showcasing playful textures and vibrant colors.',
            client: 'Molly Goddard',
            year: '2023',
            featured: false
        },
        {
            id: 6,
            title: 'Stefan Cooke AW23',
            category: 'fashion-week',
            image: '/images/portfolio-6.jpg',
            description: 'Technical knitwear development for Stefan Cooke\'s Autumn/Winter 2023 collection, pushing the boundaries of traditional knitting techniques.',
            client: 'Stefan Cooke',
            year: '2023',
            featured: true
        }
    ];

    const categories = [
        { id: 'all', name: 'ALL PROJECTS' },
        { id: 'featured', name: 'FEATURED' },
        { id: 'luxury', name: 'LUXURY FASHION' },
        { id: 'fashion-week', name: 'FASHION WEEK' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProjects(projects);
        } else if (selectedCategory === 'featured') {
            setFilteredProjects(projects.filter(project => project.featured));
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src="/images/bespoke-knitwear.jpg"
                    alt="Portfolio"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">PORTFOLIO</h1>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-light mb-8">OUR WORK</h2>
                        <p className="text-lg font-light leading-relaxed mb-12">
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
                                    className={`px-6 py-3 transition-colors ${
                                        selectedCategory === category.id
                                            ? 'bg-[#90172a] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-white shadow-sm overflow-hidden group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-light mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm">{project.client} • {project.year}</p>
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
                            <h2 className="text-3xl font-light mb-4">{selectedProject.title}</h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-6">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">CLIENT</h4>
                                    <p className="text-lg">{selectedProject.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">YEAR</h4>
                                    <p className="text-lg">{selectedProject.year}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">CATEGORY</h4>
                                    <p className="text-lg capitalize">{selectedProject.category.replace('-', ' ')}</p>
                                </div>
                            </div>
                            <div className="prose max-w-none">
                                <p className="text-lg font-light leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="py-20 bg-[#90172a] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Interested in Working Together?</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-10">
                        Contact us to discuss your knitwear requirements and discover how we can bring
                        your designs to life with exceptional quality and craftsmanship.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default Portfolio;