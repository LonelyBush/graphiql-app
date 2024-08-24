import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './launguages-text';
import store from '../../lib/store';

const savedLanguage = store.getState().language.language || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

store.subscribe(() => {
  const newLanguage = store.getState().language.language;
  if (newLanguage && i18n.language !== newLanguage) {
    i18n.changeLanguage(newLanguage);
  }
});

export default i18n;
