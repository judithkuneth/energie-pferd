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
      <picture
        class="absolute inset-0"
        aria-hidden="true"
      >
        <img
          src="/optimized/hero-header-960.jpg"
          srcset="
            /optimized/hero-header-960.jpg   960w,
            /optimized/hero-header-1440.jpg 1440w,
            /optimized/hero-header-1920.jpg 1920w
          "
          sizes="100vw"
          alt=""
          width="1920"
          height="1440"
          class="h-full w-full object-cover object-center opacity-70"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div
        class="absolute inset-0"
        aria-hidden="true"
      />
    </div>

    <div class="container-page py-16 sm:py-24">
      <RevealOnScroll :y-offset="16">
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
