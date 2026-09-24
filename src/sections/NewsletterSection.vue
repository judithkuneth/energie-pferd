<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import RevealOnScroll from '@/components/RevealOnScroll.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { t } = useI18n()
const { locale, privacyLocation } = useSiteLocale()
const formUrl = 'https://95df7f5d.sibforms.com/v2/serve/MUIFAHdGbRbw2L9dSfjzawk5IfIPCGQ3AYrQq1GXejrCC_wZcHtjdaRHhyXbSaS1OE2LCkVZAnQCU6H4rTD2A9QkZcnK63sR027dH-VOaWw54xckuCRcThLuQKmL5rRHytWhOiraitwReHPX9DpFbyCfsmCdceojDkcCnFu2O0KNTzq_RtBRY8tSSDifRaX3_3uLheG3FqotMpMYuA=='
</script>

<template>
  <section id="newsletter" class="scroll-mt-24 pb-8 pt-1 sm:pb-10">
    <div class="container-page">
      <RevealOnScroll as="div">
        <div class="mx-auto max-w-2xl border-t border-taupe-200/60 py-6 sm:py-7">
          <iframe
            :src="formUrl"
            :title="locale === 'en' ? 'Brevo newsletter sign-up form' : 'Brevo-Newsletter-Anmeldung'"
            width="540"
            height="480"
            loading="lazy"
            class="newsletter-frame"
            allowfullscreen
          ></iframe>
          <p class="mt-3 text-center text-xs leading-relaxed text-taupe-600">
            {{ locale === 'en' ? 'Form not displaying?' : 'Formular wird nicht angezeigt?' }}
            <a :href="formUrl" target="_blank" rel="noopener noreferrer" class="underline">
              {{ locale === 'en' ? 'Open directly' : 'Direkt öffnen' }}
            </a>
            <span aria-hidden="true"> · </span>
            <RouterLink :to="privacyLocation" class="underline">{{ t('newsletter.privacy') }}</RouterLink>
          </p>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.newsletter-frame {
  display: block;
  width: 100%;
  max-width: 540px;
  height: 480px;
  margin: 20px auto 0;
  border: 0;
}
@media (max-width: 639px) {
  .newsletter-frame { height: 560px; }
  #newsletter:target { min-height: calc(100svh - 4.25rem); }
}
</style>
