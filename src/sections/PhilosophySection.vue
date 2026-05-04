<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'
</script>

<template>
  <section id="philosophie" class="relative overflow-hidden py-16 sm:py-24">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-sand-50 via-sand-100/40 to-sand-50" aria-hidden="true" />
      <div
        class="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-gold-200/25 blur-3xl"
        aria-hidden="true"
      />
    </div>

    <div class="container-page">
      <RevealOnScroll as="div">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">PHILOSOPHIE</p>
        <h2 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          Tiefe im Kern. Sanftheit im Zugang.
        </h2>
      </RevealOnScroll>

      <div class="mt-10 grid gap-8 lg:grid-cols-12">
        <RevealOnScroll as="div" class="lg:col-span-7">
          <div class="card-surface p-7 sm:p-9">
            <p class="text-sm leading-relaxed text-taupe-800">
              Heilung ist für mich nicht „wegmachen“. Heilung ist <span class="font-medium">wieder in Beziehung</span>
              kommen: mit dem Körper, mit Gefühlen, mit Wahrheit, mit dem eigenen Rhythmus.
            </p>
            <p class="mt-4 text-sm leading-relaxed text-taupe-700">
              Pferde sind in diesem Prozess einzigartige Begleiter. Sie spiegeln Präsenz. Sie spüren feine
              Verschiebungen. Und sie laden uns ein, <span class="font-medium">ehrlich zu werden – ohne Druck</span>.
            </p>

            <div class="mt-8">
              <div class="hairline" />
              <ul class="mt-6 space-y-3 text-sm leading-relaxed text-taupe-700">
                <li><span class="font-medium text-taupe-900">Bewusstsein:</span> Wahrnehmen, was ist – Präsenz als Grundlage.</li>
                <li>
                  <span class="font-medium text-taupe-900">Transformation:</span> Neue Entscheidungen, die im Alltag
                  spürbar werden.
                </li>
                <li>
                  <span class="font-medium text-taupe-900">Selbstbegegnung:</span> Sanftes Hinsehen – in deinem Tempo.
                </li>
                <li><span class="font-medium text-taupe-900">Pferde als Spiegel:</span> Klar, fein, präsent – ohne Urteil.</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="aside" :delay-ms="120" class="lg:col-span-5">
          <div class="card-surface p-7 sm:p-9">
            <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">INTENTION</p>
            <p class="mt-4 font-serif text-2xl font-semibold leading-tight text-taupe-900">
              Ein Sacred Space, der dich hält – damit du dich erinnern kannst.
            </p>
            <p class="mt-5 text-sm leading-relaxed text-taupe-700">
              Ruhig. Herzlich. Tiefgehend. Spirituell – und zugleich klar, geerdet und professionell.
            </p>
            <div class="mt-7">
              <a
                href="#kontakt"
                class="shadow-glow inline-flex items-center justify-center rounded-full bg-taupe-800 px-5 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-taupe-700"
              >
                Beginne deine Reise
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

