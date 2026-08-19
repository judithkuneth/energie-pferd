<template>
  <div class="min-h-dvh bg-sand-50 font-sans text-taupe-800">
    <header class="border-b border-taupe-200/50 bg-sand-50/90">
      <div class="container-page flex items-center justify-between gap-4 py-4">
        <RouterLink
          :to="homeLocation"
          class="font-serif text-lg font-semibold text-taupe-900 no-underline"
        >
          Energie Pferd
        </RouterLink>
        <RouterLink
          :to="homeLocation"
          class="text-sm font-medium text-taupe-700 no-underline transition hover:text-primary-600"
        >
          {{ t('common.backToWebsite') }}
        </RouterLink>
      </div>
    </header>

    <main class="container-page py-12 sm:py-16">
      <article class="mx-auto max-w-3xl">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">
          {{ t('common.legal') }}
        </p>
        <h1 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          {{ t('privacyPolicy.title') }}
        </h1>
        <p class="mt-5 leading-relaxed text-taupe-700">
          {{ t('privacyPolicy.intro') }}
        </p>

        <div class="privacy-content mt-10 space-y-10">
          <section>
            <h2>{{ t('privacyPolicy.responsibleTitle') }}</h2>
            <p>
              Judith Kuneth<br />
              Anzengruberstraße 19/1<br />
              9020 Klagenfurt<br />
              {{ t('legalNotice.country') }}<br />

              {{ t('legalNotice.email') }}:
              <a href="mailto:judith.kuneth@gmail.com">judith.kuneth@gmail.com</a><br />
              {{ t('legalNotice.phone') }}: <a href="tel:+4367683555785">+43 676 83555785</a>
            </p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.hostingTitle') }}</h2>
            <p>{{ t('privacyPolicy.hostingP1') }}</p>
            <p>
              {{ t('privacyPolicy.hostingP2') }} {{ t('privacyPolicy.netlifyLinks') }}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener">
                {{ t('privacyPolicy.netlifyPrivacyLink') }}</a
              > ·
              <a href="https://www.netlify.com/gdpr-ccpa/" target="_blank" rel="noopener">
                {{ t('privacyPolicy.netlifyGdprLink') }}</a
              >.
            </p>
            <p>
              {{ t('privacyPolicy.hostingP3') }}
              <a
                href="https://www.world4you.com/unternehmen/datenschutzerklaerung"
                target="_blank"
                rel="noopener"
              >
                {{ t('privacyPolicy.world4youLink') }}</a
              >.
            </p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.contactTitle') }}</h2>
            <p>{{ t('privacyPolicy.contactP1') }}</p>
            <p>{{ t('privacyPolicy.contactP2') }}</p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.zeegTitle') }}</h2>
            <p>{{ t('privacyPolicy.zeegP1') }}</p>
            <p>
              {{ t('privacyPolicy.zeegP2') }}
              <a :href="zeegPrivacyUrl" target="_blank" rel="noopener">
                {{ t('privacyPolicy.zeegLink') }}</a
              >.
            </p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.brevoTitle') }}</h2>
            <p>{{ t('privacyPolicy.brevoP1') }}</p>
            <p>
              {{ t('privacyPolicy.brevoP2') }}
              <a :href="brevoPrivacyUrl" target="_blank" rel="noopener">
                {{ t('privacyPolicy.brevoLink') }}</a
              >.
            </p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.externalTitle') }}</h2>
            <p>{{ t('privacyPolicy.externalP1') }}</p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.retentionTitle') }}</h2>
            <p>{{ t('privacyPolicy.retentionP1') }}</p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.rightsTitle') }}</h2>
            <p>{{ t('privacyPolicy.rightsP1') }}</p>
            <p>
              {{ t('privacyPolicy.rightsP2') }}
              <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener">www.dsb.gv.at</a>.
            </p>
          </section>

          <section>
            <h2>{{ t('privacyPolicy.securityTitle') }}</h2>
            <p>{{ t('privacyPolicy.securityP1') }}</p>
            <p>{{ t('privacyPolicy.updated') }}</p>
          </section>
        </div>
      </article>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteFooter from '@/sections/SiteFooter.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { t } = useI18n()
const { homeLocation, locale } = useSiteLocale()
const zeegPrivacyUrl = computed(() =>
  locale.value === 'en' ? 'https://zeeg.me/en/legal/privacy' : 'https://zeeg.me/de/legal/privacy',
)
const brevoPrivacyUrl = computed(() =>
  locale.value === 'en'
    ? 'https://www.brevo.com/legal/privacypolicy/'
    : 'https://www.brevo.com/de/legal/privacypolicy/',
)
</script>

<style scoped>
.privacy-content h2 {
  margin-bottom: 0.75rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--color-taupe-900);
}

.privacy-content p {
  margin-top: 0.75rem;
  font-size: 0.925rem;
  line-height: 1.8;
  color: var(--color-taupe-700);
}

.privacy-content a {
  color: var(--color-primary-600);
  text-underline-offset: 3px;
}
</style>
