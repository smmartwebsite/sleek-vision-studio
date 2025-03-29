import { useState, useEffect } from 'react';
import * as React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
    submenu: [
      { title: 'Our Mission', href: '/about#mission' },
      { title: 'Our Values', href: '/about#values' },
      { title: 'Our History', href: '/about#history' },
      { title: 'Our Team', href: '/about#team' },
    ]
  },
  {
    title: 'Services',
    href: '/services',
    submenu: [
      { title: 'Strategy Consulting', href: '/services#strategy' },
      { title: 'Business Transformation', href: '/services#transformation' },
      { title: 'Digital Solutions', href: '/services#digital' },
      { title: 'Financial Advisory', href: '/services#financial' },
    ]
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
    submenu: [
      { title: 'Industry Sectors', href: '/case-studies#sectors' },
      { title: 'Success Stories', href: '/case-studies#success-stories' },
      { title: 'Client Testimonials', href: '/case-studies#testimonials' },
    ]
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

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
          <NavigationMenu className="mr-4">
            <NavigationMenuList>
              {navItems.map((item) => (
                item.submenu ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-smmart-blue hover:text-smmart-blue-light">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.submenu.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            title={subItem.title}
                            href={subItem.href}
                            onClick={(e) => handleSectionNavigation(e, subItem.href)}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <Link to={item.href} className={navigationMenuTriggerStyle() + " text-smmart-blue hover:text-smmart-blue-light"}>
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Dialog open={consultationOpen} onOpenChange={setConsultationOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="accent" 
                size="default" 
                leftIcon={<span className="inline-block w-1 h-1 rounded-full bg-current" />}
              >
                Get a Consultation
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request a Consultation</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-600 mb-4">
                  Please fill out this form and one of our consultants will get back to you within 24 hours.
                </p>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2" onClick={() => setConsultationOpen(false)}>
                    Cancel
                  </Button>
                  <Button>Submit Request</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-smmart-blue p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-fade-in overflow-y-auto max-h-[80vh]">
          <div className="container-custom py-4 flex flex-col">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                {item.submenu ? (
                  <div className="collapsible">
                    <div 
                      className="flex justify-between items-center py-2 text-smmart-blue font-medium cursor-pointer"
                      onClick={() => {
                        const submenu = document.getElementById(`submenu-${item.title}`);
                        if (submenu) {
                          submenu.classList.toggle('hidden');
                        }
                      }}
                    >
                      {item.title}
                      <ChevronDown size={20} />
                    </div>
                    <div id={`submenu-${item.title}`} className="pl-4 hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block py-2 text-gray-700 hover:text-smmart-blue"
                          onClick={(e) => handleSectionNavigation(e, subItem.href)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 text-smmart-blue hover:text-smmart-blue-light font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Button 
              variant="accent" 
              size="default" 
              className="w-full mt-4" 
              onClick={() => {
                setIsMenuOpen(false);
                setConsultationOpen(true);
              }}
            >
              Get a Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
