<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'

type Testimonial = {
  quote: string
  name: string
  detail: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      '„Ich habe mich vom ersten Moment an sicher gefühlt. Die Begegnung mit den Pferden war wie ein Spiegel – still, klar und unglaublich heilsam.“',
    name: 'Platzhalter · Klientin',
    detail: 'Reiki mit Pferden',
  },
  {
    quote:
      '„Sanft und gleichzeitig so tief. Ich konnte wirklich etwas lösen – nicht im Kopf, sondern im Körper.“',
    name: 'Platzhalter · Klient',
    detail: 'Healing Session',
  },
  {
    quote:
      '„Professionell, warm, geerdet. Ich bin mit Klarheit rausgegangen – und mit dem Gefühl, wieder bei mir zu sein.“',
    name: 'Platzhalter · Klientin',
    detail: 'Energetische Begleitung',
  },
]
</script>

<template>
  <section id="erfahrungen" class="py-16 sm:py-24">
    <div class="container-page">
      <RevealOnScroll as="div">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">ERFAHRUNGSRAUM</p>
        <h2 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          Stimmen nach der Begegnung
        </h2>
        <p class="mt-4 max-w-2xl text-sm leading-relaxed text-taupe-700">
          Hier ist Platz für echte Erfahrungen. Du kannst diese Zitate später ganz einfach durch reale
          Testimonials ersetzen.
        </p>
      </RevealOnScroll>

      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        <RevealOnScroll
          v-for="(t, idx) in testimonials"
          :key="t.quote"
          as="figure"
          class="card-surface p-7"
          :delay-ms="idx * 90"
        >
          <blockquote class="text-sm leading-relaxed text-taupe-800">
            {{ t.quote }}
          </blockquote>
          <figcaption class="mt-6">
            <div class="hairline" />
            <p class="mt-4 text-sm font-medium text-taupe-900">{{ t.name }}</p>
            <p class="mt-1 text-xs font-medium tracking-[0.22em] text-taupe-600">{{ t.detail }}</p>
          </figcaption>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

