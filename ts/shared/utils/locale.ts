import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import he from '../locales/he.json';
import en from '../locales/en.json';

type Locale = 'en' | 'he';

export const loadLocale = (locale: Locale): void => {
  i18next.use(initReactI18next).init({
    resources: {en, he},
    lng: locale,
    fallbackNS: 'common',
    defaultNS: 'common',
    debug: true,
  });
};
