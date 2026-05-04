<script setup lang="ts">
import { computed, ref } from 'vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'

const email = 'hello@energie-pferd.de'
const instagramUrl = 'https://instagram.com/energie.pferd'

const name = ref('')
const contact = ref('')
const message = ref('')
const topic = ref('Session anfragen')

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Energie Pferd – ${topic.value}`)
  const body = encodeURIComponent(
    `Name: ${name.value}\nKontakt: ${contact.value}\n\nNachricht:\n${message.value}\n`,
  )
  return `mailto:${email}?subject=${subject}&body=${body}`
})

function onSubmit() {
  window.location.href = mailtoHref.value
}
</script>

<template>
  <section id="kontakt" class="py-16 sm:py-24">
    <div class="container-page">
      <div class="grid gap-12 lg:grid-cols-12">
        <RevealOnScroll as="div" class="lg:col-span-5">
          <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">KONTAKT · BUCHUNG</p>
          <h2 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
            Beginne deine Reise.
          </h2>
          <p class="mt-5 text-sm leading-relaxed text-taupe-700">
            Schreib mir ein paar Zeilen – ganz unverbindlich. Ich melde mich zeitnah mit einem Vorschlag
            für den nächsten Schritt.
          </p>

          <div class="mt-8 space-y-4 text-sm">
            <div class="hairline" />
            <div class="flex flex-col gap-3">
              <a
                class="inline-flex items-center justify-between rounded-xl border border-taupe-200/60 bg-white/60 px-4 py-3 font-medium text-taupe-900 no-underline transition hover:bg-white"
                :href="`mailto:${email}`"
              >
                <span>E‑Mail</span>
                <span class="text-taupe-700">{{ email }}</span>
              </a>
              <a
                class="inline-flex items-center justify-between rounded-xl border border-taupe-200/60 bg-white/60 px-4 py-3 font-medium text-taupe-900 no-underline transition hover:bg-white"
                :href="instagramUrl"
                target="_blank"
                rel="noopener"
              >
                <span>Instagram</span>
                <span class="text-taupe-700">@energie.pferd</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="div" :delay-ms="120" class="lg:col-span-7">
          <div class="card-surface p-6 sm:p-8">
            <form class="grid gap-5" @submit.prevent="onSubmit" aria-label="Kontaktformular">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="grid gap-2">
                  <label class="text-sm font-medium text-taupe-900" for="name">Name</label>
                  <input
                    id="name"
                    v-model="name"
                    class="h-11 rounded-xl border border-taupe-200/70 bg-white/70 px-4 text-sm text-taupe-900 placeholder:text-taupe-400 shadow-sm focus:border-gold-300/70 focus:ring-2 focus:ring-gold-200/40"
                    type="text"
                    autocomplete="name"
                    placeholder="Dein Name"
                    required
                  >
                </div>
                <div class="grid gap-2">
                  <label class="text-sm font-medium text-taupe-900" for="contact">E‑Mail oder Telefon</label>
                  <input
                    id="contact"
                    v-model="contact"
                    class="h-11 rounded-xl border border-taupe-200/70 bg-white/70 px-4 text-sm text-taupe-900 placeholder:text-taupe-400 shadow-sm focus:border-gold-300/70 focus:ring-2 focus:ring-gold-200/40"
                    type="text"
                    autocomplete="email"
                    placeholder="z. B. name@mail.de"
                    required
                  >
                </div>
              </div>

              <div class="grid gap-2">
                <label class="text-sm font-medium text-taupe-900" for="topic">Worum geht’s?</label>
                <select
                  id="topic"
                  v-model="topic"
                  class="h-11 rounded-xl border border-taupe-200/70 bg-white/70 px-4 text-sm text-taupe-900 shadow-sm focus:border-gold-300/70 focus:ring-2 focus:ring-gold-200/40"
                >
                  <option>Session anfragen</option>
                  <option>Reiki mit Pferden</option>
                  <option>Healing Session</option>
                  <option>Energetische Begleitung</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div class="grid gap-2">
                <label class="text-sm font-medium text-taupe-900" for="message">Nachricht</label>
                <textarea
                  id="message"
                  v-model="message"
                  class="min-h-32 rounded-xl border border-taupe-200/70 bg-white/70 px-4 py-3 text-sm text-taupe-900 placeholder:text-taupe-400 shadow-sm focus:border-gold-300/70 focus:ring-2 focus:ring-gold-200/40"
                  placeholder="Was wünschst du dir – und was ist gerade wichtig?"
                  required
                />
              </div>

              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  class="shadow-glow inline-flex items-center justify-center rounded-full bg-taupe-800 px-6 py-3 text-sm font-medium text-sand-50 transition hover:bg-taupe-700 active:translate-y-px"
                >
                  Anfrage senden
                </button>
                <p class="text-xs leading-relaxed text-taupe-600">
                  Klick öffnet dein E‑Mail‑Programm mit vorausgefüllter Nachricht.
                </p>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

