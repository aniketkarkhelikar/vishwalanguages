import { motion } from 'framer-motion';
import { Building, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { corporateTraining } from '@/data/services/corporate';
import { fadeUp, staggerContainer } from '@/animations/motion';
import { colors } from '@/lib/tokens';

/**
 * CorporateSection — homepage preview of Corporate Training.
 * Dark section with grid pattern — preserved from original.
 */
export function CorporateSection({ onOpenConsultation }) {
  const d = corporateTraining;

  return (
    <section id="corporate-section" className="py-24 bg-ink text-white relative overflow-hidden scroll-m-10">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="corp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corp-grid)" />
        </svg>
      </div>

      <div className="max-w-prose mx-auto px-container md:px-container-md relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-micro font-medium opacity-50 block mb-6" style={{ color: colors.gold }}>
            {d.hero.eyebrow}
          </span>
          <h2 className="font-display text-h2 leading-tight mb-8">{d.hero.title}</h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10">{d.tagline}</p>

          <ul className="space-y-4 mb-12 text-sm text-white/80">
            {d.features.slice(0, 3).map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <CheckCircle2 size={16} style={{ color: colors.gold }} className="mt-1 shrink-0" />
                <div className="leading-relaxed">
                  <span className="font-medium text-white">{f.title}</span> — <span className="opacity-70">{f.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onOpenConsultation({ type: 'corporate' })}
            className="btn-corporate"
          >
            Request Corporate Proposal
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Right — stat cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {d.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`card-stat ${i === 1 ? 'mt-8' : ''}`}
            >
              {i === 0 ? <Building className="mb-6 opacity-80" size={32} style={{ color: colors.gold }} />
                       : <Users    className="mb-6 opacity-80" size={32} style={{ color: colors.gold }} />}
              <h4 className="font-display text-3xl mb-2">{stat.value}</h4>
              <p className="text-xs uppercase tracking-wider opacity-50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
