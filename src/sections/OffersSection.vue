<script setup lang="ts">
import { computed, ref } from 'vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'

type Offer = {
  title: string
  description: string
  note: string
  impressions?: { src: string; alt: string }[]
}

const offers: Offer[] = [
  {
    title: 'Körper- & Energiarbeit',
    description:
      'Ganzheitliche Körper- und Energiearbeit in der Präsenz der Pferde – ein Raum zum Ankommen und Loslassen um mit dir selbst in Verbindung zu kommen.',
    note: 'Erden · Spüren · Verbinden',
    impressions: [
      {
        src: '/healingsession-sarah.jpg',
        alt: 'Energetische Körperarbeit - Healing-Session mit Sarah.',
      },
      {
        src: '/optimized/healingsession-daniela-960.jpg',
        alt: 'Energetische Körperarbeit - Healing-Session mit Daniela.',
      },
      {
        src: '/reiki-session-pasture-horses.jpg',
        alt: 'Energetische Körperarbeit - Pferde im offenen Raum.',
      },
      {
        src: '/reiki-resting-with-horse-sunlight.jpg',
        alt: 'Energetische Körperarbeit - Ruhe im Sonnenlicht.',
      },
      {
        src: '/reiki-client-resting-between-horses.jpg',
        alt: 'Energetische Körperarbeit - Ruhen zwischen Pferden.',
      },
      {
        src: '/reiki-pony-close-resting-client.jpg',
        alt: 'Energetische Körperarbeit - Pony in stiller Naehe.',
      },
      // { src: '/IMG_20260503_114234.jpg', alt: 'Impression – ruhige Begegnung mit dem Pferd.' },
      // { src: '/vibe2.jpg', alt: 'Impression – Nähe und Verbindung.' },
      // { src: '/vibe.jpg', alt: 'Impression – Naturmoment.' }
    ],
  },
  {
    title: 'Spüren und Vertrauen',
    description:
      'Ein Raum zum Innehalten und Wahrnehmen, ohne etwas verändern zu müssen. Hier darfst du deiner Intuition wieder näherkommen und lernen ihr zu vertrauen.',
    note: 'Wahrnehmen · Fühlen · Vertrauen',
    impressions: [
      // { src: '/vibe2.jpg', alt: 'Impression – Stille und Präsenz.' },
      { src: '/IMG_20260503_114234.jpg', alt: 'Impression – sanfte Begegnung.' },
      { src: '/IMG_20260423_100958 (2).jpg', alt: 'Impression – stille Präsenz im Raum.' },
      // { src: '/IMG_20260303_105058.jpg', alt: 'Impression – Ruhe und Weite.' },
      // { src: '/IMG-20260505-WA0019.jpg', alt: 'Impression – Ruhe im Grünen.' },
      { src: '/IMG_20260228_151752.jpg', alt: 'Impression – Begegnung auf der Weide.' },
      { src: '/vibe.jpg', alt: 'Impression – Freiheit in der Natur.' },
      { src: '/IMG_20250619_190852.jpg', alt: 'Impression – Pferd im offenen Raum.' },
      // { src: '/vibe.jpg', alt: 'Impression – Naturmoment.' }
    ],
  },

  {
    title: 'Selbstführung',
    description:
      'Im Dialog mit dem Pferd wird unsere eigene Haltung unmittelbar spürbar. Pferde fordern Klarheit und Präsenz – und zeigen uns, dass Führung immer bei uns selbst beginnt.',
    note: 'Klarheit · Führen · Verkörpern',
    impressions: [
      { src: '/Begenung.jpeg', alt: 'Impression – Begegnung im Dialog.' },
      { src: '/Fuehren.jpg', alt: 'Impression – Führung und Verbindung.' },
      // { src: '/vibe.jpg', alt: 'Impression – Klarheit im Draußen.' },
      // { src: '/vibe2.jpg', alt: 'Impression – Verbindung.' },
    ],
  },
  {
    title: 'Persönliche Begleitung',
    description:
      'Ein geschützter Raum für dich und alles, was dich gerade bewegt – vor Ort oder online. Einmalig oder über einen längeren Zeitraum.',
    note: 'Begegnung · Reflexion · Begleitung',
    impressions: [
      // { src: '/vibe.jpg', alt: 'Impression – Gespräch und Natur.' },
      // { src: '/IMG_20260503_114234.jpg', alt: 'Impression – Begegnung.' },
      // { src: '/vibe2.jpg', alt: 'Impression – Nähe.' }
    ],
  },
  {
    title: '1:1 Tages-Retreat',
    description:
      'Dieser Tag gehört ganz dir. Wir gestalten ihn rund um das, was gerade Raum bekommen darf – mit Körperarbeit, Stille, Dialog und Zeit in der Natur und mit den Pferden.',
      note: 'Zeit für dich',
    impressions: [
      {
        src: '/optimized/about-healingsession-sarah-top-960.jpg',
        alt: 'Impression – energetische Körperarbeit mit Pferd in persönlicher Begleitung.',
      },
      {
        src: '/optimized/healingsession-daniela-960.jpg',
        alt: 'Impression – persönliche Healing-Session mit Pferd.',
      },
      {
        src: '/optimized/vibe-main-960.jpg',
        alt: 'Impression – achtsame Begegnung mit dem Pferd.',
      },
      { src: '/optimized/open-space-960.jpg', alt: 'Impression – offener Raum mit den Pferden.' },
    ],
  },
]

