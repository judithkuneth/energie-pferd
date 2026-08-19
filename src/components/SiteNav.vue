<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import logoMark from '@/assets/brand/energie-pferd-mark-128.png'
import { useSiteLocale } from '@/composables/useSiteLocale'

const emit = defineEmits<{
  book: []
}>()

const { t } = useI18n()
const { alternateLocale, alternateLocation, homeLocation } = useSiteLocale()

const items = computed(() => [
  { label: t('navigation.offers'), href: '#angebote' },
  { label: t('navigation.contact'), href: '#kontakt' },
])

const open = ref(false)
const menuId = 'site-nav-menu'
const menuClass = computed(() =>
  open.value ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
)

function close() {
  open.value = false
}

function openBooking() {
  close()
  emit('book')
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-taupe-200/40 bg-sand-50/75 backdrop-blur">
    <div class="container-page flex items-center justify-between gap-2 py-3">
      <RouterLink
        :to="{ ...homeLocation, hash: '#top' }"
        class="group inline-flex items-center gap-2 no-underline sm:gap-3"
        @click="close"
      >
        <img
          :src="logoMark"
          alt=""
          width="128"
          height="128"
          class="h-[42px] w-[42px] shrink-0 object-contain transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
          aria-hidden="true"
        />
        <span
          class="brand-wordmark font-forum text-lg font-normal uppercase tracking-[0.08em] text-taupe-900 sm:text-xl"
        >
          Energie Pferd
        </span>
        <!-- <span class="hidden text-xs font-medium tracking-[0.22em] text-taupe-600 sm:inline">
          HEALING SPACE
        </span> -->
        <span class="sr-only">{{ t('navigation.backToTop') }}</span>
      </RouterLink>

      <nav
        class="hidden items-center gap-6 md:flex"
        :aria-label="t('navigation.main')"
      >
        <a
          v-for="item in items"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-taupe-700 no-underline transition hover:text-taupe-900"
        >
          {{ item.label }}
        </a>
        <button
          type="button"
          class="rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
          @click="openBooking"
        >
          {{ t('navigation.booking') }}
        </button>
        <RouterLink
          :to="alternateLocation"
          class="rounded-full border border-taupe-300/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-taupe-700 no-underline transition hover:border-primary-500/50 hover:text-primary-600"
          :aria-label="
            alternateLocale === 'en'
              ? t('navigation.switchToEnglish')
              : t('navigation.switchToGerman')
          "
        >
          {{ alternateLocale.toUpperCase() }}
        </RouterLink>
      </nav>

      <div class="flex shrink-0 items-center gap-1.5 md:hidden">
        <RouterLink
          :to="alternateLocation"
          class="inline-flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-xs font-semibold uppercase tracking-[0.08em] text-taupe-700 no-underline transition hover:bg-white/70 hover:text-primary-600"
          :aria-label="
            alternateLocale === 'en'
              ? t('navigation.switchToEnglish')
              : t('navigation.switchToGerman')
          "
          @click="close"
        >
          {{ alternateLocale.toUpperCase() }}
        </RouterLink>

        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-taupe-200/70 bg-white/60 text-taupe-900 shadow-sm transition hover:bg-white"
          type="button"
          :aria-label="t('navigation.menuOpen')"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-controls="menuId"
          @click="open = !open"
        >
          <span class="relative block h-4 w-5" aria-hidden="true">
            <span
              class="absolute left-0 top-0.5 h-px w-5 bg-current transition duration-200"
              :class="open ? 'translate-y-[6px] rotate-45' : ''"
            />
            <span
              class="absolute left-0 top-[7px] h-px w-5 bg-current transition duration-200"
              :class="open ? 'opacity-0' : ''"
            />
            <span
              class="absolute left-0 top-[13px] h-px w-5 bg-current transition duration-200"
              :class="open ? '-translate-y-[6px] -rotate-45' : ''"
            />
          </span>
        </button>
      </div>
    </div>

    <div
      :id="menuId"
      class="md:hidden"
      :class="menuClass"
      style="
        transition:
          max-height 300ms ease,
          opacity 250ms ease;
      "
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
        <button
          type="button"
          class="mt-2 inline-flex items-center justify-center rounded-full bg-primary-500 px-4 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
          @click="openBooking"
        >
          {{ t('navigation.booking') }}
        </button>
      </div>
    </div>
  </header>
</template>
