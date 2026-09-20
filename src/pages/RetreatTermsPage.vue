<script setup lang="ts">
import RetreatTerms from '@/components/RetreatTerms.vue'
import SiteFooter from '@/sections/SiteFooter.vue'
</script>

<template>
  <div class="min-h-dvh bg-sand-50 text-taupe-800">
    <main class="container-page py-12 sm:py-20">
      <article class="mx-auto max-w-2xl">
        <RouterLink to="/retreat" class="text-sm text-primary-600">← Zum Retreat</RouterLink>
        <p class="mt-10 text-xs uppercase tracking-[.2em] text-taupe-600">
          Gruppenretreat · Pferdemagie
        </p>
        <h1 class="mb-8 mt-4 font-forum text-4xl sm:text-5xl">Buchungs- &amp; Stornobedingungen</h1>
        <RetreatTerms />
      </article>
    </main>
    <SiteFooter />
  </div>
</template>
