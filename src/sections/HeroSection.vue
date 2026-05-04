<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'
</script>

<template>
  <section
    id="top"
    class="relative isolate overflow-hidden"
  >
    <div class="absolute inset-0 -z-10 bg-taupe-800">
      <div
        class="absolute inset-0 bg-[url('/hero-header.jpg')] bg-cover bg-center opacity-70"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0"
        aria-hidden="true"
      />
    </div>

    <div class="container-page py-20 sm:py-28">
      <RevealOnScroll :y-offset="16">
        <p class="mb-6 text-xs font-semibold tracking-[0.32em] text-sand-100/80">
          REIKI · BEWUSSTSEINSARBEIT · OFFENE BEGEGNUNGEN
        </p>

        <!-- <h1
          class="max-w-4xl font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-sand-50 sm:text-6xl"
        >
          Energie Pferd – Bewusstsein, Präsenz und tiefe Begegnung.
        </h1> -->
        <!-- <h2
          class="max-w-4xl font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-sand-50 sm:text-6xl"
        >
          Triff dich selbst im Raum der Pferde
        </h2> -->
        <h2
          class="max-w-4xl font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-sand-50 sm:text-6xl"
        >
          Energie Pferd. Selbstbegegnung im Raum der Pferde
        </h2>

        <!-- <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Ein Raum für Verbidung, Transformation und die heilende Kraft der Pferde.
        </p> -->
        <!-- <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Ein Raum für Selbstbegegnung, Bewusstsein und die heilende Kraft der Pferde.
        </p> -->
        <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Hier darfst du dir selbst näherkommen – begleitet von der heilenden Kraft der Pferde.
        </p>
        <!-- <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Begleitung mit Pferden – Sanft, geerdet, berührend.
        </p>
        <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Raum für Bewusstsein und tiefe Begegnung (mit Pferden und dir selbst)
        </p> -->
        <!-- <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Pferdegestützte Begleitung und Energiearbeit begleitet von der heilenden Kraft der Pferde.
        </p> -->

        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <!-- <PrimaryButton href="#angebote">Angebote entdecken</PrimaryButton> -->
          <PrimaryButton
            href="#kontakt"
            variant="ghost"
            >Session anfragen</PrimaryButton
          >
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
