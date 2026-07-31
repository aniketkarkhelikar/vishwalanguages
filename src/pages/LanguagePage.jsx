import { useParams, Navigate } from 'react-router-dom';
import { getLanguage } from '@/data/languages';
import { LanguageTemplate } from '@/components/templates/LanguageTemplate';
import { SEO } from '@/components/SEO';

/**
 * LanguagePage — route handler for /languages/:slug
 * Looks up language data by slug, renders via LanguageTemplate.
 * No per-language code needed.
 */
export function LanguagePage({ onOpenConsultation }) {
  const { slug } = useParams();
  const language = getLanguage(slug);

  // Unknown slug → 404
  if (!language) return <Navigate to="/languages" replace />;

  return (
    <>
      <SEO 
        title={`${language.card.title} - Best ${language.card.title} Classes in Nashik`}
        description={`Learn ${language.card.title} in Nashik with expert trainers at Vishwa Languages. Our courses include beginner to advanced level training.`}
        keywords={`Best ${language.card.title} classes in Nashik, ${language.card.title} classes near me, ${language.card.title} language course`}
      />
      <LanguageTemplate
        language={language}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
}
