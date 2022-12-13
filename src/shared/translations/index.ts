import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLanguage, setLanguage} from '../utils/storageHandler';
import meager from './mearger';
import RNRestart from 'react-native-restart';
const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  // Since we set async to true, detect has now callback function...
  detect: async (callback: (lang: string) => undefined) => {
    const language = await getLanguage();
    return callback(language ?? 'en');
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => setLanguage(lng),
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: meager,
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    fallbackLng: 'en',
    debug: false, // process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
  });

export default i18n;

export const changeAppLanguage = async () => {
  var currentLanguage = await getLanguage();
  i18n.changeLanguage(currentLanguage === 'ar' ? 'en' : 'ar').then(() => {
    RNRestart.Restart();
  });
};
