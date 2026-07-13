import { useParams, Navigate } from 'react-router-dom';
import { getLanguage } from '@/data/languages';
import { LanguageTemplate } from '@/components/templates/LanguageTemplate';

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
    <LanguageTemplate
      language={language}
      onOpenConsultation={onOpenConsultation}
    />
  );
}
