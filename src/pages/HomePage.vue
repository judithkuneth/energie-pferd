<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteNav from '@/components/SiteNav.vue'
import BookingModal from '@/components/BookingModal.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import OffersSection from '@/sections/OffersSection.vue'
import VibeGallerySection from '@/sections/VibeGallerySection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import NewsletterSection from '@/sections/NewsletterSection.vue'
import SiteFooter from '@/sections/SiteFooter.vue'

const isBookingOpen = ref(false)
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

    <SiteNav @book="isBookingOpen = true" />

    <main>
      <HeroSection @book="isBookingOpen = true" />
      <AboutSection />
      <VibeGallerySection />
      <OffersSection />
      <ContactSection @book="isBookingOpen = true" />
      <NewsletterSection />
    </main>

    <SiteFooter />

    <BookingModal :open="isBookingOpen" @close="isBookingOpen = false" />
  </div>
</template>
