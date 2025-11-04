import React, { useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Design & Development', path: '/design-development', color: 'text-primary-red' },
    { name: 'Portfolio', path: '/portfolio', color: 'text-primary-dark-red' },
    { name: 'Made In London', path: '/made-in-london', color: 'text-primary-red' },
    { name: 'Overseas Production', path: '/overseas-production', color: 'text-primary-dark-red' },
    { name: 'Knit Store', path: '/knit-store', color: 'text-primary-red' },
    { name: 'Our Values', path: '/our-values', color: 'text-primary-dark-red' },
    { name: 'Contact', path: '/contact', color: 'text-primary-red' }
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

  return (
      <div className="min-h-screen bg-pink-50">
        <CustomCursor />

        {/* Header */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo - aligned to the left */}
              <div className="flex-shrink-0">
                <Link to="/">
                  <img src="/images/logo.png" alt="Knitster LDN" className="h-16" />
                </Link>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`font-poppins font-semibold text-h3 transition-colors ${
                            location.pathname === item.path
                                ? item.color
                                : scrolled
                                    ? 'text-gray-800 hover:' + item.color
                                    : 'text-white hover:text-pink-200'
                        }`}
                    >
                      {item.name}
                    </Link>
                ))}
              </nav>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Link
                    to="/contact"
                    className={`font-poppins font-semibold text-h3 ${
                        scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="lg:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                  <Link
                      key={item.path}
                      to={item.path}
                      className={`block font-poppins font-semibold text-h3 py-2 ${
                          location.pathname === item.path
                              ? item.color
                              : scrolled
                                  ? 'text-gray-800'
                                  : 'text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>
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
