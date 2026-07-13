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

// Ordered catalogue for display
export const languageCatalogue = [japanese, german, french, spanish, mandarin, korean, english, ielts, sanskrit];

// Helper: get language by slug
export const getLanguage = (slug) => languages[slug] ?? null;
