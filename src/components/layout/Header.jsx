import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ scrolled }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Our Values', path: '/our-values' },
    { name: 'In House Production', path: '/in-house-production' },
    { name: 'Yarn Store', path: '/yarn-store' },
    { name: 'Design & Development', path: '/design-development' },
    { name: 'Overseas Production', path: '/overseas-production' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
      <header className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-pink-50 shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link to="/our-values">
                <img src="/images/logo.png" alt="Knitster LDN" className="h-12" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item.path}
                      to={item.path}
                      className={`text-sm font-light transition-colors ${
                          location.pathname === item.path
                              ? 'text-blue-600 font-medium'
                              : scrolled
                                  ? 'text-gray-800 hover:text-blue-600'
                                  : 'text-white hover:text-pink-200'
                      }`}
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link
                  to="/contact"
                  className={`text-sm font-light ${
                      scrolled ? 'text-gray-800' : 'text-white'
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`block text-sm font-light py-2 ${
                        location.pathname === item.path
                            ? 'text-blue-600 font-medium'
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
  );
};

export default Header;