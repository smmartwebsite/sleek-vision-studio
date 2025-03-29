
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-smmart-blue text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Smmart<span className="text-smmart-gold">.</span></h3>
            <p className="mb-4 text-sm leading-relaxed">
              Empowering businesses with innovative solutions and strategic consulting for sustainable growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-smmart-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-smmart-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-smmart-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-smmart-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-smmart-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-smmart-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-smmart-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-smmart-gold transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-smmart-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-smmart-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/business-strategy" className="hover:text-smmart-gold transition-colors">
                  Business Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/market-research" className="hover:text-smmart-gold transition-colors">
                  Market Research
                </Link>
              </li>
              <li>
                <Link to="/services/digital-transformation" className="hover:text-smmart-gold transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services/financial-advisory" className="hover:text-smmart-gold transition-colors">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link to="/services/operations-optimization" className="hover:text-smmart-gold transition-colors">
                  Operations Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-smmart-gold" />
                <span>123 Business Avenue, Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-smmart-gold" />
                <a href="tel:+911234567890" className="hover:text-smmart-gold transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-smmart-gold" />
                <a href="mailto:info@smmart.co.in" className="hover:text-smmart-gold transition-colors">
                  info@smmart.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Smmart Business Consulting. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-smmart-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-smmart-gold transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-smmart-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
