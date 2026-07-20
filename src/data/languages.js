/**
 * VISHWA LANGUAGES — Languages Registry
 * Central import point for all language data.
 * To add a new language: create the data file, import it here, add to registry.
 * Zero React code changes needed.
 */

import { japanese } from './languages/japanese';
import { german    } from './languages/german';
import { french    } from './languages/french';
import { spanish   } from './languages/spanish';
import { mandarin  } from './languages/mandarin';
import { korean    } from './languages/korean';
import { english   } from './languages/english';
import { ielts     } from './languages/ielts';
import { sanskrit  } from './languages/sanskrit';

// Registry: all languages indexed by slug
export const languages = {
  japanese,
  german,
  french,
  spanish,
  mandarin,
  korean,
  english,
  ielts,
  sanskrit,
};

const imageMap = {
  japanese: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
  german: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=800&auto=format&fit=crop',
  french: '/images/france_eiffel_tower_1784468827430.png',
  spanish: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop',
  mandarin: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop',
  korean: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&auto=format&fit=crop',
  english: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  ielts: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
  sanskrit: '/images/sanskrit_temple_1784468838593.png',
};

// Ordered catalogue for display
export const languageCatalogue = [japanese, german, french, spanish, mandarin, korean, english, ielts, sanskrit].map(lang => ({
  ...lang,
  countryImage: imageMap[lang.slug]
}));

// Helper: get language by slug
export const getLanguage = (slug) => languageCatalogue.find(l => l.slug === slug) ?? null;
