import React from 'react';
import { X } from 'lucide-react';

const Menu = ({ isMenuOpen, setIsMenuOpen, menuItems, handleNavigation }) => {
  return (
    <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
      isMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="focus:outline-none">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-16">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavigation(item.href)}
              className="block text-3xl font-light py-4 hover:text-gray-600 transition-colors w-full text-left"
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Menu;