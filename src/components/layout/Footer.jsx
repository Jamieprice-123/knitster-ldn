import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="bg-background-cool-blue py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Manufacturing */}
            <div className="text-center">
              <h4 className="font-poppins font-semibold text-h3 mb-4 text-primary-dark-red">
                SUSTAINABLE YARNS
              </h4>
              <p className="font-poppins font-normal text-sub text-gray-600">
                Natural, recycled and recyclable
              </p>
            </div>

            {/* Production */}
            <div className="text-center">
              <h4 className="font-poppins font-semibold text-h3 mb-4 text-primary-dark-red">
                MADE IN ENGLAND
              </h4>
              <p className="font-poppins font-normal text-sub text-gray-600">
                We ship globally from our UK based factory
              </p>
            </div>

            {/* Ethics */}
            <div className="text-center">
              <h4 className="font-poppins font-semibold text-h3 mb-4 text-primary-dark-red">
                ETHICAL PRODUCTION
              </h4>
              <p className="font-poppins font-normal text-sub text-gray-600">
                Read our Modern Slavery statement
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
                href="https://www.facebook.com/KnitsterLDN/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark-red hover:text-primary-red transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
                href="https://www.instagram.com/knitster_ldn/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark-red hover:text-primary-red transition-colors"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
                href="https://twitter.com/knitster_online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark-red hover:text-primary-red transition-colors"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center font-poppins font-normal text-sub text-gray-600">
            <p>&copy; {new Date().getFullYear()} Knitster LDN. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;