
import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/config/navItems";

interface MobileNavProps {
  isMenuOpen: boolean;
  navItems: NavItem[];
  handleSectionNavigation: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  setConsultationOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isMenuOpen, 
  navItems, 
  handleSectionNavigation, 
  setIsMenuOpen, 
  setConsultationOpen 
}) => {
  if (!isMenuOpen) return null;

  return (
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
  );
};

export default MobileNav;
