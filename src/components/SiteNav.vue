<script setup lang="ts">
import { computed, ref } from 'vue'

type NavItem = { label: string; href: string }

const items: NavItem[] = [
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Angebote', href: '#angebote' },
  { label: 'Philosophie', href: '#philosophie' },
  { label: 'Erfahrungen', href: '#erfahrungen' },
  { label: 'Kontakt', href: '#kontakt' },
]

const open = ref(false)
const menuId = 'site-nav-menu'
const menuClass = computed(() =>
  open.value ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
)

function close() {
  open.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-taupe-200/40 bg-sand-50/75 backdrop-blur">
    <div class="container-page flex items-center justify-between gap-4 py-3">
      <a href="#top" class="group inline-flex items-baseline gap-2 no-underline" @click="close">
        <span class="font-serif text-lg font-semibold tracking-wide text-taupe-900">Energie Pferd</span>
        <span class="hidden text-xs font-medium tracking-[0.22em] text-taupe-600 sm:inline">
          HEALING SPACE
        </span>
        <span class="sr-only">Zurück nach oben</span>
      </a>

      <nav class="hidden items-center gap-6 md:flex" aria-label="Hauptnavigation">
        <a
          v-for="item in items"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-taupe-700 no-underline transition hover:text-taupe-900"
        >
          {{ item.label }}
        </a>
        <a
          href="#kontakt"
          class="shadow-glow rounded-full bg-taupe-800 px-4 py-2 text-sm font-medium text-sand-50 no-underline transition hover:bg-taupe-700"
        >
          Session anfragen
        </a>
      </nav>

      <button
        class="inline-flex items-center justify-center rounded-full border border-taupe-200/70 bg-white/60 px-3 py-2 text-sm font-medium text-taupe-900 shadow-sm transition hover:bg-white md:hidden"
        type="button"
        aria-label="Menü öffnen"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-controls="menuId"
        @click="open = !open"
      >
        Menü
      </button>
    </div>

    <div
      :id="menuId"
      class="md:hidden"
      :class="menuClass"
      style="transition: max-height 300ms ease, opacity 250ms ease"
    >
      <div class="container-page flex flex-col gap-2 pb-4">
        <a
          v-for="item in items"
          :key="item.href"
          :href="item.href"
          class="rounded-xl px-3 py-2 text-sm font-medium text-taupe-800 no-underline hover:bg-white/70"
          @click="close"
        >
          {{ item.label }}
        </a>
        <a
          href="#kontakt"
          class="shadow-glow mt-2 inline-flex items-center justify-center rounded-full bg-taupe-800 px-4 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-taupe-700"
          @click="close"
        >
          Session anfragen
        </a>
      </div>
    </div>
  </header>
</template>

