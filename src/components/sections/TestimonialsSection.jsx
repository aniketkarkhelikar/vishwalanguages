import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { fadeUpScale, staggerContainer } from '@/animations/motion';

/**
 * TestimonialsSection — An ultra-minimal, Apple-style card grid.
 * Focuses on clean typography and sharp, high-end aesthetics.
 */
export function TestimonialsSection() {
  return (
    <section id="stories-section" className="py-24 md:py-32 bg-surface relative overflow-hidden" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container-site max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[11px] font-body font-bold uppercase tracking-widest text-vw-blue mb-4 block">
            Student Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink">
            Hear from our alumni.
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUpScale}
              className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm border border-black/5 hover:shadow-lg transition-shadow duration-500"
            >
              <blockquote className="font-body text-lg text-ink/70 leading-relaxed mb-12 tracking-tight">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm font-bold text-white shadow-md shrink-0 bg-vw-blue"
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <div className="text-ink font-semibold text-sm tracking-tight">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-wide text-ink/40 font-medium mb-1">{t.role}</div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-ink/50 mt-1">
                    <span className="bg-surface px-2 py-0.5 rounded-md text-vw-blue">{t.level}</span>
                    <span className="w-1 h-1 rounded-full bg-ink/20" />
                    <span>{t.outcome}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
