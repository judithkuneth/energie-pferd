<script setup lang="ts">
import logoMark from '@/assets/brand/energie-pferd-mark-128.png'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-taupe-200/50 bg-sand-50">
    <div class="container-page py-10">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <RouterLink to="/" class="group inline-flex items-center gap-3 no-underline">
          <img
            :src="logoMark"
            alt=""
            width="128"
            height="128"
            class="h-[42px] w-[42px] shrink-0 object-contain transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
            aria-hidden="true"
          />
          <span
            class="brand-wordmark font-forum text-xl font-normal uppercase tracking-[0.08em] text-taupe-900"
          >
            Energie Pferd
          </span>
          <span class="sr-only">Zur Startseite</span>
        </RouterLink>
        <div class="flex flex-wrap gap-4 text-sm">
          <RouterLink class="text-taupe-700 no-underline hover:underline" to="/#angebote">
            Angebote
          </RouterLink>
          <RouterLink class="text-taupe-700 no-underline hover:underline" to="/#kontakt">
            Kontakt
          </RouterLink>
        </div>
      </div>
      <div class="mt-8 hairline" />
      <div class="mt-6 flex flex-col gap-2 text-xs text-taupe-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Energie Pferd. Alle Rechte vorbehalten.</p>
        <div class="flex items-center gap-3 text-taupe-500">
          <RouterLink to="/impressum" class="no-underline hover:text-taupe-700 hover:underline">
            Impressum
          </RouterLink>
          <span aria-hidden="true">·</span>
          <RouterLink to="/datenschutz" class="no-underline hover:text-taupe-700 hover:underline">
            Datenschutz
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
