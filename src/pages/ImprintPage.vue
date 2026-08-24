<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/sections/SiteFooter.vue'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-dvh bg-sand-50 font-sans text-taupe-800">
    <SiteHeader />

    <main class="container-page py-12 sm:py-16">
      <article class="mx-auto max-w-3xl">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">
          {{ t('common.legal') }}
        </p>
        <h1 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          {{ t('legalNotice.title') }}
        </h1>

        <div class="imprint-content mt-10 space-y-10">
          <section>
            <h2>{{ t('legalNotice.ownerTitle') }}</h2>
            <p>
              Judith Kuneth<br />
              Anzengruberstraße 19/1<br />
              9020 Klagenfurt<br />
              {{ t('legalNotice.country') }}
            </p>
            <p>
              {{ t('legalNotice.email') }}:
              <a href="mailto:judith.kuneth@gmail.com">judith.kuneth@gmail.com</a><br />
              {{ t('legalNotice.phone') }}: <a href="tel:+4367683555785">+43 676 83555785</a>
            </p>
          </section>

          <section>
            <h2>{{ t('legalNotice.businessTitle') }}</h2>
            <p>{{ t('legalNotice.businessText') }}</p>
          </section>

          <section>
            <h2>{{ t('legalNotice.domainTitle') }}</h2>
            <p>
              World4You Internet Services GmbH<br />
              Wolfgang-Pauli-Straße 2, BT3<br />
              4020 Linz<br />
              {{ t('legalNotice.country') }}<br />
              <a href="https://www.world4you.com/" target="_blank" rel="noopener">
                www.world4you.com
              </a>
            </p>
          </section>

          <section>
            <h2>{{ t('legalNotice.hostingTitle') }}</h2>
            <p>
              Netlify, Inc.<br />
              101 2nd Street<br />
              San Francisco, CA 94105<br />
              USA<br />
              <a href="https://www.netlify.com/" target="_blank" rel="noopener">
                www.netlify.com
              </a>
            </p>
          </section>

          <section>
            <h2>{{ t('legalNotice.liabilityTitle') }}</h2>
            <p>{{ t('legalNotice.liabilityText') }}</p>
          </section>

          <section>
            <h2>{{ t('legalNotice.copyrightTitle') }}</h2>
            <p>{{ t('legalNotice.copyrightText') }}</p>
          </section>
        </div>
      </article>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.imprint-content h2 {
  margin-bottom: 0.75rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--color-taupe-900);
}

.imprint-content p {
  margin-top: 0.75rem;
  font-size: 0.925rem;
  line-height: 1.8;
  color: var(--color-taupe-700);
}

.imprint-content a {
  color: var(--color-primary-600);
  text-underline-offset: 3px;
}
</style>
