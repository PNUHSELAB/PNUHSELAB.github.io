import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 w-fit">
              <img src={logo} alt="HSE Lab Logo" className="h-16 w-auto object-contain mix-blend-multiply" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Human & Safety Engineering Lab is committed to ensuring optimal human performance, health, and safety through innovative engineering research.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-hse-green rounded-full"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-hse-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Department of Industrial Engineering <br/>
                  Engineering Building, Room 123 <br/>
                  Seoul, Republic of Korea
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">+82-2-123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">contact@hselab.ac.kr</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-hse-green rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Research', path: '/research' },
                { name: 'Members', path: '/people' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:underline transition-all text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Human & Safety Engineering Lab. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
