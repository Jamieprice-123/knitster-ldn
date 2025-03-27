import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const portfolioItems = [
    { image: '/images/portfolio-1.jpg', title: 'Ahluwalia AW20' },
    { image: '/images/portfolio-2.jpg', title: 'Nicomede SS20' },
    { image: '/images/portfolio-3.jpg', title: 'Stefan Cooke SS20' },
    { image: '/images/portfolio-4.jpg', title: 'ioannes.eu SS20' },
    { image: '/images/portfolio-5.jpg', title: 'ioannes.eu AW19' },
    { image: '/images/portfolio-6.jpg', title: 'AGR AW19' },
    { image: '/images/portfolio-7.jpg', title: 'Hayley Menzies SS19' },
    { image: '/images/portfolio-8.jpg', title: 'T/SEHNE AW18' },
    { image: '/images/portfolio-9.jpg', title: 'FANCLUB FW17' },
  ];

  // Updated menu items with the new routes
  const menuItems = [
    { title: 'WHAT WE DO', href: '/what-we-do' },
    { title: 'WHAT WE HAVE DONE', href: '/portfolio' },
    { title: 'WHO WE ARE', href: '/about' },
    { title: 'SUSTAINABILITY', href: '/sustainability' },
    { title: 'YARN TOOLS', href: '/yarn-tools' },
    { title: 'SHOP', href: 'https://www.shopify.com/uk' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [portfolioItems.length]);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
  };

  return (
      <div className="min-h-screen bg-pink-50">
        <CustomCursor />

        <Header scrolled={scrolled} setIsMenuOpen={setIsMenuOpen} />

        <Menu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            menuItems={menuItems}
            handleNavigation={handleNavigation}
        />

        <main>
          {children ? children : (
              <Home currentSlide={currentSlide} portfolioItems={portfolioItems} />
          )}
        </main>

        <Contact />
        <Footer />
      </div>
  );
};

export default Layout;