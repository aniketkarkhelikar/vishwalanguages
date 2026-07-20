import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Clock, Users, Trophy, CheckCircle2, ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer, pageSlideUp } from '@/animations/motion';
import { colors } from '@/lib/tokens';

const CINEMATIC_TEXTS = {
  japanese: "吾輩は猫である。\n名前はまだ無い。\nどこで生れたか\nとんと見当がつかぬ。",
  german: "Habe nun, ach!\nPhilosophie,\nJuristerei und Medizin,\nUnd leider auch Theologie!",
  french: "Longtemps, je me\nsuis couché de bonne heure.\nParfois, à peine\nma bougie éteinte...",
  spanish: "En un lugar\nde la Mancha,\nde cuyo nombre no\nquiero acordarme...",
  mandarin: "道可道，非常道。\n名可名，非常名。\n无名天地之始；\n有名万物之母。",
  korean: "나 보기가 역겨워\n가실 때에는\n말없이 고이 보내\n드리오리다.",
  english: "To be, or not to be,\nthat is the question:\nWhether 'tis nobler\nin the mind...",
  ielts: "The limits of my\nlanguage mean the\nlimits of my world.",
  sanskrit: "कर्मण्येवाधिकारस्ते\nमा फलेषु कदाचन।\nमा कर्मफलहेतुर्भू\nर्मा ते सङ्गोऽस्त्वकर्मणि॥",
};

/**
 * LanguageTemplate — renders any language page from its data object.
 * Rich visual layout: hero → bento level cards → highlights → FAQ accordion → testimonial → CTA.
 * NO boring timeline. Every section has a distinct visual language.
 */
