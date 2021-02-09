import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import he from '../locales/he.json';
import en from '../locales/en.json';

// toDo: how to use the locale type correctly on the fallbackLng
// type Locale = 'en' | 'he';

export const loadLocale = (locale: string): void => {
  console.log('deivceLocales', locale);
  i18next.use(initReactI18next).init({
    resources: {en, he},
    lng: locale,
    fallbackLng: 'en',
    defaultNS: 'common',
    fallbackNS: 'common',
    debug: true,
  });
};
