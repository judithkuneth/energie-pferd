<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'

type Offer = {
  title: string
  description: string
  note: string
}

const offers: Offer[] = [
  {
    title: 'Reiki mit Pferden',
    description:
      'Energetische Behandlung in Präsenz der Pferde – für Regulation, Klarheit und tiefe Rückverbindung.',
    note: 'Sanft · geerdet · berührend',
  },
  {
    title: 'Healing Sessions',
    description:
      'Ein heilender Raum für das, was gesehen werden will: Emotionen, Körper, Nervensystem und Energie.',
    note: 'Für innere Heilung & Integration',
  },
  {
    title: 'Energetische Begleitung',
    description:
      'Mehrwöchige Begleitung für nachhaltige Veränderung – mit Sessions, Impulsen und Raum für echte Prozesse.',
    note: 'Transformativ · stabilisierend',
  },
  {
    title: 'Transformative Gespräche',
    description:
      'Tiefgehende Gespräche mit bewusster Ausrichtung – um Muster zu verstehen und neue Entscheidungen zu verankern.',
    note: 'Klar · tief · ehrlich',
  },
  {
    title: 'Bewusstseinsarbeit',
    description:
      'Achtsame Praxis für Präsenz, Selbstbegegnung und innere Führung – spirituell, aber klar im Alltag verankert.',
    note: 'Sacred · pragmatisch · ruhig',
  },
]
</script>

<template>
  <section id="angebote" class="py-16 sm:py-24">
    <div class="container-page">
      <RevealOnScroll as="div">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">ANGEBOTE</p>
        <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
            Räume für Heilung & Bewusstsein
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-taupe-700">
            Wähle das Format, das dich jetzt am meisten ruft. Alles ist darauf ausgerichtet, dass du dich
            sicher fühlst – und dass echte Veränderung möglich wird.
          </p>
        </div>
      </RevealOnScroll>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <RevealOnScroll
          v-for="(offer, idx) in offers"
          :key="offer.title"
          as="article"
          class="group card-surface p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          :delay-ms="idx * 70"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="font-serif text-xl font-semibold tracking-tight text-taupe-900">
              {{ offer.title }}
            </h3>
            <span
              class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-taupe-200/60 bg-sand-100 text-taupe-800 transition group-hover:border-gold-300/50 group-hover:bg-sand-50"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-taupe-700">
            {{ offer.description }}
          </p>
          <div class="mt-6">
            <div class="hairline" />
            <p class="mt-4 text-xs font-medium tracking-[0.22em] text-taupe-600">
              {{ offer.note }}
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll as="div" :delay-ms="120" class="mt-10">
        <div class="rounded-2xl border border-taupe-200/60 bg-sand-100/60 px-6 py-6 sm:flex sm:items-center sm:justify-between">
          <p class="text-sm leading-relaxed text-taupe-800">
            Du bist unsicher, welches Angebot passt? Schreib mir kurz – wir finden gemeinsam den stimmigen
            Einstieg.
          </p>
          <a
            href="#kontakt"
            class="shadow-glow mt-4 inline-flex items-center justify-center rounded-full bg-taupe-800 px-5 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-taupe-700 sm:mt-0"
          >
            Unverbindlich anfragen
          </a>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

