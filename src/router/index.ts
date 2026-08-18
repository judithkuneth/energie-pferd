import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ImprintPage from '@/pages/ImprintPage.vue'
import NewsletterSuccessPage from '@/pages/NewsletterSuccessPage.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const siteUrl = 'https://energie-pferd.at'
const defaultDescription =
  'Energetische Körperarbeit, Selbstführung und persönliche Begleitung mit Pferden in Glanegg – rund 20 Minuten von Klagenfurt.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Pferdegestützte Begleitung in Kärnten | Energie Pferd',
        description: defaultDescription,
        robots: 'index, follow, max-image-preview:large',
        canonicalPath: '/',
      },
    },
    {
      path: '/newsletter',
      redirect: { name: 'home', hash: '#newsletter' },
    },
    {
      path: '/newsletter-erfolgreich',
      name: 'newsletter-success',
      component: NewsletterSuccessPage,
      meta: {
        title: 'Anmeldung bestätigt | Energie Pferd',
        description: 'Deine Anmeldung bei Energie Pferd wurde erfolgreich bestätigt.',
        robots: 'noindex, nofollow',
        canonicalPath: '/newsletter-erfolgreich',
      },
    },
    {
      path: '/impressum',
      name: 'imprint',
      component: ImprintPage,
      meta: {
        title: 'Impressum | Energie Pferd',
        description: 'Impressum und Anbieterinformationen von Energie Pferd.',
        robots: 'noindex, follow',
        canonicalPath: '/impressum',
      },
    },
    {
      path: '/datenschutz',
      name: 'privacy',
      component: PrivacyPolicyPage,
      meta: {
        title: 'Datenschutz | Energie Pferd',
        description: 'Datenschutzerklärung von Energie Pferd.',
        robots: 'noindex, follow',
        canonicalPath: '/datenschutz',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
      meta: {
        title: 'Seite nicht gefunden | Energie Pferd',
        description: 'Die gesuchte Seite wurde nicht gefunden.',
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

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'Energie Pferd'
  const description =
    typeof to.meta.description === 'string' ? to.meta.description : defaultDescription
  const robots = typeof to.meta.robots === 'string' ? to.meta.robots : 'noindex, nofollow'
  const canonicalPath =
    typeof to.meta.canonicalPath === 'string' ? to.meta.canonicalPath : undefined
  const canonicalUrl = canonicalPath ? new URL(canonicalPath, siteUrl).href : siteUrl

  document.title = title
  setNamedMeta('description', description)
  setNamedMeta('robots', robots)
  setNamedMeta('twitter:title', title)
  setNamedMeta('twitter:description', description)
  setPropertyMeta('og:title', title)
  setPropertyMeta('og:description', description)
  setPropertyMeta('og:url', canonicalUrl)
  setCanonical(canonicalPath)
})

export default router
