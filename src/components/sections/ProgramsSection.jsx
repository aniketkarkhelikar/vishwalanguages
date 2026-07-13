import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { languageCatalogue } from '@/data/languages';
import { colors } from '@/lib/tokens';
import { fadeUp } from '@/animations/motion';

/**
 * ProgramsSection — Ultra-sleek, premium full-width typographic list.
 */
export function ProgramsSection({ onShowToast }) {
  return (
    <section id="programs-section" className="py-24 md:py-32 scroll-m-20 bg-surface">
      <div className="container-site max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono block mb-5 tracking-widest text-terracotta uppercase">
              The Curriculum
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-h2 leading-[1.05] tracking-tight text-ink">
              Structured for the<br />
              <span className="italic text-terracotta">global professional.</span>
            </h2>
          </div>
          <Link
            to="/languages"
            className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-ink/50 hover:text-terracotta transition-all group shrink-0"
          >
            All {languageCatalogue.length} programs
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Ultra-sleek Typographic List */}
        <div className="flex flex-col w-full border-t border-ink/10 mt-8">
          {languageCatalogue.map((lang, idx) => (
            <motion.div
              key={lang.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={`/languages/${lang.slug}`}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-ink/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Minimal Row Content */}
                <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-auto relative z-10">
                  <span className="font-mono text-[10px] md:text-xs text-ink/30 shrink-0 pt-2 md:pt-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-ink group-hover:text-terracotta transition-colors duration-500 tracking-tight leading-none">
                        {lang.card.title.replace('Language Program', '').trim()}
                      </h3>
                      <span className="font-display italic text-2xl md:text-4xl text-ink/20 group-hover:text-ink/40 transition-colors hidden sm:block">
                        {lang.nativeName}
                      </span>
                    </div>
                    {/* Mobile description */}
                    <span className="block md:hidden text-ink/50 text-xs font-light mt-4 pr-12">
                      {lang.card.description}
                    </span>
                  </div>
                </div>

                {/* Right side Info & CTA */}
                <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end gap-12 md:w-1/3 relative z-10">
                  <p className="font-light text-ink/50 text-sm line-clamp-2 text-right hidden md:block max-w-xs transition-opacity group-hover:text-ink/70">
                    {lang.card.description}
                  </p>
                  
                  {/* Arrow CTA */}
                  <div className="hidden md:flex w-12 h-12 rounded-full border border-ink/10 items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-white transition-all duration-500 text-ink">
                    <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                
                {/* Mobile absolute arrow */}
                <div className="absolute right-0 top-10 md:hidden w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-white text-ink transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