const modalImageSizes = '(min-width: 1024px) 280px, (min-width: 640px) 45vw, calc(100vw - 4rem)'
const optimizedImpressions: Record<string, { src: string; srcset: string }> = {
  '/reiki-session-pasture-horses.jpg': {
    src: '/optimized/reiki-session-pasture-horses-960.jpg',
    srcset:
      '/optimized/reiki-session-pasture-horses-480.jpg 480w, /optimized/reiki-session-pasture-horses-960.jpg 960w',
  },
  '/reiki-horse-treatment-close.jpg': {
    src: '/optimized/reiki-horse-treatment-close-960.jpg',
    srcset:
      '/optimized/reiki-horse-treatment-close-480.jpg 480w, /optimized/reiki-horse-treatment-close-960.jpg 960w',
  },
  '/reiki-horse-connection-table.jpg': {
    src: '/optimized/reiki-horse-connection-table-960.jpg',
    srcset:
      '/optimized/reiki-horse-connection-table-480.jpg 480w, /optimized/reiki-horse-connection-table-960.jpg 960w',
  },
  '/reiki-horse-calm-touch.jpg': {
    src: '/optimized/reiki-horse-calm-touch-960.jpg',
    srcset:
      '/optimized/reiki-horse-calm-touch-480.jpg 480w, /optimized/reiki-horse-calm-touch-960.jpg 960w',
  },
  '/reiki-resting-with-horse-sunlight.jpg': {
    src: '/optimized/reiki-resting-with-horse-sunlight-960.jpg',
    srcset:
      '/optimized/reiki-resting-with-horse-sunlight-480.jpg 480w, /optimized/reiki-resting-with-horse-sunlight-960.jpg 960w',
  },
  '/reiki-client-with-horse-table.jpg': {
    src: '/optimized/reiki-client-with-horse-table-960.jpg',
    srcset:
      '/optimized/reiki-client-with-horse-table-480.jpg 480w, /optimized/reiki-client-with-horse-table-960.jpg 960w',
  },
  '/healingsession-sarah.jpg': {
    src: '/optimized/about-healingsession-sarah-top-960.jpg',
    srcset:
      '/optimized/about-healingsession-sarah-top-480.jpg 480w, /optimized/about-healingsession-sarah-top-960.jpg 960w',
  },
  '/reiki-client-resting-between-horses.jpg': {
    src: '/optimized/reiki-client-resting-between-horses-960.jpg',
    srcset:
      '/optimized/reiki-client-resting-between-horses-480.jpg 480w, /optimized/reiki-client-resting-between-horses-960.jpg 960w',
  },
  '/reiki-pony-close-resting-client.jpg': {
    src: '/optimized/reiki-pony-close-resting-client-960.jpg',
    srcset:
      '/optimized/reiki-pony-close-resting-client-480.jpg 480w, /optimized/reiki-pony-close-resting-client-960.jpg 960w',
  },
  '/reiki-client-resting-horse-pony.jpg': {
    src: '/optimized/reiki-client-resting-horse-pony-960.jpg',
    srcset:
      '/optimized/reiki-client-resting-horse-pony-480.jpg 480w, /optimized/reiki-client-resting-horse-pony-960.jpg 960w',
  },
  '/IMG_20260503_114234.jpg': {
    src: '/optimized/vibe-main-960.jpg',
    srcset:
      '/optimized/vibe-main-640.jpg 640w, /optimized/vibe-main-960.jpg 960w, /optimized/vibe-main-1280.jpg 1280w',
  },
  '/IMG_20260423_100958 (2).jpg': {
    src: '/optimized/stillness-space-960.jpg',
    srcset: '/optimized/stillness-space-480.jpg 480w, /optimized/stillness-space-960.jpg 960w',
  },
  '/IMG_20260228_151752.jpg': {
    src: '/optimized/pasture-meeting-960.jpg',
    srcset: '/optimized/pasture-meeting-480.jpg 480w, /optimized/pasture-meeting-960.jpg 960w',
  },
  '/IMG_20250619_190852.jpg': {
    src: '/optimized/open-space-960.jpg',
    srcset: '/optimized/open-space-480.jpg 480w, /optimized/open-space-960.jpg 960w',
  },
  '/vibe.jpg': {
    src: '/optimized/vibe-nature-800.jpg',
    srcset: '/optimized/vibe-nature-480.jpg 480w, /optimized/vibe-nature-800.jpg 800w',
  },
  '/Begenung.jpeg': {
    src: '/optimized/dialog-meeting-800.jpg',
    srcset: '/optimized/dialog-meeting-480.jpg 480w, /optimized/dialog-meeting-800.jpg 800w',
  },
  '/Fuehren.jpg': {
    src: '/optimized/leading-774.jpg',
    srcset: '/optimized/leading-480.jpg 480w, /optimized/leading-774.jpg 774w',
  },
}