export function LanguageTemplate({ language: lang, onOpenConsultation }) {
  if (!lang) return null;

  return (
    <motion.div
      variants={pageSlideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative"
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-28 md:pt-32 pb-0 overflow-hidden"
        style={{ backgroundColor: lang.bgTint }}
      >
        {/* Back link */}
        <div className="container-site relative z-10">
          <Link
            to="/languages"
            className="inline-flex items-center gap-2 text-micro font-medium opacity-50 hover:opacity-100 hover:-translate-x-1 transition-all mb-12 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            All Programs
          </Link>
        </div>

        {/* Hero content — asymmetric layout */}
        <div className="container-site relative z-10 grid md:grid-cols-12 gap-8 items-end pb-0">
          {/* Left: the headline block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 pb-16 md:pb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                className="badge font-bold text-[10px] tracking-widest"
                style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: lang.color, backdropFilter: 'blur(8px)' }}
              >
                {lang.hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-h1 tracking-[-0.02em] mb-6 leading-[1.08]">
              {lang.hero.title}
            </h1>
            <p className="font-display italic text-xl md:text-2xl text-ink/65 max-w-xl leading-relaxed font-light mb-10">
              {lang.hero.subtitle}
            </p>

            {/* Quick stats row */}
            {lang.stats && (
              <div className="flex flex-wrap gap-3 mb-12">
                {lang.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border bg-white/80 text-xs font-medium shadow-sm"
                    style={{ borderColor: colors.line, backdropFilter: 'blur(8px)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    {s.label}
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => onOpenConsultation({ type: 'language', data: lang })}
              className="btn-primary"
              style={{ backgroundColor: lang.color, boxShadow: `0 12px 32px -8px ${lang.color}50` }}
            >
              {lang.hero.cta}
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right: cinematic native script as visual anchor */}
          <div className="hidden md:flex absolute inset-y-0 right-0 w-[45%] items-center justify-end pr-8 md:pr-16 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display leading-[1.1] select-none whitespace-pre-line text-right"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                color: lang.color,
                opacity: 0.15,
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
              }}
            >
              {CINEMATIC_TEXTS[lang.slug] || lang.nativeName}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LEVELS — BENTO GRID ──────────────────────────────── */}
      {lang.levels && (
        <section className="py-20 md:py-28 border-t bg-paper" style={{ borderColor: colors.line }}>
          <div className="container-site">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
            >
              <div>
                <span className="text-micro font-medium opacity-45 block mb-3">Program Structure</span>
                <h2 className="font-display text-4xl md:text-5xl">Your learning pathway.</h2>
              </div>
              <p className="font-display italic text-ink/50 max-w-xs text-lg leading-relaxed">
                {lang.levels.length} distinct levels, each with a clear professional outcome.
              </p>
            </motion.div>

            {/* Bento-style grid — not a timeline */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-3 gap-4"
            >
              {lang.levels.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-lift flex flex-col"
                  style={{ borderColor: colors.line, backgroundColor: idx === 0 ? lang.bgTint : colors.paper }}
                >
                  {/* Top accent */}
                  <div
                    className="h-1"
                    style={{
                      backgroundColor: lang.color,
                      opacity: idx === 0 ? 1 : 0.3 + idx * 0.25,
                    }}
                  />
                  <div className="p-8 flex flex-col h-full">
                    {/* Level badge */}
                    <div className="flex items-center justify-between mb-8">
                      <span
                        className="font-display italic text-3xl md:text-4xl font-light"
                        style={{ color: lang.color }}
                      >
                        {step.level}
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-wide font-bold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${lang.color}15`,
                          color: lang.color,
                        }}
                      >
                        {`Step ${idx + 1}`}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl mb-4">{step.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed font-light flex-grow mb-8">
                      {step.desc}
                    </p>

                    {/* Outcomes list */}
                    {step.outcomes && (
                      <ul className="space-y-2 mb-6">
                        {step.outcomes.slice(0, 3).map((o, oi) => (
                          <li key={oi} className="flex items-center gap-2 text-xs text-ink/60">
                            <CheckCircle2 size={12} style={{ color: lang.color, opacity: 0.7, flexShrink: 0 }} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Duration */}
                    <div
                      className="flex items-center gap-2 text-[10px] uppercase tracking-wide font-semibold pt-5 border-t"
                      style={{ borderColor: colors.line, color: lang.color }}
                    >
                      <Clock size={12} />
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── HIGHLIGHTS — Visual list ─────────────────────────── */}
      {lang.highlights && (
        <section className="py-20 border-t" style={{ borderColor: colors.line, backgroundColor: colors.surface }}>
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: big statement */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-micro opacity-45 block mb-4">Program Highlights</span>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                  What makes<br />
                  <span className="italic" style={{ color: lang.color }}>this program</span><br />
                  different.
                </h2>
                <button
                  onClick={() => onOpenConsultation({ type: 'language', data: lang })}
                  className="btn-ghost group mt-6"
                  style={{ color: lang.color, borderColor: lang.color }}
                >
                  Get detailed syllabus
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Right: visual numbered list */}
              <motion.ul
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-0"
              >
                {lang.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-5 py-5 border-b last:border-0 group"
                    style={{ borderColor: colors.line }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide mt-1 shrink-0 w-8"
                      style={{ color: lang.color, opacity: 0.6 }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-base font-light leading-relaxed text-ink/80">{h}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>
      )}

      {/* ── CERTIFICATE SECTION ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface border-t" style={{ borderColor: colors.line }}>
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-micro font-medium opacity-45 block mb-3">Global Recognition</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">International<br/>Certification.</h2>
              <p className="font-display italic text-ink/60 text-lg leading-relaxed mb-8">
                Our curriculum aligns with the official international proficiency standards. Graduates are fully prepared to clear official global certification exams.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-ink/80">
                  <CheckCircle2 size={16} style={{ color: lang.color }} className="shrink-0" />
                  {lang.certificateName || "Official Language Proficiency Test preparation"}
                </li>
                <li className="flex items-center gap-3 text-sm text-ink/80">
                  <CheckCircle2 size={16} style={{ color: lang.color }} className="shrink-0" />
                  Mock exams, timed practices, and specialized test strategies
                </li>
                <li className="flex items-center gap-3 text-sm text-ink/80">
                  <CheckCircle2 size={16} style={{ color: lang.color }} className="shrink-0" />
                  Globally recognized for visas, university admissions, and employment
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">

              <div className="relative w-full rounded-[2rem] bg-paper p-8 border shadow-card flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-500" style={{ borderColor: colors.line }}>
                <Trophy size={48} className="mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500" style={{ color: lang.color }} />
                <h4 className="font-display text-xl mb-2">{lang.certificateName || "Proficiency Certificate"}</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: lang.color }}>Globally Validated</p>
                <p className="text-xs italic text-ink/50 leading-relaxed font-display">
                  "This certification is the gold standard for proving your proficiency to international employers."
                 </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling gallery of certificates */}
        <div className="mt-20 overflow-hidden relative">
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          
          <div className="marquee-row overflow-hidden">
            <motion.div 
              className="flex gap-4 px-4 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[
                "lang-0029.jpg", "lang-0030.jpg", "lang-0033.jpg",
                "lang-0034.jpg", "lang-0035.jpg", "lang-0039.jpg",
                "lang-0040.jpg", "lang-0041.jpg", "lang-0045.jpg",
                "lang-0052.jpg", "lang-0053.jpg", "lang-0054.jpg"
              ].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: colors.line }}>
                  <img 
                    src={`/images/languages/${img}`}
                    alt="Certificate"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Duplicate for infinite effect */}
              {[
                "lang-0029.jpg", "lang-0030.jpg", "lang-0033.jpg",
                "lang-0034.jpg", "lang-0035.jpg", "lang-0039.jpg",
                "lang-0040.jpg", "lang-0041.jpg", "lang-0045.jpg",
                "lang-0052.jpg", "lang-0053.jpg", "lang-0054.jpg"
              ].map((img, i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: colors.line }}>
                  <img 
                    src={`/images/languages/${img}`}
                    alt="Certificate"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ — Accordion ──────────────────────────────────── */}
      {lang.faq && <FAQSection faq={lang.faq} color={lang.color} />}

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      {lang.testimonials?.length > 0 && (
        <section className="py-24 border-t bg-paper" style={{ borderColor: colors.line }}>
          <div className="container-site">
            {lang.testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-12 items-center"
              >
                {/* Big quote number */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center">
                  <span className="font-display text-[6rem] leading-none opacity-[0.07]">"</span>
                </div>
                <div className="md:col-span-8">
                  <p className="font-display italic text-2xl md:text-3xl text-ink/80 leading-relaxed mb-10">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm text-white shadow-md shrink-0"
                      style={{ backgroundColor: lang.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t.name}</div>
                      <div className="text-[10px] opacity-50 uppercase tracking-wide">{t.role} · {t.outcome}</div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:col-span-3 justify-end">
                  <div
                    className="rounded-2xl p-8 text-center border"
                    style={{ borderColor: colors.line, backgroundColor: lang.bgTint }}
                  >
                    <div className="font-display text-4xl mb-2" style={{ color: lang.color }}>92%</div>
                    <div className="text-[9px] uppercase tracking-wide opacity-50">Pass rate</div>
                    <div className="w-full h-px my-4" style={{ backgroundColor: colors.line }} />
                    <div className="font-display text-4xl mb-2" style={{ color: lang.color }}>1.2k+</div>
                    <div className="text-[9px] uppercase tracking-wide opacity-50">Learners</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: lang.color }}
      >
        {/* Large character in bg */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none select-none"
        >
          <span
            className="font-display text-[20vw] leading-none text-white/10"
          >
            {lang.displayChar}
          </span>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container-site relative z-10"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 block mb-6">
              Study with Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight">
              Request syllabus<br />&amp; cohorts.
            </h2>
            <p className="font-display italic text-white/65 text-xl md:text-2xl mb-10 leading-relaxed max-w-lg">
              Get program timelines, fee structure, and batch dates for {lang.card.title}.
            </p>
            <button
              onClick={() => onOpenConsultation({ type: 'language', data: lang })}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-[11px] uppercase tracking-wide font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: 'white', color: lang.color }}
            >
              Get Class Details <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

/**
 * FAQSection — accordion, not a static list.
 */
function FAQSection({ faq, color }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 border-t" style={{ borderColor: colors.line, backgroundColor: colors.paper }}>
      <div className="container-site">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <span className="text-micro opacity-45 block mb-4">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Questions<br />answered.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-8 space-y-0"
          >
            {faq.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-b last:border-0"
                style={{ borderColor: colors.line }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span
                    className="font-display text-lg md:text-xl leading-snug transition-colors"
                    style={{ color: openIdx === i ? color : undefined }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 mt-1 opacity-40 transition-all duration-300 ${openIdx === i ? 'rotate-180 opacity-80' : ''}`}
                    style={{ color: openIdx === i ? color : undefined }}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIdx === i ? 'auto' : 0, opacity: openIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-ink/60 text-sm md:text-base leading-relaxed font-light pb-6">
                    {item.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
