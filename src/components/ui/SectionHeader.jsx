import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/motion';

/**
 * SectionHeader — reusable editorial section heading.
 *
 * Props:
 *   eyebrow   string  — small uppercase label above heading
 *   heading   string  — main heading
 *   body      string  — optional body text on the right
 *   accentColor string — for eyebrow color (defaults to terracotta)
 *   align     'left' | 'center'
 */
export function SectionHeader({ eyebrow, heading, body, accentColor = '#B85C38', align = 'left' }) {
  const isCenter = align === 'center';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-16 md:mb-24 flex flex-col ${isCenter ? 'items-center text-center' : 'md:flex-row justify-between items-end'}`}
    >
      <div className={`${isCenter ? 'max-w-2xl' : 'max-w-2xl'}`}>
        {eyebrow && (
          <span
            className="text-micro font-medium block mb-4"
            style={{ color: accentColor }}
          >
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-h2 leading-tight">{heading}</h2>
      </div>

      {body && !isCenter && (
        <p className="font-display italic text-ink/60 text-xl max-w-sm mt-8 md:mt-0 leading-relaxed border-l border-ink/10 pl-6">
          {body}
        </p>
      )}
      {body && isCenter && (
        <p className="font-display italic text-ink/60 text-lg max-w-lg mt-6 leading-relaxed">
          {body}
        </p>
      )}
    </motion.div>
  );
}

/**
 * StatPill — inline stat badge.
 * Usage: <StatPill icon={<Icon />} label="1,200+ learners" color={...} />
 */
export function StatPill({ icon, label, color }) {
  return (
    <div className="btn-outline flex items-center gap-2">
      {icon && <span style={{ color }}>{icon}</span>}
      <span className="text-[11px] uppercase tracking-wider font-medium opacity-80">{label}</span>
    </div>
  );
}

/**
 * Eyebrow — tiny uppercase category label.
 */
export function Eyebrow({ children, color = '#B85C38' }) {
  return (
    <span
      className="text-micro font-medium block mb-4"
      style={{ color }}
    >
      {children}
    </span>
  );
}
