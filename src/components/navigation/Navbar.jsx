import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { site } from '@/data/site';
import { colors } from '@/lib/tokens';
import { languageCatalogue } from '@/data/languages';

/**
 * Navbar — Fixed navigation, editorial style.
 * Adapts to page background dynamically.
 */
export function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    dropdownOpen && setDropdownOpen(false);
    mobileDropdownOpen && setMobileDropdownOpen(false);
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
    ? 'opacity-70 hover:opacity-100'
    : (isDarkHeroPage ? 'opacity-80 hover:opacity-100' : 'opacity-70 hover:opacity-100');

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500
          ${scrolled
            ? 'py-4 backdrop-blur-xl bg-white/90 border-b'
            : 'py-6 md:py-8 bg-transparent'
          }`}
        style={{ borderColor: scrolled ? colors.line : 'transparent' }}
        aria-label="Main navigation"
      >
        <div className="container-site flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex flex-col cursor-pointer group z-50">
            <span
              className={`font-display text-[10px] uppercase tracking-micro mb-1 transition-colors ${
                isDarkHeroPage && !scrolled ? 'text-gold' : 'text-brown'
              }`}
            >
              {site.brand.nameDevanagari}
            </span>
            <span className={`font-display text-xl tracking-tight leading-none transition-colors ${textClass}`}>
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-micro font-medium items-center" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isLanguages = link.label === 'Languages';

              if (isLanguages) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors uppercase ${textClass} ${opacityClass} ${
                        isActive ? 'text-terracotta' : ''
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                     {/* Sleek Languages Dropdown Popover */}
                     <AnimatePresence>
                       {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-white/95 backdrop-blur-2xl border border-ink/[0.06] rounded-3xl shadow-[0_20px_40px_-12px_rgba(23,21,18,0.12)] p-4 grid grid-cols-2 gap-x-4 gap-y-1 z-50 text-ink"
                          >
                            {languageCatalogue.map((lang) => {
                              const isReady = !lang.comingSoon;
                              const itemContent = (
                                <div className="flex items-center gap-3 w-full">
                                  <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center font-display text-base shrink-0"
                                    style={{ backgroundColor: `${lang.color}15`, color: lang.color }}
                                  >
                                    {lang.displayChar}
                                  </div>
                                  <div className="flex flex-col items-start flex-1">
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-display text-sm tracking-tight font-medium text-ink">
                                        {lang.card.title}
                                      </span>
                                      {!isReady && (
                                        <span className="text-[6px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-full bg-ink/5 text-ink/40">
                                          Soon
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-[9px] opacity-50 uppercase tracking-wide">
                                      {lang.nativeName}
                                    </span>
                                  </div>
                                </div>
                              );
  
                              return isReady ? (
                                <Link
                                  key={lang.slug}
                                  to={`/languages/${lang.slug}`}
                                  className="flex items-center justify-between p-2 rounded-2xl hover:bg-black/[0.03] transition-colors"
                                >
                                  {itemContent}
                                </Link>
                              ) : (
                                <div
                                  key={lang.slug}
                                  className="flex items-center justify-between p-2 rounded-2xl opacity-60 cursor-not-allowed"
                                >
                                  {itemContent}
                                </div>
                              );
                           })}
                        </motion.div>
                       )}
                     </AnimatePresence>
                  </div>
                );
              }

              return (
                <span key={link.label} role="listitem">
                  {link.scroll ? (
                    <button
                      onClick={() => handleScrollTo(link.scroll)}
                      className={`transition-colors uppercase ${textClass} ${opacityClass} ${
                        isActive ? 'text-terracotta' : ''
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`transition-colors uppercase ${textClass} ${opacityClass} ${
                        isActive ? 'text-terracotta' : ''
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
              className={`hidden md:flex items-center gap-2 text-micro font-medium
                         transition-all group px-4 py-2 rounded-full border
                         ${isDarkHeroPage && !scrolled
                           ? 'border-white/20 hover:border-gold hover:bg-white/5 text-white'
                           : 'border-ink/15 hover:border-terracotta/20 hover:bg-terracotta/5 text-ink'
                         }`}
              aria-label="Book a free consultation"
            >
              Begin <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-8 flex flex-col overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-6 text-xl font-display mb-12">
              {navLinks.map((link) => {
                const isLanguages = link.label === 'Languages';

                if (isLanguages) {
                  return (
                    <div key={link.label} className="border-b pb-4" style={{ borderColor: colors.line }}>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center justify-between w-full text-left hover:text-terracotta transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={18} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mobile languages list */}
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-3 pl-4 pt-3 text-sm font-body font-medium"
                          >
                            {languageCatalogue.map((lang) => {
                              const isReady = !lang.comingSoon;
                              return isReady ? (
                                <Link
                                  key={lang.slug}
                                  to={`/languages/${lang.slug}`}
                                  className="py-1 opacity-70 hover:opacity-100 transition-opacity"
                                >
                                  {lang.card.title} ({lang.nativeName})
                                </Link>
                              ) : (
                                <span key={lang.slug} className="py-1 opacity-40">
                                  {lang.card.title} (Soon)
                                </span>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.label}>
                    {link.scroll ? (
                      <button
                        onClick={() => handleScrollTo(link.scroll)}
                        className="text-left hover:text-terracotta transition-colors border-b pb-4 w-full"
                        style={{ borderColor: colors.line }}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="block hover:text-terracotta transition-colors border-b pb-4"
                        style={{ borderColor: colors.line }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => { setMobileOpen(false); onOpenConsultation(); }}
              className="btn-primary w-full justify-center mb-8 shrink-0"
            >
              Book Free Consultation <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
