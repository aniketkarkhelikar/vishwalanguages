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
      <div className="marquee-row overflow-hidden">
        <div className="marquee-track flex gap-4 px-4">
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
    <section className="py-16 md:py-20 bg-surface border-t" style={{ borderColor: colors.line }}>
      <div className="container-site max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-12 text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-brown block mb-4">Beyond Language Courses</span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Specialized solutions.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Interpretation Card - Cinematic Image Feature */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative rounded-[2rem] overflow-hidden min-h-[320px] md:min-h-[380px] flex flex-col justify-end shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop" 
              alt="Interpretation Services" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply opacity-90" />
            
            <div className="relative z-10 p-8 md:p-10 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-3 drop-shadow-md">Translation & Interpretation</span>
              <h3 className="font-display text-3xl leading-[1.1] mb-3 drop-shadow-lg">
                Precision communication<br />for high-stakes environments.
              </h3>
              <p className="text-white/80 font-light text-xs md:text-sm leading-relaxed max-w-sm mb-6 drop-shadow-sm">
                Legal, medical, and corporate specialists in Japanese, German, French, and Spanish.
              </p>
              <Link
                to="/interpretation-services"
                className="inline-flex items-center gap-4 text-xs uppercase font-bold tracking-widest text-white/90 hover:text-white transition-colors group/btn bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20"
              >
                Request Quote <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Healthcare Card - Cinematic Image Feature */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-[2rem] overflow-hidden min-h-[320px] md:min-h-[380px] flex flex-col justify-end shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
              alt="Healthcare Placements" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] via-[#2c3e50]/40 to-transparent mix-blend-multiply opacity-90" />
            
            <div className="relative z-10 p-8 md:p-10 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block mb-3 drop-shadow-md">Healthcare Placements</span>
              <h3 className="font-display text-3xl leading-[1.1] mb-3 drop-shadow-lg">
                An exclusive pathway<br />from India to Germany.
              </h3>
              <p className="text-white/80 font-light text-xs md:text-sm leading-relaxed max-w-sm mb-6 drop-shadow-sm">
                For nursing graduates: We handle A1-B2 language training, credential recognition, and hospital matching.
              </p>
              <Link
                to="/healthcare-placement"
                className="inline-flex items-center gap-4 text-xs uppercase font-bold tracking-widest text-white/90 hover:text-white transition-colors group/btn bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20"
              >
                Check Eligibility <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
