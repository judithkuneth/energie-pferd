import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { AppLocale } from '@/i18n'

export function useSiteLocale() {
  const route = useRoute()
  const router = useRouter()

  const locale = computed<AppLocale>(() => (route.meta.locale === 'en' ? 'en' : 'de'))
  const homeLocation = computed(() => ({ name: `home-${locale.value}` }))
  const privacyLocation = computed(() => ({ name: `privacy-${locale.value}` }))
  const legalNoticeLocation = computed(() => ({ name: `legal-notice-${locale.value}` }))

  function localizedLocation(routeKey: string, targetLocale: AppLocale = locale.value) {
    return { name: `${routeKey}-${targetLocale}` }
  }

  const alternateLocale = computed<AppLocale>(() => (locale.value === 'de' ? 'en' : 'de'))
  const alternateLocation = computed(() => {
    const routeKey = typeof route.meta.routeKey === 'string' ? route.meta.routeKey : 'home'
    const candidate = localizedLocation(routeKey, alternateLocale.value)
    if (!router.hasRoute(candidate.name)) return localizedLocation('home', alternateLocale.value)
    return { ...candidate, hash: route.hash }
  })

  return {
    locale,
    alternateLocale,
    alternateLocation,
    homeLocation,
    privacyLocation,
    legalNoticeLocation,
    localizedLocation,
  }
}
