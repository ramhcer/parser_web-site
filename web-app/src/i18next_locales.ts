import ru from './locales/ru.json'
import en from './locales/en.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en }
    },
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n