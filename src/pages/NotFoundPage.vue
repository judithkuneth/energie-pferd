<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { t } = useI18n()
const { homeLocation } = useSiteLocale()
</script>

<template>
  <div class="min-h-dvh bg-sand-50 font-sans text-taupe-800">
    <main class="container-page flex min-h-dvh items-center justify-center py-16">
      <div class="max-w-xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-taupe-600">
          {{ t('notFound.eyebrow') }}
        </p>
        <h1 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          {{ t('notFound.title') }}
        </h1>
        <p class="mt-5 leading-relaxed text-taupe-700">
          {{ t('notFound.text') }}
        </p>
        <RouterLink
          :to="homeLocation"
          class="mt-8 inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
        >
          {{ t('common.backToHome') }}
        </RouterLink>
      </div>
    </main>
  </div>
</template>
