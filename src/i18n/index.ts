import { createI18n } from 'vue-i18n'
import de from './locales/de'
import en from './locales/en'

export const supportedLocales = ['de', 'en'] as const
export type AppLocale = (typeof supportedLocales)[number]

export const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'de',
  messages: { de, en },
})

export function setAppLocale(locale: AppLocale) {
  i18n.global.locale.value = locale
  document.documentElement.lang = locale === 'de' ? 'de-AT' : 'en'
}

export function translate(key: string, params?: Record<string, string | number>) {
  return params ? i18n.global.t(key, params) : i18n.global.t(key)
}
