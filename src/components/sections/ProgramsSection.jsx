import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MousePointer2, ChevronLeft, ChevronRight } from 'lucide-react';
import { languageCatalogue } from '@/data/languages';
import { colors } from '@/lib/tokens';
import { fadeUp } from '@/animations/motion';

/**
 * ProgramsSection — Interactive Split Layout (Desktop) + Full-Card Arrow Carousel (Mobile).
 */
export function ProgramsSection({ onShowToast }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoveredLang = languageCatalogue[activeIndex];

  const handlePrev = () =>
    setActiveIndex((i) => (i - 1 + languageCatalogue.length) % languageCatalogue.length);
  const handleNext = () =>
    setActiveIndex((i) => (i + 1) % languageCatalogue.length);

  return (
    <section id="programs-section" className="py-16 md:py-20 scroll-m-20 bg-surface relative">
      <div className="container-site max-w-7xl mx-auto relative z-10">

        {/* ── MOBILE LAYOUT (hidden on lg+) ──────────────────────────── */}
        <div className="lg:hidden">
          {/* Mobile header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="text-[10px] font-mono block mb-3 tracking-widest text-terracotta uppercase">
              The Curriculum
            </span>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink">
              Structured as per<br />
              <span className="italic text-terracotta">International standards.</span>
            </h2>
          </motion.div>

          {/* Card with integrated arrows — lots of whitespace, arrows float on image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredLang.slug + '-mobile'}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-ink/5 mx-1">
                {/* Image with floating arrows */}
                <div className="relative h-64 w-full">
                  <img
                    src={hoveredLang.countryImage}
                    alt={hoveredLang.card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Color accent bar at top */}
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: hoveredLang.color }}
                  />

                  {/* Language counter — top right */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-[10px] font-mono text-white/70 tracking-widest">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(languageCatalogue.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Left Arrow — floats on image left edge */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-all active:scale-90 z-10"
                    aria-label="Previous language"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                  </button>

                  {/* Right Arrow — floats on image right edge */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-all active:scale-90 z-10"
                    aria-label="Next language"
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>

                  {/* Native name + label — bottom left */}
                  <div className="absolute bottom-5 left-6 text-white z-10">
                    <span className="font-display italic text-4xl opacity-35 block mb-1">
                      {hoveredLang.nativeName}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white/55">
                      Vishwa Languages
                    </span>
                  </div>
                </div>

                {/* Info — generous whitespace */}
                <div className="px-7 pt-7 pb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-display text-2xl text-ink font-semibold leading-tight">
                        {hoveredLang.card.title}
                      </h4>
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink/40 mt-0.5 block"
                      >
                        Program #{hoveredLang.card.index}
                      </span>
                    </div>
                    {/* Color dot */}
                    <div
                      className="w-3 h-3 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: hoveredLang.color }}
                    />
                  </div>

                  <p className="text-ink/60 text-sm leading-relaxed font-light mb-6">
                    {hoveredLang.card.description}
                  </p>

                  {/* Progression & Outcomes */}
                  <div className="grid grid-cols-2 gap-4 mb-7 border-y py-4" style={{ borderColor: colors.line }}>
                    <div>
                      <span className="text-[8px] uppercase tracking-wider font-mono text-ink/35 block mb-1.5">Progression</span>
                      <span className="text-xs font-semibold text-ink">{hoveredLang.card.progression || 'A1 → C2'}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-wider font-mono text-ink/35 block mb-1.5">Outcomes</span>
                      <div className="flex flex-wrap gap-1">
                        {hoveredLang.card.outcomes?.map((out, idx) => (
                          <span key={idx} className="text-[9px] bg-surface px-1.5 py-0.5 rounded text-ink/75 border border-ink/5">{out}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/languages/${hoveredLang.slug}`}
                    className="flex items-center justify-between w-full p-4 rounded-xl text-white transition-all shadow-md active:scale-[0.98]"
                    style={{ backgroundColor: hoveredLang.color }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">Explore Full Syllabus</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All programs link */}
          <div className="flex justify-center mt-8">
            <Link
              to="/languages"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/45 hover:text-terracotta transition-all group"
            >
              All {languageCatalogue.length} programs
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (hidden on mobile) ──────────────────────── */}
        <div className="hidden lg:flex flex-row gap-16 relative min-h-[420px] items-start">

          {/* Left Column: Vertical Menu */}
          <div className="w-1/3 flex flex-col gap-1 relative pt-6">
            <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-ink/30 mb-8 border-b border-ink/5 pb-4">
              <MousePointer2 size={12} className="animate-pulse" /> Click to explore
            </div>
            {languageCatalogue.map((lang, idx) => (
              <div
                key={lang.slug}
                onClick={() => setActiveIndex(idx)}
                className="cursor-pointer transition-all duration-300 py-2.5 hover:pl-3"
              >
                <h3 className={`font-display text-2xl lg:text-3xl tracking-tight transition-colors duration-500 ${
                  activeIndex === idx ? 'text-terracotta font-semibold' : 'text-ink/30 hover:text-ink/50'
                }`}>
                  {lang.card.title.replace('Language Program', '').trim()}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Column: Title + Card */}
          <div className="w-2/3 flex flex-col relative z-20">
            {/* Desktop Title */}
            <div className="flex flex-col mb-12 text-left">
              <span className="text-[10px] font-mono block mb-4 tracking-widest text-terracotta uppercase">
                The Curriculum
              </span>
              <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
                Structured as per<br />
                <span className="italic text-terracotta">International standards.</span>
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredLang.slug}
                initial={{ opacity: 0, scale: 0.98, y: 4, filter: 'blur(2px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, y: -4, filter: 'blur(2px)' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl border border-ink/5 w-full min-h-auto md:min-h-[460px]">
                  {/* Image Side */}
                  <div className="w-full md:w-5/12 relative min-h-[260px] md:min-h-auto">
                    <img
                      src={hoveredLang.countryImage}
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
                  <div className="w-full md:w-7/12 p-10 md:p-12 flex flex-col justify-between bg-paper">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-display text-3xl text-ink font-semibold">{hoveredLang.card.title}</h4>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-surface border text-ink/65" style={{ borderColor: colors.line }}>
                          #{hoveredLang.card.index}
                        </span>
                      </div>
                      <p className="text-ink/65 text-sm md:text-base leading-relaxed font-light mb-8">
                        {hoveredLang.card.description}
                      </p>

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
