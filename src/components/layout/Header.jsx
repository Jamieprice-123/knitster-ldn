import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ scrolled, setIsMenuOpen }) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-50 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="/images/logo.png" alt="Knitster LDN" className="h-12" />
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-6">
          <a href="https://www.shopify.com/uk" target="_blank" rel="noopener noreferrer">
            <ShoppingBag className={`h-6 w-6 cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          </a>
          <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;