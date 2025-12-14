import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-cool-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Sustainable Yarns & Practices */}
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-h3 mb-4 text-primary-dark-red">
              SUSTAINABLE YARNS & PRACTICES
            </h4>
            <a
              href="https://www.greatbritishwoolrevival.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-normal text-sub text-gray-600 hover:text-primary-red transition-colors"
            >
              Proud to be part of the British wool revival
            </a>
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
            <div className="flex flex-col space-y-2">
              <Link
                to="/modern-slavery"
                className="font-poppins font-normal text-sub text-gray-600 hover:text-primary-red transition-colors"
              >
                Read our Modern Slavery Statement
              </Link>
              <Link
                to="/environmental-policy"
                className="font-poppins font-normal text-sub text-gray-600 hover:text-primary-red transition-colors"
              >
                Read our Environmental Policy
              </Link>
            </div>
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
