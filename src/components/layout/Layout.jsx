import React, { useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Design & Development', path: '/design-development' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Made In London', path: '/made-in-london' },
    { name: 'Overseas Production', path: '/overseas-production' },
    { name: 'Our Values', path: '/our-values' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-pink-50">
      <CustomCursor />

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/images/logo.png" alt="Knitster LDN" className="h-12 md:h-16" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-poppins font-semibold text-sm xl:text-base transition-colors whitespace-nowrap ${
                    index !== navItems.length - 1 ? 'mr-4 xl:mr-6' : ''
                  } ${
                    location.pathname === item.path
                      ? 'text-primary-red'
                      : scrolled
                        ? 'text-gray-800 hover:text-primary-red'
                        : 'text-white hover:text-pink-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button (Burger) */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'bg-gray-800 rotate-45 translate-y-1.5' 
                  : scrolled ? 'bg-gray-800' : 'bg-white'
              }`}></span>
              <span className={`block w-6 h-0.5 my-1 transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'opacity-0' 
                  : scrolled ? 'bg-gray-800' : 'bg-white'
              }`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'bg-gray-800 -rotate-45 -translate-y-1.5' 
                  : scrolled ? 'bg-gray-800' : 'bg-white'
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ top: '0', zIndex: 40 }}>
          <div className="pt-24 px-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-poppins font-semibold text-xl py-3 border-b border-gray-100 ${
                    location.pathname === item.path
                      ? 'text-primary-red'
                      : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
