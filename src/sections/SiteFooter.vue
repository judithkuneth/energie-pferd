<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-taupe-200/50 bg-sand-50">
    <div class="container-page py-10">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="font-serif text-lg font-semibold text-taupe-900">Energie Pferd</p>
        </div>
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
