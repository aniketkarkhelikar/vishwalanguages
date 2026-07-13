import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { site } from '@/data/site';
import { footerLinks } from '@/data/navigation';
import { colors } from '@/lib/tokens';

/**
 * Footer — Editorial, minimal, brand-anchored.
 * Fully data-driven from navigation.js
 */
export function Footer({ onOpenConsultation }) {
  return (
    <footer
      className="pt-24 pb-12 border-t bg-surface"
      style={{ borderColor: colors.line }}
    >
      <div className="container-site">

        {/* Top grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-display text-[10px] uppercase tracking-micro text-brown mb-3">
              {site.brand.nameDevanagari}
            </span>
            <h2 className="font-display text-2xl tracking-tight mb-3">{site.name}</h2>
            <p className="text-sm text-ink/50 font-light max-w-xs leading-relaxed">
              {site.brand.mission}
            </p>
            <button
              onClick={onOpenConsultation}
              className="mt-8 btn-ghost self-start group"
            >
              Book Consultation
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <span className="text-label font-semibold text-ink/40 block mb-4 uppercase tracking-micro">
                  {col.heading}
                </span>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ink/60 hover:text-terracotta transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 border-t text-[10px] uppercase tracking-micro opacity-40"
          style={{ borderColor: colors.line }}
        >
          <span>© {new Date().getFullYear()} {site.name}. Est. {site.established}.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:opacity-100 transition-opacity"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
