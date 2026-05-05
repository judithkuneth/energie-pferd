<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue'
import HeroSection from '@/sections/HeroSection.vue'
import HeroInterludeImage from '@/sections/HeroInterludeImage.vue'
import AboutSection from '@/sections/AboutSection.vue'
import OffersSection from '@/sections/OffersSection.vue'
import PhilosophySection from '@/sections/PhilosophySection.vue'
import VibeGallerySection from '@/sections/VibeGallerySection.vue'
import TestimonialsSection from '@/sections/TestimonialsSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import SiteFooter from '@/sections/SiteFooter.vue'
</script>

<template>
  <div class="min-h-dvh bg-sand-50 font-sans">
    <a
      href="#top"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-taupe-800 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-sand-50"
    >
      Zum Inhalt springen
    </a>

    <SiteNav />

    <main>
      <HeroSection />
      <AboutSection />
      <!-- <HeroInterludeImage /> -->
      <VibeGallerySection />
      <OffersSection />
      <!-- <PhilosophySection /> -->
      <!-- <TestimonialsSection /> -->
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>
