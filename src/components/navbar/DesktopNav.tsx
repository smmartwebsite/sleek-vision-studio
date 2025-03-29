
import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import { NavItem } from "@/config/navItems";

interface DesktopNavProps {
  navItems: NavItem[];
  handleSectionNavigation: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, handleSectionNavigation }) => {
  return (
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
  );
};

export default DesktopNav;
