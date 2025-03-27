import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';

const WhatWeHaveDone = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Portfolio project data - normally this would come from an API or CMS
  const projects = [
    {
      id: 1,
      title: 'Ahluwalia AW20',
      category: 'fashion-week',
      image: '/images/portfolio-1.jpg',
      description: 'A collaboration with designer Priya Ahluwalia for her Autumn/Winter 2020 collection, featuring sustainable knitwear pieces with bold patterns.',
      client: 'Priya Ahluwalia',
      year: '2020',
      featured: true
    },
    {
      id: 2,
      title: 'Nicomede SS20',
      category: 'fashion-week',
      image: '/images/portfolio-2.jpg',
      description: 'Distinctive knitwear pieces for Nicomede Talavera\'s Spring/Summer 2020 collection, showcasing innovative stitch techniques and vibrant colors.',
      client: 'Nicomede Talavera',
      year: '2020',
      featured: true
    },
    {
      id: 3,
      title: 'Stefan Cooke SS20',
      category: 'fashion-week',
      image: '/images/portfolio-3.jpg',
      description: 'Technical knitwear development for Stefan Cooke\'s Spring/Summer 2020 collection, pushing the boundaries of traditional knitting techniques.',
      client: 'Stefan Cooke',
      year: '2020',
      featured: true
    },
    {
      id: 4,
      title: 'ioannes.eu SS20',
      category: 'ready-to-wear',
      image: '/images/portfolio-4.jpg',
      description: 'Sophisticated knitwear pieces for ioannes.eu\'s Spring/Summer 2020 collection, featuring elegant silhouettes and premium yarns.',
      client: 'ioannes.eu',
      year: '2020',
      featured: false
    },
    {
      id: 5,
      title: 'ioannes.eu AW19',
      category: 'ready-to-wear',
      image: '/images/portfolio-5.jpg',
      description: 'Luxury knitwear production for ioannes.eu\'s Autumn/Winter 2019 collection, combining modern design with traditional craftsmanship.',
      client: 'ioannes.eu',
      year: '2019',
      featured: false
    },
    {
      id: 6,
      title: 'AGR AW19',
      category: 'ready-to-wear',
      image: '/images/portfolio-6.jpg',
      description: 'Experimental knitwear for AGR\'s Autumn/Winter 2019 collection, featuring bold textures and innovative yarn combinations.',
      client: 'AGR',
      year: '2019',
      featured: true
    },
    {
      id: 7,
      title: 'Hayley Menzies SS19',
      category: 'ready-to-wear',
      image: '/images/portfolio-7.jpg',
      description: 'Distinctive knitwear pieces for Hayley Menzies\' Spring/Summer 2019 collection, showcasing vibrant patterns and premium materials.',
      client: 'Hayley Menzies',
      year: '2019',
      featured: false
    },
    {
      id: 8,
      title: 'T/SEHNE AW18',
      category: 'conceptual',
      image: '/images/portfolio-8.jpg',
      description: 'Minimalist knitwear development for T/SEHNE\'s Autumn/Winter 2018 collection, focusing on structure and form.',
      client: 'T/SEHNE',
      year: '2018',
      featured: false
    },
    {
      id: 9,
      title: 'FANCLUB FW17',
      category: 'conceptual',
      image: '/images/portfolio-9.jpg',
      description: 'Vibrant knitwear collection for FANCLUB\'s Fall/Winter 2017 range, featuring playful motifs and premium construction techniques.',
      client: 'FANCLUB',
      year: '2017',
      featured: true
    },
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else if (selectedCategory === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'ALL PROJECTS' },
    { id: 'featured', name: 'FEATURED' },
    { id: 'fashion-week', name: 'FASHION WEEK' },
    { id: 'ready-to-wear', name: 'READY-TO-WEAR' },
    { id: 'conceptual', name: 'CONCEPTUAL' }
  ];

  // Project modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
              src="/images/portfolio-hero.jpg"
              alt="Portfolio"
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-6xl font-light text-white text-center px-4">WHAT WE HAVE DONE</h1>
          </div>
        </section>

        {/* Portfolio Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-8">OUR PORTFOLIO</h2>
              <p className="text-lg font-light leading-relaxed mb-12">
                Over the years, we've had the privilege of collaborating with a diverse range of designers and brands,
                from established fashion houses to emerging talents. Each project reflects our commitment to
                quality, innovation, and sustainable practices in knitwear production.
              </p>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-6 mb-16">
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
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {isLoading ? (
                <div className="flex justify-center items-center h-96">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500"></div>
                </div>
            ) : (
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
            )}
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

        {/* Clients & Collaborations */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">CLIENTS & COLLABORATIONS</h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-center mb-16">
                We're proud to have worked with some of the most innovative and forward-thinking designers and brands in the fashion industry.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">Ahluwalia</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">Nicomede</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">Stefan Cooke</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">ioannes.eu</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">AGR</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">Hayley Menzies</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">T/SEHNE</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-light text-blue-600">FANCLUB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">WHAT DESIGNERS SAY</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 shadow-sm">
                <div className="flex justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 17.3333C11.9107 17.3333 14 19.4227 14 22C14 24.5773 11.9107 26.6667 9.33333 26.6667C6.756 26.6667 4.66667 24.5773 4.66667 22C4.66667 19.4227 6.756 17.3333 9.33333 17.3333ZM9.33333 20C8.22667 20 7.33333 20.8933 7.33333 22C7.33333 23.1067 8.22667 24 9.33333 24C10.44 24 11.3333 23.1067 11.3333 22C11.3333 20.8933 10.44 20 9.33333 20ZM22.6667 17.3333C25.244 17.3333 27.3333 19.4227 27.3333 22C27.3333 24.5773 25.244 26.6667 22.6667 26.6667C20.0893 26.6667 18 24.5773 18 22C18 19.4227 20.0893 17.3333 22.6667 17.3333ZM22.6667 20C21.56 20 20.6667 20.8933 20.6667 22C20.6667 23.1067 21.56 24 22.6667 24C23.7733 24 24.6667 23.1067 24.6667 22C24.6667 20.8933 23.7733 20 22.6667 20ZM9.33333 5.33333C11.9107 5.33333 14 7.42267 14 10C14 12.5773 11.9107 14.6667 9.33333 14.6667C6.756 14.6667 4.66667 12.5773 4.66667 10C4.66667 7.42267 6.756 5.33333 9.33333 5.33333ZM9.33333 8C8.22667 8 7.33333 8.89333 7.33333 10C7.33333 11.1067 8.22667 12 9.33333 12C10.44 12 11.3333 11.1067 11.3333 10C11.3333 8.89333 10.44 8 9.33333 8ZM22.6667 5.33333C25.244 5.33333 27.3333 7.42267 27.3333 10C27.3333 12.5773 25.244 14.6667 22.6667 14.6667C20.0893 14.6667 18 12.5773 18 10C18 7.42267 20.0893 5.33333 22.6667 5.33333ZM22.6667 8C21.56 8 20.6667 8.89333 20.6667 10C20.6667 11.1067 21.56 12 22.6667 12C23.7733 12 24.6667 11.1067 24.6667 10C24.6667 8.89333 23.7733 8 22.6667 8Z" fill="#FF69B4"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-center italic">
                  "Knitster LDN has been instrumental in bringing my knitwear designs to life. Their technical expertise and attention to detail are unmatched."
                </p>
                <p className="text-center font-medium">Priya Ahluwalia</p>
                <p className="text-center text-sm text-gray-500">Designer, Ahluwalia</p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <div className="flex justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 17.3333C11.9107 17.3333 14 19.4227 14 22C14 24.5773 11.9107 26.6667 9.33333 26.6667C6.756 26.6667 4.66667 24.5773 4.66667 22C4.66667 19.4227 6.756 17.3333 9.33333 17.3333ZM9.33333 20C8.22667 20 7.33333 20.8933 7.33333 22C7.33333 23.1067 8.22667 24 9.33333 24C10.44 24 11.3333 23.1067 11.3333 22C11.3333 20.8933 10.44 20 9.33333 20ZM22.6667 17.3333C25.244 17.3333 27.3333 19.4227 27.3333 22C27.3333 24.5773 25.244 26.6667 22.6667 26.6667C20.0893 26.6667 18 24.5773 18 22C18 19.4227 20.0893 17.3333 22.6667 17.3333ZM22.6667 20C21.56 20 20.6667 20.8933 20.6667 22C20.6667 23.1067 21.56 24 22.6667 24C23.7733 24 24.6667 23.1067 24.6667 22C24.6667 20.8933 23.7733 20 22.6667 20ZM9.33333 5.33333C11.9107 5.33333 14 7.42267 14 10C14 12.5773 11.9107 14.6667 9.33333 14.6667C6.756 14.6667 4.66667 12.5773 4.66667 10C4.66667 7.42267 6.756 5.33333 9.33333 5.33333ZM9.33333 8C8.22667 8 7.33333 8.89333 7.33333 10C7.33333 11.1067 8.22667 12 9.33333 12C10.44 12 11.3333 11.1067 11.3333 10C11.3333 8.89333 10.44 8 9.33333 8ZM22.6667 5.33333C25.244 5.33333 27.3333 7.42267 27.3333 10C27.3333 12.5773 25.244 14.6667 22.6667 14.6667C20.0893 14.6667 18 12.5773 18 10C18 7.42267 20.0893 5.33333 22.6667 5.33333ZM22.6667 8C21.56 8 20.6667 8.89333 20.6667 10C20.6667 11.1067 21.56 12 22.6667 12C23.7733 12 24.6667 11.1067 24.6667 10C24.6667 8.89333 23.7733 8 22.6667 8Z" fill="#FF69B4"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-center italic">
                  "I've worked with many knitwear producers, but Knitster LDN's commitment to sustainable practices and quality craftsmanship is truly exceptional."
                </p>
                <p className="text-center font-medium">Stefan Cooke</p>
                <p className="text-center text-sm text-gray-500">Designer, Stefan Cooke</p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <div className="flex justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 17.3333C11.9107 17.3333 14 19.4227 14 22C14 24.5773 11.9107 26.6667 9.33333 26.6667C6.756 26.6667 4.66667 24.5773 4.66667 22C4.66667 19.4227 6.756 17.3333 9.33333 17.3333ZM9.33333 20C8.22667 20 7.33333 20.8933 7.33333 22C7.33333 23.1067 8.22667 24 9.33333 24C10.44 24 11.3333 23.1067 11.3333 22C11.3333 20.8933 10.44 20 9.33333 20ZM22.6667 17.3333C25.244 17.3333 27.3333 19.4227 27.3333 22C27.3333 24.5773 25.244 26.6667 22.6667 26.6667C20.0893 26.6667 18 24.5773 18 22C18 19.4227 20.0893 17.3333 22.6667 17.3333ZM22.6667 20C21.56 20 20.6667 20.8933 20.6667 22C20.6667 23.1067 21.56 24 22.6667 24C23.7733 24 24.6667 23.1067 24.6667 22C24.6667 20.8933 23.7733 20 22.6667 20ZM9.33333 5.33333C11.9107 5.33333 14 7.42267 14 10C14 12.5773 11.9107 14.6667 9.33333 14.6667C6.756 14.6667 4.66667 12.5773 4.66667 10C4.66667 7.42267 6.756 5.33333 9.33333 5.33333ZM9.33333 8C8.22667 8 7.33333 8.89333 7.33333 10C7.33333 11.1067 8.22667 12 9.33333 12C10.44 12 11.3333 11.1067 11.3333 10C11.3333 8.89333 10.44 8 9.33333 8ZM22.6667 5.33333C25.244 5.33333 27.3333 7.42267 27.3333 10C27.3333 12.5773 25.244 14.6667 22.6667 14.6667C20.0893 14.6667 18 12.5773 18 10C18 7.42267 20.0893 5.33333 22.6667 5.33333ZM22.6667 8C21.56 8 20.6667 8.89333 20.6667 10C20.6667 11.1067 21.56 12 22.6667 12C23.7733 12 24.6667 11.1067 24.6667 10C24.6667 8.89333 23.7733 8 22.6667 8Z" fill="#FF69B4"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-center italic">
                  "The team at Knitster LDN brings a perfect blend of technical knowledge and creative ingenuity to every project. They've been essential collaborators for our collections."
                </p>
                <p className="text-center font-medium">Emma McClelland</p>
                <p className="text-center text-sm text-gray-500">Designer, Hayley Menzies</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default WhatWeHaveDone;