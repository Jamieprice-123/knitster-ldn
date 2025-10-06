import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Manufacturing */}
          <div className="text-center">
            <h4 className="font-light text-lg mb-4">SUSTAINABLE YARNS</h4>
            <p className="text-sm text-gray-600">Natural, recycled and recyclable</p>
          </div>

          {/* Production */}
          <div className="text-center">
            <h4 className="font-light text-lg mb-4">MADE IN ENGLAND</h4>
            <p className="text-sm text-gray-600">We ship globally from our UK based factory</p>
          </div>

          {/* Ethics */}
          <div className="text-center">
            <h4 className="font-light text-lg mb-4">ETHICAL PRODUCTION</h4>
            <p className="text-sm text-gray-600">Read our Modern Slavery statement</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://www.facebook.com/KnitsterLDN/" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-8 w-8 cursor-pointer hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://www.instagram.com/knitster_ldn/?hl=en" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-8 w-8 cursor-pointer hover:text-gray-600 transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Knitster LDN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;