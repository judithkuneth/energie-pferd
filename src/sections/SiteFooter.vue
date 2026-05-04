<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-taupe-200/50 bg-sand-50">
    <div class="container-page py-10">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="font-serif text-lg font-semibold text-taupe-900">Energie Pferd</p>
          <p class="mt-1 text-xs font-medium tracking-[0.22em] text-taupe-600">
            HEILUNG · BEWUSSTSEIN · TIEFE BEGEGNUNG
          </p>
        </div>
        <div class="flex flex-wrap gap-4 text-sm">
          <a class="text-taupe-700 no-underline hover:underline" href="#angebote">Angebote</a>
          <a class="text-taupe-700 no-underline hover:underline" href="#philosophie">Philosophie</a>
          <a class="text-taupe-700 no-underline hover:underline" href="#kontakt">Kontakt</a>
        </div>
      </div>
      <div class="mt-8 hairline" />
      <div class="mt-6 flex flex-col gap-2 text-xs text-taupe-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Energie Pferd. Alle Rechte vorbehalten.</p>
        <p class="text-taupe-500">Impressum · Datenschutz (Platzhalter)</p>
      </div>
    </div>
  </footer>
</template>

