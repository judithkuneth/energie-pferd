import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ImprintPage from '@/pages/ImprintPage.vue'
import NewsletterSuccessPage from '@/pages/NewsletterSuccessPage.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { setAppLocale, translate, type AppLocale } from '@/i18n'

const siteUrl = 'https://energie-pferd.at'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-de',
      component: HomePage,
      meta: {
        locale: 'de',
        routeKey: 'home',
        titleKey: 'seo.homeTitle',
        descriptionKey: 'seo.homeDescription',
        robots: 'index, follow, max-image-preview:large',
        canonicalPath: '/',
        dePath: '/',
        enPath: '/en/',
      },
    },
    {
      path: '/en',
      name: 'home-en',
      component: HomePage,
      meta: {
        locale: 'en',
        routeKey: 'home',
        titleKey: 'seo.homeTitle',
        descriptionKey: 'seo.homeDescription',
        robots: 'index, follow, max-image-preview:large',
        canonicalPath: '/en/',
        dePath: '/',
        enPath: '/en/',
      },
    },
    { path: '/newsletter', redirect: { name: 'home-de', hash: '#newsletter' } },
    { path: '/en/newsletter', redirect: { name: 'home-en', hash: '#newsletter' } },
    {
      path: '/newsletter-success',
      name: 'newsletter-success-de',
      component: NewsletterSuccessPage,
      meta: {
        locale: 'de',
        routeKey: 'newsletter-success',
        titleKey: 'seo.newsletterSuccessTitle',
        descriptionKey: 'seo.newsletterSuccessDescription',
        robots: 'noindex, nofollow',
        canonicalPath: '/newsletter-success',
        dePath: '/newsletter-success',
        enPath: '/en/newsletter-success',
      },
    },
    {
      path: '/en/newsletter-success',
      name: 'newsletter-success-en',
      component: NewsletterSuccessPage,
      meta: {
        locale: 'en',
        routeKey: 'newsletter-success',
        titleKey: 'seo.newsletterSuccessTitle',
        descriptionKey: 'seo.newsletterSuccessDescription',
        robots: 'noindex, nofollow',
        canonicalPath: '/en/newsletter-success',
        dePath: '/newsletter-success',
        enPath: '/en/newsletter-success',
      },
    },
    {
      path: '/legal-notice',
      name: 'legal-notice-de',
      component: ImprintPage,
      meta: {
        locale: 'de',
        routeKey: 'legal-notice',
        titleKey: 'seo.legalNoticeTitle',
        descriptionKey: 'seo.legalNoticeDescription',
        robots: 'noindex, follow',
        canonicalPath: '/legal-notice',
        dePath: '/legal-notice',
        enPath: '/en/legal-notice',
      },
    },
    {
      path: '/en/legal-notice',
      name: 'legal-notice-en',
      component: ImprintPage,
      meta: {
        locale: 'en',
        routeKey: 'legal-notice',
        titleKey: 'seo.legalNoticeTitle',
        descriptionKey: 'seo.legalNoticeDescription',
        robots: 'noindex, follow',
        canonicalPath: '/en/legal-notice',
        dePath: '/legal-notice',
        enPath: '/en/legal-notice',
      },
    },
    {
      path: '/privacy',
      name: 'privacy-de',
      component: PrivacyPolicyPage,
      meta: {
        locale: 'de',
        routeKey: 'privacy',
        titleKey: 'seo.privacyTitle',
        descriptionKey: 'seo.privacyDescription',
        robots: 'noindex, follow',
        canonicalPath: '/privacy',
        dePath: '/privacy',
        enPath: '/en/privacy',
      },
    },
    {
      path: '/en/privacy',
      name: 'privacy-en',
      component: PrivacyPolicyPage,
      meta: {
        locale: 'en',
        routeKey: 'privacy',
        titleKey: 'seo.privacyTitle',
        descriptionKey: 'seo.privacyDescription',
        robots: 'noindex, follow',
        canonicalPath: '/en/privacy',
        dePath: '/privacy',
        enPath: '/en/privacy',
      },
    },
    { path: '/newsletter-erfolgreich', redirect: { name: 'newsletter-success-de' } },
    { path: '/impressum', redirect: { name: 'legal-notice-de' } },
    { path: '/datenschutz', redirect: { name: 'privacy-de' } },
    {
      path: '/en/:pathMatch(.*)*',
      name: 'not-found-en',
      component: NotFoundPage,
      meta: {
        locale: 'en',
        routeKey: 'not-found',
        titleKey: 'seo.notFoundTitle',
        descriptionKey: 'seo.notFoundDescription',
        robots: 'noindex, nofollow',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found-de',
      component: NotFoundPage,
      meta: {
        locale: 'de',
        routeKey: 'not-found',
        titleKey: 'seo.notFoundTitle',
        descriptionKey: 'seo.notFoundDescription',
        robots: 'noindex, nofollow',
      },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

function setNamedMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.appendChild(element)
  }
  element.content = content
}

function setPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.content = content
}

function setCanonical(path: string | undefined) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!path) {
    element?.remove()
    return
  }
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  element.href = new URL(path, siteUrl).href
}

function setAlternate(hreflang: string, path: string | undefined) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!path) {
    element?.remove()
    return
  }
  if (!element) {
    element = document.createElement('link')
    element.rel = 'alternate'
    element.hreflang = hreflang
    document.head.appendChild(element)
  }
  element.href = new URL(path, siteUrl).href
}

router.beforeEach((to) => {
  const locale: AppLocale = to.meta.locale === 'en' ? 'en' : 'de'
  setAppLocale(locale)
})

router.afterEach((to) => {
  const locale: AppLocale = to.meta.locale === 'en' ? 'en' : 'de'
  const titleKey = typeof to.meta.titleKey === 'string' ? to.meta.titleKey : 'seo.notFoundTitle'
  const descriptionKey =
    typeof to.meta.descriptionKey === 'string'
      ? to.meta.descriptionKey
      : 'seo.notFoundDescription'
  const title = translate(titleKey)
  const description = translate(descriptionKey)
  const robots = typeof to.meta.robots === 'string' ? to.meta.robots : 'noindex, nofollow'
  const canonicalPath =
    typeof to.meta.canonicalPath === 'string' ? to.meta.canonicalPath : undefined
  const canonicalUrl = canonicalPath ? new URL(canonicalPath, siteUrl).href : siteUrl
  const dePath = typeof to.meta.dePath === 'string' ? to.meta.dePath : undefined
  const enPath = typeof to.meta.enPath === 'string' ? to.meta.enPath : undefined

  document.title = title
  setNamedMeta('description', description)
  setNamedMeta('robots', robots)
  setNamedMeta('twitter:title', title)
  setNamedMeta('twitter:description', description)
  setPropertyMeta('og:title', title)
  setPropertyMeta('og:description', description)
  setPropertyMeta('og:url', canonicalUrl)
  setPropertyMeta('og:locale', locale === 'de' ? 'de_AT' : 'en_GB')
  setPropertyMeta('og:locale:alternate', locale === 'de' ? 'en_GB' : 'de_AT')
  setCanonical(canonicalPath)
  setAlternate('de-AT', dePath)
  setAlternate('en', enPath)
  setAlternate('x-default', dePath)
})

export default router
