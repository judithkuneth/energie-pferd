<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import OffersSection from '@/sections/OffersSection.vue'
import VibeGallerySection from '@/sections/VibeGallerySection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import NewsletterSection from '@/sections/NewsletterSection.vue'
import SiteFooter from '@/sections/SiteFooter.vue'

const siteHeader = ref<{ openBooking: () => void } | null>(null)
const { t } = useI18n()
</script>

<template>
  <div class="min-h-dvh bg-sand-50 font-sans">
    <a
      href="#top"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-taupe-800 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-sand-50"
    >
      {{ t('navigation.skipToContent') }}
    </a>

    <SiteHeader ref="siteHeader" />

    <main>
      <HeroSection @book="siteHeader?.openBooking()" />
      <AboutSection />
      <VibeGallerySection />
      <OffersSection @book="siteHeader?.openBooking()" />
      <ContactSection @book="siteHeader?.openBooking()" />
      <NewsletterSection />
    </main>

    <SiteFooter />
  </div>
</template>
