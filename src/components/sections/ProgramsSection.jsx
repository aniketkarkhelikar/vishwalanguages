import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import { languageCatalogue } from '@/data/languages';
import { colors } from '@/lib/tokens';
import { fadeUp } from '@/animations/motion';

const LANG_IMAGES = {
  japanese: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
  german: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=800&auto=format&fit=crop',
  french: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
  spanish: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop',
  mandarin: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop',
  korean: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&auto=format&fit=crop',
  english: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  ielts: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
  sanskrit: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop',
};

/**
 * ProgramsSection — Interactive Split Layout.
 * Language names on left/right, central preview card updates on hover.
 */
export function ProgramsSection({ onShowToast }) {
  const [hoveredLang, setHoveredLang] = useState(languageCatalogue[0]);

  // Split catalogue for left and right columns
  const midIndex = Math.ceil(languageCatalogue.length / 2);
  const leftLangs = languageCatalogue.slice(0, midIndex);
  const rightLangs = languageCatalogue.slice(midIndex);

  return (
    <section id="programs-section" className="py-16 md:py-20 scroll-m-20 bg-surface relative">
      <div className="container-site max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8"
        >
          <div className="max-w-2xl mx-auto md:mx-0">
            <span className="text-[10px] font-mono block mb-3 tracking-widest text-terracotta uppercase">
              The Curriculum
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-h2 leading-[1.05] tracking-tight text-ink">
              Structured for the<br />
              <span className="italic text-terracotta">global professional.</span>
            </h2>
          </div>
          <Link
            to="/languages"
            className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-ink/50 hover:text-terracotta transition-all group shrink-0"
          >
            All {languageCatalogue.length} programs
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Hover Hint */}
        <div className="flex justify-center mb-8 opacity-50">
          <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-ink">
            <MousePointer2 size={12} className="animate-bounce" /> Hover/tap to explore
          </div>
        </div>

        {/* Mobile/Tablet Tab Bar */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-4 scrollbar-none w-full snap-x">
          {languageCatalogue.map((lang) => (
            <button
              key={lang.slug}
              onClick={() => setHoveredLang(lang)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap snap-align-center border transition-all duration-300
                ${hoveredLang.slug === lang.slug
                  ? 'bg-terracotta text-white border-terracotta shadow-md'
                  : 'bg-white text-ink/60 border-ink/10'
                }`}
            >
              {lang.card.title.replace('Language Program', '').trim()}
            </button>
          ))}
        </div>

        {/* Interactive Split Layout (Desktop) / Card Only (Mobile) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 relative min-h-[420px]">
          
          {/* Left Column: Vertical Menu (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-1/3 flex-col gap-1 pr-6">
            {languageCatalogue.map((lang) => (
              <div 
                key={lang.slug}
                onMouseEnter={() => setHoveredLang(lang)}
                className={`cursor-pointer transition-all duration-300 py-2.5 border-b border-ink/5 hover:pl-2`}
              >
                <h3 className={`font-display text-2xl tracking-tight transition-colors duration-500 ${hoveredLang.slug === lang.slug ? 'text-terracotta font-semibold' : 'text-ink/30 hover:text-ink/60'}`}>
                  {lang.card.title.replace('Language Program', '').trim()}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Column: Landscape Card */}
          <div className="w-full lg:w-2/3 relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredLang.slug}
                initial={{ opacity: 0, scale: 0.98, y: 4, filter: 'blur(2px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, y: -4, filter: 'blur(2px)' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl border border-ink/5 w-full min-h-[380px]">
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-auto">
                    <img 
                      src={LANG_IMAGES[hoveredLang.slug] || LANG_IMAGES.english} 
                      alt={hoveredLang.card.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-ink/20" />
                    <div className="absolute bottom-8 left-8 text-white z-10">
                      <span className="font-display italic text-5xl opacity-40 block mb-2">{hoveredLang.nativeName}</span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white/60">Vishwa Languages</span>
                    </div>
                  </div>

                  {/* Info Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-paper">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-display text-2xl text-ink font-semibold">{hoveredLang.card.title}</h4>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface border text-ink/65" style={{ borderColor: colors.line }}>
                          #{hoveredLang.card.index}
                        </span>
                      </div>
                      <p className="text-ink/65 text-xs md:text-sm leading-relaxed font-light mb-6">
                        {hoveredLang.card.description}
                      </p>

                      {/* Progression & Outcomes */}
                      <div className="grid grid-cols-2 gap-4 mb-6 border-y py-4" style={{ borderColor: colors.line }}>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-ink/40 block mb-1">Progression</span>
                          <span className="text-xs font-semibold text-ink">{hoveredLang.card.progression || 'A1 → C2'}</span>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-ink/40 block mb-1">Outcomes</span>
                          <div className="flex flex-wrap gap-1">
                            {hoveredLang.card.outcomes?.map((out, idx) => (
                              <span key={idx} className="text-[9px] bg-surface px-1.5 py-0.5 rounded text-ink/80 border border-ink/5">{out}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stats pills */}
                      {hoveredLang.stats && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {hoveredLang.stats.slice(0, 2).map((s, idx) => (
                            <span key={idx} className="text-[9px] font-medium px-2.5 py-0.5 rounded-full bg-ink/5 text-ink/75">
                              {s.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      to={`/languages/${hoveredLang.slug}`}
                      className="flex items-center justify-between w-full p-3.5 rounded-xl text-white hover:opacity-95 transition-all shadow-md group/btn"
                      style={{ backgroundColor: hoveredLang.color }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest">Explore Full Syllabus</span>
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
