import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ImprintPage from '@/pages/ImprintPage.vue'
import NewsletterSuccessPage from '@/pages/NewsletterSuccessPage.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Energie Pferd – Selbstbegegnung im Raum der Pferde' },
    },
    {
      path: '/newsletter-erfolgreich',
      name: 'newsletter-success',
      component: NewsletterSuccessPage,
      meta: { title: 'Anmeldung bestätigt – Energie Pferd' },
    },
    {
      path: '/impressum',
      name: 'imprint',
      component: ImprintPage,
      meta: { title: 'Impressum – Energie Pferd' },
    },
    {
      path: '/datenschutz',
      name: 'privacy',
      component: PrivacyPolicyPage,
      meta: { title: 'Datenschutz – Energie Pferd' },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'string') document.title = to.meta.title
})

export default router
