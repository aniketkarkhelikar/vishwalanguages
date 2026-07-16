import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { RootLayout } from '@/components/layout/RootLayout';
import { ConsultationModal } from '@/components/forms/ConsultationModal';
import { Toast } from '@/components/ui/Toast';

// Lazy load pages for code splitting
const HomePage              = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const LanguagesIndexPage    = lazy(() => import('@/pages/LanguagesIndexPage').then((m) => ({ default: m.LanguagesIndexPage })));
const LanguagePage          = lazy(() => import('@/pages/LanguagePage').then((m) => ({ default: m.LanguagePage })));
const CorporateTrainingPage = lazy(() => import('@/pages/CorporateTrainingPage').then((m) => ({ default: m.CorporateTrainingPage })));
const InterpretationPage    = lazy(() => import('@/pages/InterpretationPage').then((m) => ({ default: m.InterpretationPage })));
const HealthcarePlacementPage = lazy(() => import('@/pages/HealthcarePlacementPage').then((m) => ({ default: m.HealthcarePlacementPage })));
const ComingSoonPage        = lazy(() => import('@/pages/UtilityPages').then((m) => ({ default: m.ComingSoonPage })));
const NotFoundPage          = lazy(() => import('@/pages/UtilityPages').then((m) => ({ default: m.NotFoundPage })));
const AboutPage             = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));

// Minimal page loader
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-px bg-ink/20 animate-pulse" />
    </div>
  );
}

/**
 * App — root component.
 * Manages global state: consultation modal, toast.
 * Handles routing with AnimatePresence for page transitions.
 */
export function App() {
  const [consultationOpen, setConsultationOpen]   = useState(false);
  const [consultationContext, setConsultationContext] = useState({ type: 'general' });
  const [toastMsg, setToastMsg]                   = useState('');
  const location = useLocation();

  // Scroll to top of page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openConsultation = (context = { type: 'general' }) => {
    setConsultationContext(context);
    setConsultationOpen(true);
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 4000);
  };

  return (
    <>
      <RootLayout onOpenConsultation={() => openConsultation({ type: 'general' })}>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/"
                element={<HomePage onOpenConsultation={openConsultation} onShowToast={showToast} />}
              />
              <Route path="/languages"
                element={<LanguagesIndexPage onShowToast={showToast} />}
              />
              <Route path="/languages/:slug"
                element={<LanguagePage onOpenConsultation={openConsultation} />}
              />
              <Route path="/corporate-training"
                element={<CorporateTrainingPage onOpenConsultation={openConsultation} />}
              />
              <Route path="/interpretation-services"
                element={<InterpretationPage onOpenConsultation={openConsultation} />}
              />
              <Route path="/healthcare-placement"
                element={<HealthcarePlacementPage onOpenConsultation={openConsultation} />}
              />
              <Route path="/coming-soon"
                element={<ComingSoonPage />}
              />
              <Route path="/about"
                element={<AboutPage />}
              />
              <Route path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </RootLayout>

      {/* Global overlays */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        context={consultationContext}
      />
      <Toast
        message={toastMsg}
        isVisible={!!toastMsg}
        onClose={() => setToastMsg('')}
      />
    </>
  );
}
