import { createI18n } from 'vue-i18n'

import en from './en.json'
import fr from './fr.json'

export const FALLBACK_LOCALE = "en";

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: FALLBACK_LOCALE,
  messages: { en, fr }
})

export type AvailableLocales = typeof i18n.global.availableLocales[number]

export const isValidLang = (lang: string): lang is AvailableLocales => (i18n.global.availableLocales as string[]).includes(lang)