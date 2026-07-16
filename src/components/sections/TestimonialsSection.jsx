import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { fadeUpScale, staggerContainer, fadeUp } from '@/animations/motion';
import { colors } from '@/lib/tokens';

/**
 * TestimonialsSection — Clean, minimal, small typography, modern and sleek.
 */
export function TestimonialsSection() {
  return (
    <section id="stories-section" className="py-16 md:py-20 bg-surface border-t border-ink/5 overflow-hidden relative">
      <div className="container-site max-w-6xl mx-auto relative z-10">
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10 md:mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-vw-blue mb-4 block">
            Student Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink">
            Hear from our alumni.
          </h2>
        </motion.div>

        <div className="marquee-row overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none" />
          
          <div className="marquee-track flex gap-6 py-8">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="w-[350px] md:w-[400px] flex-shrink-0 bg-white/50 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:-translate-y-1 transition-transform duration-500"
              >
                <blockquote className="text-sm md:text-base text-ink/80 leading-relaxed mb-10 font-light relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-ink/10 font-serif leading-none">"</span>
                  <span className="relative z-10">{t.quote}</span>
                </blockquote>

                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm font-bold text-white shrink-0 shadow-md"
                    style={{ backgroundColor: colors.terracotta }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-ink font-bold text-sm tracking-tight">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-ink/50 mt-0.5 font-mono">{t.role}</div>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-terracotta mt-1.5 font-semibold">
                      <span className="bg-terracotta/10 px-2 py-0.5 rounded-sm">{t.level}</span>
                      <span className="w-1 h-1 rounded-full bg-terracotta/40" />
                      <span>{t.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
