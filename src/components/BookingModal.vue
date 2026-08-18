<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const bookingUrl = 'https://zeeg.me/judithkuneth/discovery-call'
const closeButton = ref<HTMLButtonElement | null>(null)
const isLoading = ref(false)
const loadFailed = ref(false)
let scriptLoaded = false
let previousBodyOverflow = ''

async function loadZeeg() {
  if (scriptLoaded) return

  isLoading.value = true
  loadFailed.value = false
  await nextTick()

  const script = document.createElement('script')
  script.src = 'https://assets.zeeg.me/embed.min.js'
  script.async = true
  script.dataset.user = 'judithkuneth'
  script.dataset.eventType = 'discovery-call'
  script.dataset.redirectParent = 'true'
  script.onload = () => {
    scriptLoaded = true
    isLoading.value = false
  }
  script.onerror = () => {
    isLoading.value = false
    loadFailed.value = true
  }
  document.body.appendChild(script)
}

watch(
  () => props.open,
  async (open) => {
    if (open) {
      previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      await loadZeeg()
      await nextTick()
      closeButton.value?.focus()
      return
    }

    document.body.style.overflow = previousBodyOverflow
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <Teleport to="body">
    <div
      v-show="open"
      class="fixed inset-0 z-[80] overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      @keydown.esc="emit('close')"
    >
      <button
        type="button"
        class="fixed inset-0 bg-taupe-900/45 backdrop-blur-sm"
        aria-label="Terminbuchung schließen"
        @click="emit('close')"
      />

      <div class="container-page relative flex min-h-dvh items-start justify-center py-3 sm:py-8">
        <div
          class="my-2 w-full max-w-4xl overflow-hidden rounded-2xl border border-taupe-200/60 bg-sand-50 shadow-2xl sm:my-0 sm:rounded-3xl"
        >
          <div class="flex items-start justify-between gap-4 px-4 pb-3 pt-4 sm:px-8 sm:pb-4 sm:pt-6">
            <div>
              <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">TERMINBUCHUNG</p>
              <h2
                id="booking-title"
                class="mt-2 font-serif text-2xl font-semibold tracking-tight text-taupe-900 sm:text-3xl"
              >
                Kennenlerngespräch
              </h2>
              <p class="mt-2 text-sm text-taupe-600">
                20 Minuten · online · kostenlos und unverbindlich
              </p>
            </div>
            <button
              ref="closeButton"
              type="button"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-taupe-200/70 bg-white/90 text-taupe-800 transition hover:bg-white"
              aria-label="Terminbuchung schließen"
              @click="emit('close')"
            >
              ✕
            </button>
          </div>

          <div class="relative border-t border-taupe-200/60 bg-white/65">
            <div
              id="zeeg-embed-judithkuneth-discovery-call"
              class="zeeg-inline-widget"
              style="min-width: 280px; min-height: 780px"
            />

            <div
              v-if="isLoading"
              class="absolute inset-x-0 top-0 flex min-h-48 items-center justify-center px-5 text-sm text-taupe-600"
            >
              Terminkalender wird geladen …
            </div>

            <div
              v-if="loadFailed"
              class="absolute inset-x-0 top-0 flex min-h-64 flex-col items-center justify-center gap-4 px-5 text-center"
            >
              <p class="text-sm text-taupe-700">Der Terminkalender konnte nicht geladen werden.</p>
              <a
                :href="bookingUrl"
                target="_blank"
                rel="noopener"
                class="rounded-full bg-primary-500 px-5 py-3 text-sm font-medium text-sand-50 no-underline transition hover:bg-primary-600"
              >
                Buchungsseite öffnen
              </a>
            </div>
          </div>

          <div class="border-t border-taupe-200/60 px-4 py-4 text-center sm:px-8">
            <a
              :href="bookingUrl"
              target="_blank"
              rel="noopener"
              class="text-xs font-medium text-taupe-600 transition hover:text-primary-600"
            >
              Buchungsseite in einem neuen Fenster öffnen
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
