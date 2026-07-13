import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { toastEntrance } from '@/animations/motion';

/**
 * Toast notification — premium, minimal.
 * Usage: <Toast message="..." isVisible={bool} onClose={fn} />
 */
export function Toast({ message, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={toastEntrance}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200]
                     bg-ink text-white px-6 py-3 rounded-full shadow-2xl
                     flex items-center gap-3 text-sm font-medium whitespace-nowrap"
        >
          <Sparkles size={16} className="text-gold" />
          {message}
          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
