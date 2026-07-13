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
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { fadeUp } from '@/animations/motion';
import { languageCatalogue } from '@/data/languages';
import { colors } from '@/lib/tokens';

/**
 * HomePage — All verticals, strong visual hierarchy.
 * Section order: Hero → Language Strip → Why Vishwa → Programs →
 *                Corporate → Moments → Services (Interpretation + Healthcare) → Stories → CTA
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

      {/* Why Vishwa — trust before selling */}
      <WhyVishwaSection />

      {/* Language Programs */}
      <ProgramsSection onShowToast={onShowToast} />

      {/* Corporate Training */}
      <CorporateSection onOpenConsultation={onOpenConsultation} />

      {/* Moments marquee */}
      <MomentsStrip />

      {/* Services — two-up feature section */}
      <ServicesSection />

      {/* Student Stories */}
      <TestimonialsSection />

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

// --- Services — two-up visual feature cards ---
function ServicesSection() {
  const services = [
    {
      eyebrow: 'Corporate & Legal',
      title: 'Translation & Interpretation',
      subtitle: 'Every word matters.',
      body: 'Professional interpretation requiring instant and precise communication in real-time. Document translation for contracts, manuals, and apps.',
      href: '/interpretation-services',
      cta: 'Learn about interpretation',
      color: colors.sage,
      bgColor: colors.surface,
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      char: '言',
      charColor: colors.sage,
      features: [
        'Document Translation (Contracts, Manuals)',
        'Website & App Localization',
        'Certified & Notarized Translation',
        'Simultaneous & Consecutive Interpretation',
      ],
    },
    {
      eyebrow: 'Medical Professionals',
      title: 'Healthcare Placements',
      subtitle: 'From India to Germany.',
      body: 'Nurses and healthcare professionals guided from A1 German language all the way to verified hospital placement in Germany.',
      href: '/healthcare-placement',
      cta: 'Explore healthcare placement',
      color: colors.blue,
      bgColor: colors.paper,
      bgImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      char: '⚕',
      charColor: colors.blue,
      features: [
        'CEFR German Language Prep (A1 - B2)',
        'Deficit Assessment & Document Verification',
        'Direct Interviews with German Hospitals',
        'Visa, Travel, & Onboarding Support',
      ],
    },
  ];

  return (
    <section
      className="py-0 border-t"
      style={{ borderColor: colors.line }}
    >
      <div className="grid md:grid-cols-2">
        {services.map((s, i) => (
          <ServiceCard key={s.href} service={s} idx={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service: s, idx }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`group relative overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[auto] md:min-h-[640px] ${idx === 0 ? 'md:border-r' : ''} border-b md:border-b-0`}
      style={{ backgroundColor: s.bgColor, borderColor: colors.line }}
    >
      {/* Background Image with low opacity for visual texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
        <img 
          src={s.bgImage} 
          alt={s.eyebrow} 
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" 
        />
      </div>

      {/* Background character */}
      <div
        className="absolute -bottom-10 -right-10 font-display text-[16rem] md:text-[20rem] leading-none select-none pointer-events-none opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-700 z-0"
        style={{ color: s.charColor }}
      >
        {s.char}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 md:mb-6" style={{ color: s.color }}>
          {s.eyebrow}
        </span>
        
        {/* Huge Service Title for clarity */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-3">
          {s.title}
        </h2>
        
        <h3 className="font-display italic text-xl md:text-2xl lg:text-3xl leading-tight mb-8" style={{ color: s.color }}>
          {s.subtitle}
        </h3>
        
        <p className="text-ink/65 text-sm md:text-base font-light leading-relaxed max-w-sm mb-8">
          {s.body}
        </p>

        {/* Feature Checkmarks */}
        <ul className="space-y-3 max-w-sm">
          {s.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-3 text-xs md:text-sm text-ink/75 font-medium">
              <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: s.color }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={s.href}
        className="relative z-10 mt-12 inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-wider transition-all group-hover:gap-3"
        style={{ color: s.color }}
      >
        {s.cta}
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
}
