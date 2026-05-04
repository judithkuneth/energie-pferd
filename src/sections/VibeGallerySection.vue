<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'

type VibeImage = {
  src: string
  alt: string
}

const images: VibeImage[] = [
  {
    src: '/IMG_20260503_114234.jpg',
    alt: 'Ruhige Begegnung – Nähe und Präsenz mit dem Pferd.'
  },
  { src: '/vibe2.jpg', alt: 'Ruhige Nähe und Verbindung mit dem Pferd.' },
  { src: '/vibe.jpg', alt: 'Vibe-Moment mit Pferd in der Natur.' }
]
</script>

<template>
  <section
    id="vibe"
    class="py-14 sm:py-20"
  >
    <div class="container-page">
      <RevealOnScroll
        as="div"
        class="mx-auto max-w-3xl text-center"
      >
        <h2
          class="mt-4 font-serif text-2xl font-semibold tracking-tight text-taupe-900 sm:text-3xl"
        >
          Dieser Raum ist für Dich
        </h2>
        <!-- <p class="mt-4 text-sm leading-relaxed text-taupe-700">
          Ich lade dich ein in Verbindung zu treten – mit deinem Körper, deinen Gefühlen und deiner
          inneren Wahrheit. Pferde sind dabei einzigartige Begleiter. Sie spiegeln unsere Präsenz.
          Sie spüren was wir in uns tragen. Und sie laden uns ein, uns selbst zu begegnen.
        </p> -->
        <p class="mt-4 text-sm leading-relaxed text-taupe-700">
          Ich lade dich ein in Verbindung zu treten – mit deinem Körper, deinen Gefühlen und deiner
          inneren Wahrheit. Komm so, wie du bist – wir beginnen dort, wo du gerade stehst.
        </p>
      </RevealOnScroll>

      <div class="mt-10 grid gap-5 md:grid-cols-12">
        <RevealOnScroll
          as="figure"
          class="md:col-span-7"
        >
          <div class="card-surface overflow-hidden">
            <img
              :src="images[0]?.src"
              :alt="images[0]?.alt"
              class="h-[22rem] w-full object-cover sm:h-[28rem]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </RevealOnScroll>

        <div class="grid gap-5 md:col-span-5">
          <RevealOnScroll
            as="figure"
            :delay-ms="120"
          >
            <div class="card-surface overflow-hidden">
              <img
                :src="images[1]?.src"
                :alt="images[1]?.alt"
                class="h-[13.5rem] w-full object-cover sm:h-[13.5rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            as="figure"
            :delay-ms="180"
          >
            <div class="card-surface overflow-hidden">
              <img
                :src="images[2]?.src"
                :alt="images[2]?.alt"
                class="h-[13.5rem] w-full object-cover sm:h-[13.5rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>
