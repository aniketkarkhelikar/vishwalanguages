import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { site } from '@/data/site';
import { colors } from '@/lib/tokens';

/**
 * Navbar — Sleek, Apple-inspired minimal navigation.
 * High clarity, perfect hierarchy.
 */
export function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleScrollTo = (id) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Detect dark hero pages
  const isDarkHeroPage = location.pathname === '/corporate-training' || location.pathname === '/healthcare-placement';
  
  // Decide navbar text colors dynamically
  const textClass = scrolled 
    ? 'text-ink' 
    : (isDarkHeroPage ? 'text-white' : 'text-ink');
  
  const opacityClass = scrolled
    ? 'opacity-80 hover:opacity-100'
    : (isDarkHeroPage ? 'opacity-90 hover:opacity-100' : 'opacity-80 hover:opacity-100');

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? 'py-3 backdrop-blur-2xl bg-white/70 border-b shadow-sm'
            : 'py-6 bg-transparent'
          }`}
        style={{ borderColor: scrolled ? 'rgba(0,0,0,0.05)' : 'transparent' }}
        aria-label="Main navigation"
      >
        <div className="container-site flex justify-between items-center max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex flex-col cursor-pointer group z-50">
            <span className={`font-display text-2xl font-bold tracking-tight leading-none transition-colors ${textClass}`}>
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 text-sm font-medium items-center" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <span key={link.label} role="listitem">
                  {link.scroll ? (
                    <button
                      onClick={() => handleScrollTo(link.scroll)}
                      className={`transition-colors tracking-tight ${textClass} ${opacityClass} ${
                        isActive ? 'text-vw-blue font-semibold' : ''
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`transition-colors tracking-tight ${textClass} ${opacityClass} ${
                        isActive ? 'text-vw-blue font-semibold' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenConsultation}
              className={`hidden md:flex items-center gap-2 text-xs font-semibold
                         transition-all group px-5 py-2.5 rounded-full
                         ${isDarkHeroPage && !scrolled
                           ? 'bg-white text-ink hover:bg-opacity-90'
                           : 'bg-ink text-white hover:bg-opacity-90 shadow-md'
                         }`}
              aria-label="Book a free consultation"
            >
              Get Started
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden relative z-50 p-2 -mr-2 transition-colors ${
                mobileOpen ? 'text-ink' : textClass
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-28 px-6 flex flex-col overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-medium mb-12">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.scroll ? (
                    <button
                      onClick={() => handleScrollTo(link.scroll)}
                      className="text-left hover:text-vw-blue transition-colors border-b border-black/5 pb-4 w-full tracking-tight"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="block hover:text-vw-blue transition-colors border-b border-black/5 pb-4 tracking-tight"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => { setMobileOpen(false); onOpenConsultation(); }}
              className="w-full justify-center mb-8 shrink-0 bg-ink text-white py-4 rounded-xl font-semibold flex items-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
