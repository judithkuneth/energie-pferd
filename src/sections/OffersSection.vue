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
    title: 'Reiki mit Pferden',
    description:
      'Energetische Behandlung in Präsenz der Pferde – für Regulation, Klarheit und tiefe Rückverbindung.',
    note: 'Sanft · geerdet · berührend',
    impressions: [
      // { src: '/IMG_20260503_114234.jpg', alt: 'Impression – ruhige Begegnung mit dem Pferd.' },
      // { src: '/vibe2.jpg', alt: 'Impression – Nähe und Verbindung.' },
      // { src: '/vibe.jpg', alt: 'Impression – Naturmoment.' }
    ]
  },
  {
    title: 'Stille mit Pferden',
    description: 'Ein Raum zum Sein – ohne Worte, ohne Programm. In der Präsenz der Pferde.',
    note: 'Ankommen · Atmen · Spüren',
    impressions: [
      // { src: '/vibe2.jpg', alt: 'Impression – Stille und Präsenz.' },
      { src: '/IMG_20260503_114234.jpg', alt: 'Impression – sanfte Begegnung.' },
      { src: '/IMG_20260423_100958 (2).jpg', alt: 'Impression – stille Präsenz im Raum.' },
      // { src: '/IMG_20260303_105058.jpg', alt: 'Impression – Ruhe und Weite.' },
      // { src: '/IMG-20260505-WA0019.jpg', alt: 'Impression – Ruhe im Grünen.' },
      { src: '/IMG_20260228_151752.jpg', alt: 'Impression – Begegnung auf der Weide.' }
      // { src: '/vibe.jpg', alt: 'Impression – Naturmoment.' }
    ]
  },

  {
    title: 'Im Dialog mit dem Pferd',
    description:
      'Erst hinhören, was sich zeigt, dann selbst in Führung gehen. Ein Weg vom Erkennen ins Tun – mit dem Pferd an deiner Seite.',
    note: 'Spüren · Erkennen · Führen',
    impressions: [
      { src: '/Begenung.jpeg', alt: 'Impression – Begegnung im Dialog.' },
      { src: '/Fuehren.jpg', alt: 'Impression – Führung und Verbindung.' }
      // { src: '/vibe.jpg', alt: 'Impression – Klarheit im Draußen.' },
      // { src: '/vibe2.jpg', alt: 'Impression – Verbindung.' },
    ]
  },
  {
    title: 'Café & Pferd',
    description:
      'Persönliche Gespräche: mal am Tisch, mal an der Seite der Pferde – ein geschützter Raum für ehrliche Worte und stille Begegnungen. Einmalig oder als längerer Weg.',
    note: 'Persönlich · ehrlich · offen',
    impressions: [
      // { src: '/vibe.jpg', alt: 'Impression – Gespräch und Natur.' },
      // { src: '/IMG_20260503_114234.jpg', alt: 'Impression – Begegnung.' },
      // { src: '/vibe2.jpg', alt: 'Impression – Nähe.' }
    ]
  },

  {
    title: 'Offener Raum',
    description:
      'Zeit mit den Pferden – ohne festes Ziel. Wir schauen, was sich uns zeigt. Frei und kombinierbar mit den anderen Formaten.',
    note: 'frei · offen · spielerisch',
    impressions: [
      { src: '/vibe.jpg', alt: 'Impression – Freiheit in der Natur.' },
      { src: '/IMG_20260503_114234.jpg', alt: 'Impression – Präsenz.' },
      // { src: '/vibe2.jpg', alt: 'Impression – offener Raum.' },
      { src: '/IMG_20250619_190852.jpg', alt: 'Impression – Pferd im offenen Raum.' }
    ]
  }
]

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
  <section
    id="angebote"
    class="py-12 sm:py-16"
  >
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
          class="fixed inset-0 z-[70]"
          role="dialog"
          aria-modal="true"
          :aria-label="
            selectedOffer?.title ? `Impressionen zu ${selectedOffer.title}` : 'Impressionen'
          "
          @keydown.esc="closeOffer"
        >
          <button
            type="button"
            class="absolute inset-0 bg-taupe-900/40 backdrop-blur-sm"
            aria-label="Schließen"
            @click="closeOffer"
          />

          <div class="container-page relative flex min-h-dvh items-center justify-center py-10">
            <div
              class="w-full max-w-4xl rounded-3xl border border-taupe-200/60 bg-sand-50/90 p-6 shadow-2xl backdrop-blur sm:p-8"
            >
              <div class="flex items-start justify-between gap-6">
                <div class="min-w-0">
                  <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">IMPRESSIONEN</p>
                  <h3
                    class="mt-3 font-serif text-2xl font-semibold tracking-tight text-taupe-900 sm:text-3xl"
                  >
                    {{ selectedOffer?.title }}
                  </h3>
                </div>
                <button
                  type="button"
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-taupe-200/70 bg-white/70 text-taupe-800 transition hover:bg-white"
                  aria-label="Schließen"
                  @click="closeOffer"
                >
                  ✕
                </button>
              </div>

              <p
                v-if="selectedOffer?.description"
                class="mt-4 max-w-2xl text-sm leading-relaxed text-taupe-700"
              >
                {{ selectedOffer.description }}
              </p>

              <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <figure
                  v-for="img in selectedOffer?.impressions ?? []"
                  :key="img.src"
                  class="overflow-hidden rounded-2xl border border-taupe-200/60 bg-white/60"
                >
                  <img
                    :src="img.src"
                    :alt="img.alt"
                    class="h-56 w-full object-cover transition duration-500 ease-out hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="#kontakt"
                  class="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
                  @click="closeOffer"
                >
                  Unverbindlich anfragen
                </a>
                <p class="text-xs leading-relaxed text-taupe-600">
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
