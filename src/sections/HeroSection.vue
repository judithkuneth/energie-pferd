<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'

const emit = defineEmits<{
  book: []
}>()
</script>

<template>
  <section id="top" class="relative isolate overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-taupe-800">
      <picture class="absolute inset-0" aria-hidden="true">
        <source
          type="image/avif"
          srcset="
            /optimized/hero-20260726-960.avif   960w,
            /optimized/hero-20260726-1440.avif 1440w,
            /optimized/hero-20260726-1920.avif 1920w
          "
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcset="
            /optimized/hero-20260726-960.webp   960w,
            /optimized/hero-20260726-1440.webp 1440w,
            /optimized/hero-20260726-1920.webp 1920w
          "
          sizes="100vw"
        />
        <img
          src="/optimized/hero-20260726-960.jpg"
          srcset="
            /optimized/hero-20260726-960.jpg   960w,
            /optimized/hero-20260726-1440.jpg 1440w,
            /optimized/hero-20260726-1920.jpg 1920w
          "
          sizes="100vw"
          alt=""
          width="1920"
          height="1281"
          class="h-full w-full object-cover object-center opacity-70"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div class="absolute inset-0" aria-hidden="true" />
    </div>

    <div class="container-page py-28 sm:py-40 lg:py-48">
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
        <h1
          class="max-w-4xl font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-sand-50 sm:text-6xl"
        >
          Begegne dir selbst im Raum der Pferde
        </h1>

        <!-- <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Ein Raum für Verbidung, Transformation und die heilende Kraft der Pferde.
        </p> -->
        <!-- <p class="mt-6 max-w-2xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
          Ein Raum für Selbstbegegnung, Bewusstsein und die heilende Kraft der Pferde.
        </p> -->
        <p
          class="hero-copy mt-6 w-fit max-w-2xl px-4 py-3 text-base leading-relaxed text-sand-50/95 sm:text-lg"
        >
          Hier darfst du dir selbst näherkommen – sicher und wertfrei begleitet in der kraftvollen Präsenz der
          Pferde.
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
          <PrimaryButton variant="ghost" @click="emit('book')">
            20 Min. Kennenlern-Call
          </PrimaryButton>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.hero-copy {
  position: relative;
  isolation: isolate;
}

.hero-copy::before {
  position: absolute;
  z-index: -1;
  inset: 0.15rem -0.25rem;
  border-radius: 2rem;
  background: rgba(43, 34, 31, 0.24);
  filter: blur(14px);
  content: '';
}
</style>
