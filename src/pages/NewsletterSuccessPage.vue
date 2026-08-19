<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SiteFooter from '@/sections/SiteFooter.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { t } = useI18n()
const { homeLocation } = useSiteLocale()
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-sand-50 font-sans text-taupe-800">
    <header class="border-b border-taupe-200/50 bg-sand-50/90">
      <div class="container-page flex items-center justify-between gap-4 py-4">
        <RouterLink
          :to="homeLocation"
          class="font-serif text-lg font-semibold text-taupe-900 no-underline"
        >
          Energie Pferd
        </RouterLink>
        <RouterLink
          :to="homeLocation"
          class="text-sm font-medium text-taupe-700 no-underline transition hover:text-primary-600"
        >
          {{ t('common.backToWebsite') }}
        </RouterLink>
      </div>
    </header>

    <main class="container-page flex flex-1 items-center py-16 sm:py-24">
      <article class="mx-auto max-w-2xl text-center">
        <div
          class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-200/70 text-primary-600"
          aria-hidden="true"
        >
          <svg
            class="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>


        <h1 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          {{ t('newsletterSuccess.title') }}
        </h1>
        <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-taupe-700 sm:text-lg">
          {{ t('newsletterSuccess.text') }}
        </p>


        <RouterLink
          :to="homeLocation"
          class="mt-8 inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
        >
          {{ t('common.backToWebsite') }}
        </RouterLink>
      </article>
    </main>

    <SiteFooter />
  </div>
</template>
