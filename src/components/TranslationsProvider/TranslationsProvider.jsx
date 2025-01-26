'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/src/utils/translations/i18n';
import { createInstance } from 'i18next';

export default function TranslationsProvider({ children, namespaces, resources }) {
  const i18n = createInstance();

  initTranslations(namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}