function imageSrc(img: { src: string }) {
  return optimizedImpressions[img.src]?.src ?? img.src
}

function imageSrcset(img: { src: string }) {
  return optimizedImpressions[img.src]?.srcset
}

const selectedOffer = ref<Offer | null>(null)
const isModalOpen = computed(() => selectedOffer.value !== null)

function openOffer(offer: Offer) {
  selectedOffer.value = offer
}

function closeOffer() {
  selectedOffer.value = null
}
</script>

<template>
  <section id="angebote" class="py-12 sm:py-16">
    <div class="container-page">
      <RevealOnScroll as="div">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">ANGEBOTE</p>
        <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
            Räume der Begegnung
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-taupe-700">
            Wähle, was dich anspricht oder schreib mir, und wir finden gemeinsam den passenden
            Anfang.
          </p>
        </div>
      </RevealOnScroll>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <RevealOnScroll
          v-for="(offer, idx) in offers"
          :key="offer.title"
          as="button"
          type="button"
          class="group card-surface cursor-pointer p-6 text-left transition hover:-translate-y-1 hover:border-primary-500/45 hover:ring-1 hover:ring-primary-500/25 hover:shadow-none"
          :delay-ms="idx * 70"
          @click="openOffer(offer)"
        >
          <div class="flex flex-col">
            <div class="flex items-start justify-between gap-4">
              <h3 class="font-serif text-xl font-semibold tracking-tight text-taupe-900">
                {{ offer.title }}
              </h3>
              <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-taupe-200/70 bg-sand-100/70 text-taupe-700 transition group-hover:border-primary-500/45 group-hover:bg-sand-50 group-hover:text-primary-600"
                aria-label="Impressionen ansehen"
                title="Impressionen ansehen"
              >
                <span class="text-base leading-none" aria-hidden="true">↗</span>
              </span>
            </div>

            <p class="mt-3 text-sm leading-relaxed text-taupe-700">
              {{ offer.description }}
            </p>

            <div class="pt-6">
              <div class="hairline" />
              <p class="mt-4 text-xs font-medium tracking-[0.22em] text-taupe-600">
                {{ offer.note }}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <Teleport to="body">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[70] overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
          :aria-label="
            selectedOffer?.title ? `Impressionen zu ${selectedOffer.title}` : 'Impressionen'
          "
          @keydown.esc="closeOffer"
        >
          <button
            type="button"
            class="fixed inset-0 bg-taupe-900/40 backdrop-blur-sm"
            aria-label="Schließen"
            @click="closeOffer"
          />

          <div
            class="container-page relative flex min-h-dvh items-start justify-center py-3 sm:items-center sm:py-10"
          >
            <div
              class="my-2 max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-2xl border border-taupe-200/60 bg-sand-50/95 p-4 shadow-2xl backdrop-blur sm:my-0 sm:max-h-[calc(100dvh-5rem)] sm:rounded-3xl sm:p-8"
            >
              <div class="flex items-start justify-between gap-4 sm:gap-6">
                <div class="min-w-0">
                  <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">IMPRESSIONEN</p>
                  <h3
                    class="mt-2 font-serif text-2xl font-semibold tracking-tight text-taupe-900 sm:mt-3 sm:text-3xl"
                  >
                    {{ selectedOffer?.title }}
                  </h3>
                </div>
                <button
                  type="button"
                  class="sticky top-0 z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-taupe-200/70 bg-white/90 text-taupe-800 transition hover:bg-white"
                  aria-label="Schließen"
                  @click="closeOffer"
                >
                  ✕
                </button>
              </div>

              <p
                v-if="selectedOffer?.description"
                class="mt-3 max-w-2xl text-sm leading-relaxed text-taupe-700 sm:mt-4"
              >
                {{ selectedOffer.description }}
              </p>

              <div class="mt-5 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                <figure
                  v-for="img in selectedOffer?.impressions ?? []"
                  :key="img.src"
                  class="overflow-hidden rounded-xl border border-taupe-200/60 bg-white/60 sm:rounded-2xl"
                >
                  <img
                    :src="imageSrc(img)"
                    :srcset="imageSrcset(img)"
                    :sizes="imageSrcset(img) ? modalImageSizes : undefined"
                    :alt="img.alt"
                    class="h-40 w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-56"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>

              <div
                class="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-between"
              >
                <a
                  href="#kontakt"
                  class="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
                  @click="closeOffer"
                >
                  Unverbindlich anfragen
                </a>
                <p class="hidden text-xs leading-relaxed text-taupe-600 sm:block">
                  Tipp: Klick außerhalb schließt das Fenster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </section>
</template>
