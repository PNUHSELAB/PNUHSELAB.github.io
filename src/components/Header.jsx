import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import pnuLogo from '../assets/signature04.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Professor', href: '/professor' },
    { name: 'People', href: '/people' },
    { name: 'Publication', href: '/publication' },
    { name: 'News', href: '/news' },
    { name: 'Photo', href: '/photo' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4 md:gap-8">
              <img src={pnuLogo} alt="PNU Logo" className="h-16 md:h-20 w-auto object-contain transition-all duration-300 mix-blend-multiply" />
              <div className="h-12 w-px bg-gray-300 hidden md:block"></div> {/* Divider */}
              <img src={logo} alt="HSE Lab Logo" className="h-32 md:h-44 lg:h-48 w-auto object-contain transition-all duration-300 mix-blend-multiply" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-hse-blue font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-hse-blue focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-hse-blue font-medium px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
