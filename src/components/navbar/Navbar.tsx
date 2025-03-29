
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/config/navItems';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ConsultationDialog from './ConsultationDialog';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHashLink = href.includes('#');
    
    if (isHashLink) {
      const [path, hash] = href.split('#');
      const currentPath = location.pathname;
      
      if (currentPath === path || (path === '' && hash)) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-smmart-blue font-playfair">
            <span className="text-smmart-blue">Smmart</span>
            <span className="text-smmart-gold">.</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <DesktopNav 
            navItems={navItems} 
            handleSectionNavigation={handleSectionNavigation} 
          />
          
          <ConsultationDialog 
            open={consultationOpen} 
            onOpenChange={setConsultationOpen}
          />
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-smmart-blue p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <MobileNav
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        handleSectionNavigation={handleSectionNavigation}
        setIsMenuOpen={setIsMenuOpen}
        setConsultationOpen={setConsultationOpen}
      />
    </nav>
  );
};

export default Navbar;
