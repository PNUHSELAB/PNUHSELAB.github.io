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
              <img src={logo} alt="HSE Lab Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Human &amp; Safety Engineering Lab, Pusan National University. Research in ergonomics, biomechanics, and industrial safety engineering.
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
                  HSE Lab, Room 513, Engineering Building #10 <br/>
                  2, Busan Daehak-ro 63beon-gil, Geumjeong-gu <br/>
                  Busan 46241, Republic of Korea
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">010-4068-1364</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">sangeunjin@pusan.ac.kr</span>
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
                { name: 'About Us', path: '/about' },
                { name: 'Research', path: '/research' },
                { name: 'Professor', path: '/professor' },
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
            &copy; {new Date().getFullYear()} Human &amp; Safety Engineering Lab, Pusan National University.
          </p>
          <div className="text-sm text-gray-500 flex gap-4">
            <a href="https://his.pusan.ac.kr/hse/13265/subview.do" className="hover:text-white transition-colors">Location</a>
            <a href="https://his.pusan.ac.kr/hse/index..do" className="hover:text-white transition-colors">Official Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
