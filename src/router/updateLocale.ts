import { FALLBACK_LOCALE, i18n, type AvailableLocales, isValidLang } from '@/locales/i18n'

export const updateLocale = (lang: string) => {
  const newLang = isValidLang(lang) ? lang : FALLBACK_LOCALE

  if (i18n.global.locale !== newLang) {
    i18n.global.locale = newLang
  }
}