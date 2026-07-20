import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { fadeUpScale, staggerContainer, fadeUp } from '@/animations/motion';
import { colors } from '@/lib/tokens';

/**
 * TestimonialsSection — Clean, minimal, small typography, modern and sleek.
 */
export function TestimonialsSection() {
  return (
    <section id="stories-section" className="py-24 bg-paper relative z-10 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/homepage/home-0019.jpg" className="w-full h-full object-cover opacity-[0.06] grayscale" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-transparent to-paper" />
      </div>
      <div className="container-site max-w-6xl mx-auto relative z-20">
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta mb-4 block">
            Student Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink">
            Hear from our alumni.
          </h2>
        </motion.div>
      </div>

      <div className="marquee-row overflow-hidden relative w-full mt-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 py-8 px-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[350px] md:w-[420px] flex-shrink-0 bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 flex flex-col justify-between shadow-sm border border-white hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
            >
              <blockquote className="text-base md:text-lg text-ink/80 leading-relaxed mb-10 font-light relative whitespace-normal">
                <span className="absolute -top-6 -left-4 text-6xl text-ink/5 font-serif leading-none">"</span>
                <span className="relative z-10">{t.quote}</span>
              </blockquote>

              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg font-bold text-white shrink-0 shadow-md"
                  style={{ backgroundColor: colors.terracotta }}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <div className="text-ink font-bold text-base tracking-tight">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-ink/50 mt-1 font-mono">{t.role}</div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-terracotta mt-2 font-semibold">
                    <span className="bg-terracotta/10 px-2 py-0.5 rounded-sm">{t.level}</span>
                    <span className="w-1 h-1 rounded-full bg-terracotta/40" />
                    <span>{t.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
