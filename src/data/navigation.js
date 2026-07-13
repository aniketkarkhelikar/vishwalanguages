/**
 * VISHWA LANGUAGES — Navigation Data
 * All nav links, routes, and labels are data, not JSX.
 */

export const navLinks = [
  { label: 'Languages',      href: '/languages',               scroll: null },
  { label: 'Companies',      href: '/corporate-training',      scroll: null },
  { label: 'Interpretation', href: '/interpretation-services', scroll: null },
  { label: 'Placements',     href: '/healthcare-placement',    scroll: null },
  { label: 'About Us',       href: '/about',                   scroll: null },
];

export const footerLinks = [
  {
    heading: 'Programs',
    links: [
      { label: 'Japanese',  href: '/languages/japanese' },
      { label: 'German',    href: '/languages/german' },
      { label: 'French',    href: '/languages/french' },
      { label: 'Spanish',   href: '/languages/spanish' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Corporate Training',     href: '/corporate-training' },
      { label: 'Interpretation',         href: '/interpretation-services' },
      { label: 'Healthcare Placement',   href: '/healthcare-placement' },
      { label: 'Self-Paced (Coming Soon)', href: '/coming-soon' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
