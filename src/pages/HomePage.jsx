import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { CorporateSection } from '@/components/sections/CorporateSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import {
  MomentsStrip,
  WhyVishwaSection,
  BookCTASection,
} from '@/components/sections/HomeSections';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mic, Stethoscope, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeUpScale } from '@/animations/motion';
import { languageCatalogue } from '@/data/languages';
import { colors, healthcareColors } from '@/lib/tokens';

/**
 * HomePage — Clear information hierarchy:
 * 
 * 1. Hero — Brand promise, emotional hook
 * 2. Language Strip — Quick scan of what's available
 * 3. Programs List — Core product: language courses
 * 4. Why Vishwa — Trust & differentiation (after they see programs)
 * 5. Corporate — B2B offering (separate audience)
 * 6. Other Services — Interpretation + Healthcare (secondary offerings)
 * 7. Student Stories — Social proof
 * 8. Moments — Visual energy
 * 9. CTA — Close
 */
export function HomePage({ onOpenConsultation, onShowToast }) {
  const scrollToPrograms = () => {
    document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <HeroSection
        onOpenConsultation={onOpenConsultation}
        onScrollToPrograms={scrollToPrograms}
      />

      {/* Language Explorer Strip */}
      <LanguageExplorer onShowToast={onShowToast} />

      {/* Why Vishwa — trust and methodology */}
      <WhyVishwaSection />

      {/* Language Programs */}
      <ProgramsSection onShowToast={onShowToast} />

      {/* Corporate Training */}
      <CorporateSection onOpenConsultation={onOpenConsultation} />

      {/* Other Services: Interpretation + Healthcare */}
      <OtherServicesSection />

      {/* Student Stories */}
      <TestimonialsSection />

      {/* Moments marquee */}
      <MomentsStrip />

      {/* Closing CTA */}
      <BookCTASection onOpenConsultation={onOpenConsultation} />
    </motion.div>
  );
}

// --- Language Explorer Strip ---
function LanguageExplorer({ onShowToast }) {
  const scrollingLangs = [...languageCatalogue, ...languageCatalogue, ...languageCatalogue, ...languageCatalogue];
  
  return (
    <div className="border-y py-6 bg-surface overflow-hidden" style={{ borderColor: colors.line }}>
      <div className="marquee-row">
        <div className="marquee-track flex gap-4 w-max px-4">
          {scrollingLangs.map((lang, idx) => {
            const isReady = !lang.comingSoon;
            return (
              <button
                key={`${lang.slug}-${idx}`}
                onClick={() => {
                  if (isReady) window.location.href = `/languages/${lang.slug}`;
                  else onShowToast?.(`${lang.card.title} program is launching soon.`);
                }}
                className={`group relative flex-shrink-0 flex items-center gap-4 px-6 py-3.5 rounded-full bg-paper border transition-all duration-300
                  ${isReady
                    ? 'cursor-pointer hover:shadow-sm hover:border-terracotta/25 hover:-translate-y-0.5'
                    : 'cursor-not-allowed opacity-50'
                  }`}
                style={{ borderColor: colors.line }}
              >
                {!isReady && (
                  <span className="absolute -top-2 right-4 text-[7px] uppercase tracking-wide font-bold px-1.5 py-0.5 rounded-full bg-tile text-ink/40">
                    Soon
                  </span>
                )}
                <span
                  className={`font-display text-2xl transition-colors ${isReady ? 'text-ink group-hover:text-terracotta' : 'text-ink/30'}`}
                >
                  {lang.nativeName}
                </span>
                <span className="text-sm font-medium opacity-60">
                  {lang.card.title}
                </span>
                {isReady && (
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-terracotta ml-1"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- Other Services We Provide ---
function OtherServicesSection() {
  return (
    <section className="py-32 md:py-48 bg-surface border-t" style={{ borderColor: colors.line }}>
      <div className="container-site max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 md:mb-32 text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-brown block mb-6">Beyond Language Courses</span>
          <h2 className="font-display text-5xl md:text-7xl leading-tight">
            Specialized solutions.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Interpretation Card - Massive Typographic Block */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-ink border border-ink/10 rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[500px] hover:-translate-y-2 transition-transform duration-700 overflow-hidden"
          >
            <div className="relative z-10 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 block mb-12">Translation & Interpretation</span>
              <h3 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
                Precision communication for high-stakes environments.
              </h3>
              <p className="text-white/50 font-light text-lg md:text-xl leading-relaxed max-w-sm">
                Legal, medical, and corporate specialists in Japanese, German, French, and Spanish.
              </p>
            </div>
            <Link
              to="/interpretation-services"
              className="relative z-10 mt-12 inline-flex items-center gap-4 text-sm uppercase font-bold tracking-widest text-white hover:text-sage transition-colors"
            >
              Request Quote <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            {/* Abstract Graphic */}
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full blur-[80px] opacity-30 mix-blend-overlay" style={{ background: `radial-gradient(circle, ${colors.sage} 0%, transparent 70%)` }} />
            <div className="absolute -bottom-10 -right-6 font-display text-[15rem] leading-none opacity-[0.05] pointer-events-none select-none text-white">言</div>
          </motion.div>

          {/* Healthcare Card - Massive Typographic Block */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative border rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[500px] hover:-translate-y-2 transition-transform duration-700 overflow-hidden"
            style={{ borderColor: `${healthcareColors.primary}20`, backgroundColor: healthcareColors.light }}
          >
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest block mb-12" style={{ color: healthcareColors.primary }}>Healthcare Placements</span>
              <h3 className="font-display text-4xl md:text-5xl leading-[1.1] text-ink mb-6">
                An exclusive pathway from India to Germany.
              </h3>
              <p className="text-ink/60 font-light text-lg md:text-xl leading-relaxed max-w-sm">
                For nursing graduates: We handle A1-B2 language training, credential recognition, and hospital matching.
              </p>
            </div>
            <Link
              to="/healthcare-placement"
              className="relative z-10 mt-12 inline-flex items-center gap-4 text-sm uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
              style={{ color: healthcareColors.primary }}
            >
              Check Eligibility <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            {/* Abstract Graphic */}
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.15] mix-blend-overlay" style={{ background: `radial-gradient(circle, ${healthcareColors.primary} 0%, transparent 70%)` }} />
            <div className="absolute -bottom-10 -right-6 font-display text-[15rem] leading-none opacity-[0.05] pointer-events-none select-none" style={{ color: healthcareColors.primary }}>⚕</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
