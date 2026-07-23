/**
 * VISHWA LANGUAGES — Navigation Data
 * All nav links, routes, and labels are data, not JSX.
 */

export const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Our Courses', 
    dropdown: [
      { type: 'heading', label: 'Foreign Languages' },
      { label: 'Japanese', href: '/languages/japanese', native: '日' },
      { label: 'German', href: '/languages/german', native: 'D' },
      { label: 'French', href: '/languages/french', native: 'F' },
      { label: 'Spanish', href: '/languages/spanish', native: 'E' },
      { label: 'Mandarin', href: '/languages/mandarin', native: '中' },
      { label: 'Korean', href: '/languages/korean', native: '한' },
      { type: 'divider' },
      { type: 'heading', label: 'Other Courses' },
      { label: 'English', href: '/languages/english', native: 'E' },
      { label: 'IELTS', href: '/languages/ielts', native: 'I' },
      { label: 'Sanskrit', href: '/languages/sanskrit', native: 'सं' },
    ]
  },
  { label: 'Services', href: '/services' },
  { label: 'Corporate Training', href: '/corporate-training' },
  { label: 'About Us', href: '/about' },
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
      { label: 'Translation & Interpretation', href: '/interpretation-services' },
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
