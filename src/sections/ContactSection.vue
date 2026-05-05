<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'

const email = 'judith.kuneth@gmail.com'
const instagramUrl = 'https://instagram.com/judith.energie.pferd'
const phoneNumberRaw = '+43 676 83555785'
const whatsappNumber = phoneNumberRaw.replace(/\D/g, '')
const whatsappUrl = `https://wa.me/${whatsappNumber}`
</script>

<template>
  <section
    id="kontakt"
    class="py-12 sm:py-16"
  >
    <div class="container-page">
      <div class="relative mx-auto max-w-3xl">
        <div
          class="pointer-events-none absolute inset-x-0 -top-10 -z-10 mx-auto h-56 max-w-2xl rounded-full bg-gradient-to-r from-gold-200/30 via-sand-100/55 to-rose-200/25 blur-3xl"
          aria-hidden="true"
        />
        <RevealOnScroll
          as="div"
          class="text-center"
        >
          <figure class="mx-auto mb-6 w-fit">
            <div class="card-surface overflow-hidden rounded-full p-1">
              <img
                src="/IMG_20260324_094424.jpg"
                alt="Portrait in der Natur."
                class="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">KONTAKT</p>
          <h2
            class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl"
          >
            Schön, dass du da bist!
          </h2>
          <p class="mt-5 text-sm leading-relaxed text-taupe-700">
            Schreib mir ein paar Zeilen – ganz unverbindlich. Ich melde mich zeitnah mit einem
            Vorschlag für den nächsten Schritt.
          </p>

          <div class="mx-auto mt-10 max-w-xl space-y-4 text-sm">
            <div class="hairline" />
            <div class="flex flex-col gap-3">
              <a
                class="inline-flex items-center justify-between gap-4 rounded-xl border border-taupe-200/60 bg-white/60 px-4 py-3 font-medium text-taupe-900 no-underline transition hover:border-primary-500/45 hover:ring-2 hover:ring-primary-500/20"
                :href="`mailto:${email}`"
              >
                <span>E‑Mail</span>
                <span class="truncate text-taupe-700">{{ email }}</span>
              </a>
              <a
                class="inline-flex items-center justify-between gap-4 rounded-xl border border-taupe-200/60 bg-white/60 px-4 py-3 font-medium text-taupe-900 no-underline transition hover:border-primary-500/45 hover:ring-2 hover:ring-primary-500/20"
                :href="whatsappUrl"
                target="_blank"
                rel="noopener"
              >
                <span>WhatsApp</span>
                <span class="text-taupe-700">{{ phoneNumberRaw }}</span>
              </a>
              <a
                class="inline-flex items-center justify-between gap-4 rounded-xl border border-taupe-200/60 bg-white/60 px-4 py-3 font-medium text-taupe-900 no-underline transition hover:border-primary-500/45 hover:ring-2 hover:ring-primary-500/20"
                :href="instagramUrl"
                target="_blank"
                rel="noopener"
              >
                <span>Instagram</span>
                <span class="text-taupe-700">@judith.energie.pferd</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <!--
        <RevealOnScroll
          as="div"
          :delay-ms="120"
          class="lg:col-span-7"
        >
          <div class="card-surface p-6 sm:p-8">
            <form
              class="grid gap-5"
              @submit.prevent="onSubmit"
              aria-label="Kontaktformular"
            >
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="grid gap-2">
                  <label
                    class="text-sm font-medium text-taupe-900"
                    for="name"
                    >Name</label
                  >
                  <input
                    id="name"
                    v-model="name"
                    class="h-11 rounded-xl border border-taupe-200/70 bg-white/70 px-4 text-sm text-taupe-900 placeholder:text-taupe-400 shadow-sm focus:border-gold-300/70 focus:ring-2 focus:ring-gold-200/40"
                    type="text"
                    autocomplete="name"
                    placeholder="Dein Name"
                    required
                  />
                </div>
                <div class="grid gap-2">
                  <label
                    class="text-sm font-medium text-taupe-900"
                    for="contact"
                    >E‑Mail oder Telefon</label
                  >
                  <input
                    id="contact"
                    v-model="contact"
                    class="h-11 rounded-xl border border-taupe-200/70 bg-white/70 px-4 text-sm text-taupe-900 placeholder:text-taupe-400 shadow-sm focus:border-gold-300/70 focus:ring-2 focus:ring-gold-200/40"
                    type="text"
                    autocomplete="email"
                    placeholder="z. B. name@mail.de"
                    required
                  />
                </div>
              </div>

              <div class="grid gap-2">
                <label
                  class="text-sm font-medium text-taupe-900"
                  for="topic"
                  >Worum geht’s?</label
                >
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
                <label
                  class="text-sm font-medium text-taupe-900"
                  for="message"
                  >Nachricht</label
                >
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
        -->
      </div>
    </div>
  </section>
</template>
