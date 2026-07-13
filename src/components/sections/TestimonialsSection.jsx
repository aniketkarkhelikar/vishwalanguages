import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { colors } from '@/lib/tokens';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * TestimonialsSection — An ultra-minimal, airy text slider.
 * Focuses on delicate typography and generous whitespace.
 */
export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const t = testimonials[currentIdx];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="stories-section" className="py-24 md:py-32 bg-paper relative overflow-hidden" style={{ borderTop: `1px solid ${colors.line}` }}>
      {/* Very subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-surface/50 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <div className="container-site max-w-4xl mx-auto text-center relative z-10">
        
        <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta mb-12 md:mb-16 block">
          Student Stories
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center min-h-[320px] md:min-h-[280px] justify-center"
          >
            {/* The Quote */}
            <blockquote className="font-serif font-light italic text-2xl md:text-4xl lg:text-5xl text-ink leading-[1.3] mb-12 px-4">
              "{t.quote}"
            </blockquote>

            {/* The Author */}
            <div className="flex flex-col items-center">
              <div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-display text-sm md:text-lg text-white mb-4 shadow-sm"
                style={{ backgroundColor: colors.terracotta }}
              >
                {t.initials}
              </div>
              <div className="text-ink font-medium text-sm md:text-base mb-1">{t.name}</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-ink/40 mb-3">{t.role}</div>
              
              <div className="flex items-center gap-4 text-xs font-mono text-ink/50 border-t border-ink/10 pt-3">
                <span>{t.level}</span>
                <span className="w-1 h-1 rounded-full bg-ink/20" />
                <span>{t.outcome}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-12 md:mt-16">
          <button 
            onClick={handlePrev} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink/40 hover:text-ink hover:border-ink/30 hover:bg-surface transition-all"
            aria-label="Previous story"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={handleNext} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink/40 hover:text-ink hover:border-ink/30 hover:bg-surface transition-all"
            aria-label="Next story"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
