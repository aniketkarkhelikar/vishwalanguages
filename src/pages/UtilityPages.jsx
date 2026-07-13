import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { pageSlideUp, fadeUp } from '@/animations/motion';
import { colors } from '@/lib/tokens';
import { site } from '@/data/site';

export function ComingSoonPage() {
  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible" exit="exit"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div variants={fadeUp} className="text-center max-w-xl px-6">
        <span className="text-micro text-terracotta font-medium block mb-8">Coming Soon</span>
        <h1 className="font-display text-h1 leading-tight mb-8">
          Self-Paced Learning<br /><span className="italic">is on its way.</span>
        </h1>
        <p className="font-display italic text-ink/65 text-xl mb-12 leading-relaxed">
          Learn Japanese or German at your own pace. With structured video lessons, assessments, and progress tracking.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="text-micro opacity-40 flex gap-8">
            <span>Video Lessons</span>
            <span>Progress Tracking</span>
            <span>Certificates</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function NotFoundPage() {
  return (
    <motion.div variants={pageSlideUp} initial="hidden" animate="visible"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="text-center max-w-md px-6">
        <span className="font-display text-[8rem] text-ink/5 leading-none block">404</span>
        <h1 className="font-display text-h2 -mt-8 mb-6">Page not found.</h1>
        <p className="text-ink/50 mb-10">The page you're looking for has moved or doesn't exist.</p>
        <a href="/" className="btn-ghost inline-flex group">
          Return Home <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
