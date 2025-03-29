
export type NavItemWithSubmenu = {
  title: string;
  href: string;
  submenu: {
    title: string;
    href: string;
  }[];
};

export type NavItem = {
  title: string;
  href: string;
  submenu?: {
    title: string;
    href: string;
  }[];
};

export const navItems: NavItem[] = [
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
