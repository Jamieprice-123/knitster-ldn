import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';

const DesignAndDevelopment = () => {
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
                    alt="Design & Development"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-6xl font-light text-white text-center px-4">DESIGN & DEVELOPMENT</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-light mb-12">COMPREHENSIVE DESIGN SERVICES</h2>
                        <div className="text-lg font-light leading-relaxed">
                            <p className="mb-6">
                                From initial concept to final sample, our design and development team works closely
                                with designers to translate creative vision into technically viable, beautifully crafted knitwear.
                            </p>
                            <p className="mb-6">
                                We offer full-service design consultation, sampling, prototyping, and technical development,
                                ensuring every piece meets both aesthetic and production requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Services */}
            <section className="py-24 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">OUR SERVICES</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-blue-600">DESIGN CONSULTATION</h3>
                            <p className="text-gray-700 mb-6">
                                Our experienced team works closely with designers to translate creative vision into technically viable knitwear.
                                We offer expertise in yarn selection, stitch development, and garment construction.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Concept development and feasibility assessment</li>
                                <li>• Technical advice and material recommendations</li>
                                <li>• Cost analysis and production planning</li>
                                <li>• Trend forecasting and market insights</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-blue-600">SAMPLING & PROTOTYPING</h3>
                            <p className="text-gray-700 mb-6">
                                We develop comprehensive swatches and prototypes that showcase our technical capabilities
                                and allow designers to refine their designs before production.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Stitch and texture development</li>
                                <li>• Color work and pattern creation</li>
                                <li>• Size grading and fit assessment</li>
                                <li>• Multiple prototype iterations</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-blue-600">TECHNICAL DEVELOPMENT</h3>
                            <p className="text-gray-700 mb-6">
                                Complete technical development services from initial sketches through to production-ready
                                specifications, ensuring every detail is perfected.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Tech pack creation and specification sheets</li>
                                <li>• Digital knit programming</li>
                                <li>• Material sourcing and trim selection</li>
                                <li>• Quality control standards development</li>
                            </ul>
                        </div>

                        <div className="bg-white p-12 shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-light mb-4 text-blue-600">FULL PRODUCTION MANAGEMENT</h3>
                            <p className="text-gray-700 mb-6">
                                End-to-end project management from sample approval through to final delivery,
                                with transparent communication at every stage.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Production timeline planning</li>
                                <li>• Quality assurance throughout manufacturing</li>
                                <li>• Progress updates and milestone reporting</li>
                                <li>• Final inspection and delivery coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-light mb-8">OUR PORTFOLIO</h2>
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
                                            ? 'bg-blue-600 text-white'
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

            {/* Development Process */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-light text-center mb-16">OUR DEVELOPMENT PROCESS</h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-blue-600">Initial Consultation</h3>
                                    <p className="text-gray-700">
                                        Meet with directors Aysen Bayram and Emma McClelland to discuss your vision, timeline, and budget.
                                        We'll assess feasibility and provide initial guidance on materials and construction methods.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-blue-600">Concept Development</h3>
                                    <p className="text-gray-700">
                                        Our product development team creates initial tech packs, sources yarns and materials,
                                        and develops a comprehensive sampling strategy aligned with your creative vision.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-blue-600">Sampling & Iteration</h3>
                                    <p className="text-gray-700">
                                        Our programmer creates digital knit programs and produces initial samples. We work through
                                        multiple iterations, refining fit, drape, and details until the design is perfected.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-blue-600">Production Approval</h3>
                                    <p className="text-gray-700">
                                        Final sample approval, production timeline confirmation, and detailed quality control
                                        standards documentation ensure a smooth transition from development to manufacturing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-light mr-6">
                                    5
                                </div>
                                <div>
                                    <h3 className="text-xl font-light mb-2 text-blue-600">Manufacturing & Delivery</h3>
                                    <p className="text-gray-700">
                                        Full production begins with ongoing quality control, progress updates, and final inspection
                                        before delivery. We maintain close communication throughout the entire process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-light mb-6">Ready to Develop Your Collection?</h2>
                    <p className="text-xl font-light max-w-2xl mx-auto mb-10">
                        Contact us to discuss your design needs and discover how our experienced team
                        can bring your knitwear vision to life.
                    </p>
                    <a
                        href="mailto:knit@knitster-ldn.com"
                        className="inline-block px-8 py-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300"
                    >
                        START YOUR PROJECT
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default DesignAndDevelopment;