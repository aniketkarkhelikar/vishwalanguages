import { motion } from 'framer-motion';
import { SEO, breadcrumbSchema, faqSchema, ratingSchema, PAGE_FAQS } from '@/components/SEO';
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
      <SEO 
        title="Vishwa Languages — Best Language Classes in Nashik | German, Japanese, French, English, IELTS" 
        description="Vishwa Languages is Nashik's top-rated language institute on College Road. Expert-led German, Japanese, French, English, Spanish, Korean, and Mandarin classes. IELTS coaching, corporate training, interpretation, translation services, and exclusive German healthcare placement for nurses. Online & offline batches with affordable fees."
        keywords="Best language classes in Nashik, German classes in Nashik, Japanese classes in Nashik, French classes in Nashik, English speaking classes in Nashik, Spanish classes in Nashik, Korean classes in Nashik, Mandarin classes in Nashik, IELTS preparation Nashik, JLPT preparation, Goethe certificate, corporate language training, interpretation services, translation services, German nurse placement, foreign language classes near me, language institute Nashik, language classes College Road Nashik"
        canonicalPath="/"
        schemas={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          ratingSchema(),
          faqSchema(PAGE_FAQS.home)
        ]}
      />
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
      <BookCTASection 
        onOpenConsultation={onOpenConsultation}
        contextLabel="Start Your Path"
        title="Fluency opens doors.&#10;We help you walk through them."
        subtitle="Connect with an advisor to find the perfect program for your goals."
      />
    </motion.div>
  );
}

// --- Language Explorer Strip ---
function LanguageExplorer({ onShowToast }) {
  const scrollingLangs = [...languageCatalogue, ...languageCatalogue, ...languageCatalogue, ...languageCatalogue];
  
  return (
    <div className="border-y py-6 bg-surface overflow-hidden" style={{ borderColor: colors.line }}>
      <div className="marquee-row overflow-hidden">
        <motion.div 
          className="flex gap-4 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

// --- Other Services We Provide ---
function OtherServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden" style={{ borderTop: `1px solid ${colors.line}` }}>
      <div className="container-site max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 md:mb-16 text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta block mb-4">Beyond Language Courses</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-ink max-w-2xl mx-auto">
            Specialized <span className="italic text-terracotta">solutions.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Interpretation Card */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex flex-col bg-paper rounded-[2rem] overflow-hidden shadow-card border border-ink/5 hover:shadow-lift transition-shadow duration-500"
          >
            <div className="h-64 md:h-80 relative overflow-hidden">
              <img 
                src="/images/interpretation/interp-4.jpg" 
                alt="Interpretation Services" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-overlay" />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col flex-grow justify-between bg-paper relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-14 h-14 rounded-full bg-gold text-white flex items-center justify-center shadow-lg">
                <Mic size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-3">Translation & Interpretation</span>
                <h3 className="font-display text-2xl md:text-3xl leading-[1.1] mb-4 text-ink tracking-tight">
                  Precision communication for high-stakes environments.
                </h3>
                <p className="text-ink/60 font-light text-sm leading-relaxed mb-8">
                  Legal, medical, and corporate specialists in Japanese, German, French, and Spanish. Ensure your global events run flawlessly.
                </p>
              </div>
              <Link
                to="/services#interpretation"
                className="inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-widest text-ink group/btn transition-colors hover:text-gold"
              >
                Request Quote <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Healthcare Card */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col bg-paper rounded-[2rem] overflow-hidden shadow-card border border-ink/5 hover:shadow-lift transition-shadow duration-500"
          >
            <div className="h-64 md:h-80 relative overflow-hidden">
              <img 
                src="/images/healthcare/healthcare-4.jpg" 
                alt="Healthcare Placements" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a2a20]/20 mix-blend-overlay" />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col flex-grow justify-between bg-paper relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg" style={{ backgroundColor: healthcareColors.primary }}>
                <Stethoscope size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest block mb-3" style={{ color: healthcareColors.primary }}>Healthcare Placements</span>
                <h3 className="font-display text-2xl md:text-3xl leading-[1.1] mb-4 text-ink tracking-tight">
                  An exclusive pathway from India to Germany.
                </h3>
                <p className="text-ink/60 font-light text-sm leading-relaxed mb-8">
                  For nursing graduates: We handle A1-B2 language training, credential recognition, and hospital matching.
                </p>
              </div>
              <Link
                to="/services#healthcare-placement"
                className="inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-widest text-ink group/btn transition-colors"
                style={{ color: healthcareColors.primary }}
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
