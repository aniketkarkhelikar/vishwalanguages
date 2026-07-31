import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { languageCatalogue } from '@/data/languages';
import { pageSlideUp, fadeUp, staggerContainer } from '@/animations/motion';
import { colors } from '@/lib/tokens';

/**
 * LanguagesIndexPage — /languages
 * A premium language catalogue with large visual cards and rich editorial layout.
 * Clearly shows all 4 languages: 2 live + 2 coming soon.
 */
export function LanguagesIndexPage({ onShowToast }) {
  const readyLangs = languageCatalogue.filter((l) => !l.comingSoon);
  const comingLangs = languageCatalogue.filter((l) => l.comingSoon);

  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit" className="relative">
      <SEO 
        title="Language Courses in Nashik - German, Japanese, French, Spanish" 
        description="Explore our language courses in Nashik. We offer certified classes in German, Japanese, French, and Spanish with expert trainers."
        keywords="Language Classes in Nashik, Foreign language courses, Best Japanese language classes in Nashik, Best german language course in Nashik, Best french language classes in nashik"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-44 pb-16 border-b" style={{ borderColor: colors.line, backgroundColor: colors.surface }}>
        <div className="container-site">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <motion.div variants={fadeUp} className="md:col-span-7">
              <span className="text-micro text-terracotta font-semibold block mb-6 tracking-widest">All Programs</span>
              <h1 className="font-display text-h1 leading-[1.05] max-w-2xl">
                Language programs<br />
                <span className="italic text-terracotta">built for careers.</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-5">
              <p className="font-display italic text-xl text-ink/55 leading-relaxed border-l-2 pl-6 mb-8" style={{ borderColor: colors.line }}>
                Nine languages. Every program structured around a real professional outcome — not just fluency.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="font-display text-3xl" style={{ color: colors.terracotta }}>9</div>
                  <div className="text-[9px] uppercase tracking-wide opacity-40">Languages</div>
                </div>
                <div>
                  <div className="font-display text-3xl" style={{ color: colors.terracotta }}>3,200+</div>
                  <div className="text-[9px] uppercase tracking-wide opacity-40">Learners</div>
                </div>
                <div>
                  <div className="font-display text-3xl" style={{ color: colors.terracotta }}>92%</div>
                  <div className="text-[9px] uppercase tracking-wide opacity-40">Success rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ALL PROGRAMS GRID ───────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {languageCatalogue.map((lang, idx) => {
              const isReady = !lang.comingSoon;
              const CardInner = (
                <div
                  className={`relative rounded-3xl overflow-hidden border transition-all duration-500 h-full flex flex-col group
                    ${isReady ? 'hover:shadow-card hover:-translate-y-1 cursor-pointer bg-paper' : 'opacity-70 bg-surface/50 cursor-default'}`}
                  style={{ borderColor: colors.line }}
                >
                  {/* Top band with Country Image and Cinematic Overlay */}
                  <div className="h-44 relative overflow-hidden shrink-0">
                    <img 
                      src={lang.countryImage || 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'} 
                      alt={lang.card.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    {/* Cinematic dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
                    
                    {!isReady && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="text-[7px] uppercase tracking-wide font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 left-5 right-5 z-10 flex justify-between items-end">
                      <div className="font-display italic text-3xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)] font-light tracking-wide">
                        {lang.nativeName}
                      </div>
                      <div className="text-[10px] text-white/50 tracking-wider uppercase font-semibold">
                        {lang.card.index}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-xl">{lang.card.title}</h3>
                        {isReady && <ArrowUpRight size={16} className="opacity-30" style={{ color: lang.color }} />}
                      </div>
                      <p className="font-display italic text-ink/50 text-sm leading-relaxed mb-6 line-clamp-3">
                        {lang.card.description}
                      </p>
                    </div>

                    {isReady && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t" style={{ borderColor: colors.line }}>
                        <div>
                          <div className="font-display text-lg mb-0.5" style={{ color: lang.color }}>
                            {lang.levels?.length || 3}
                          </div>
                          <div className="text-[8px] uppercase tracking-wide opacity-40">Levels</div>
                        </div>
                        <div>
                          <div className="font-display text-lg mb-0.5" style={{ color: lang.color }}>
                            {lang.card.progression?.split(' ')[0] || 'A1'}
                          </div>
                          <div className="text-[8px] uppercase tracking-wide opacity-40">Start</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <motion.div key={lang.slug} variants={fadeUp}>
                  {isReady ? (
                    <Link to={`/languages/${lang.slug}`} className="block h-full">
                      {CardInner}
                    </Link>
                  ) : (
                    <div className="h-full" onClick={() => onShowToast?.(`${lang.card.title} launching soon.`)}>
                      {CardInner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
