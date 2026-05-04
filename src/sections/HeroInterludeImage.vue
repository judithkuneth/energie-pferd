<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'

withDefaults(
  defineProps<{
    src?: string
    alt?: string
  }>(),
  {
    src: '/1000074839.jpg',
    alt: 'Pferde in weiter Landschaft – ruhiger Übergang.',
  },
)
</script>

<template>
  <section aria-label="Bild-Interlude" class="py-8 sm:py-10">
    <div class="container-page">
      <RevealOnScroll as="figure">
        <div class="card-surface overflow-hidden">
          <img
            :src="src"
            :alt="alt"
            class="h-[15rem] w-full object-cover sm:h-[18rem]"
            loading="lazy"
            decoding="async"
          >
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

