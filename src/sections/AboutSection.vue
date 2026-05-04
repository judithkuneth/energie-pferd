<script setup lang="ts">
import RevealOnScroll from '@/components/RevealOnScroll.vue'

const pillars = [
  {
    title: 'Empfangen',
    icon: 'heart' as const,
    text: 'Allein durch ihre Präsenz bringen die Pferde etwas in dir in Bewegung – sanft, ohne dass du etwas tun musst. Hier darfst du sein, ankommen, loslassen und dich tragen lassen.'
    // text: 'Pferde nehmen wahr, was Worte nicht sagen. Sie spüren, was du in dir trägst, oft noch bevor du selbst es bemerkst. Allein durch ihre Präsenz bringen sie etwas in dir in Bewegung – sanft, ohne dass du etwas tun musst. Hier darfst du sein, ankommen, loslassen und dich tragen lassen.'
  },
  {
    title: 'Erkennen',
    icon: 'eye' as const,
    text: 'Pferde reagieren auf feine Ebenen. Sie zeigen ehrlich, was gerade in dir lebendig ist – ohne Bewertung, dafür mit Klarheit. Sie zeigen dir, wo verschiedene Seiten in dir noch nicht zusammenfinden, und begleiten dich dabei, wieder in deine innere Mitte zu kommen. Bist du bereit, näher hinzusehen?'
    // text: 'Pferde reagieren auf feine Ebenen. Sie zeigen ehrlich, was gerade in dir lebendig ist. Ohne Bewertung, dafür mit Klarheit. Sie laden dich ein, in Verbindung zu treten – mit deinem Körper, deinen Gefühlen und deiner inneren Wahrheit. Sie zeigen dir, wo verschiedene Seiten in dir noch nicht zusammenfinden – und begleiten dich dabei, wieder in dein inneres Gleichgewicht zu kommen. Bist du bereit, näher hinzusehen?'
  },
  {
    title: 'Gestalten',
    icon: 'sparkles' as const,
    // text: 'Was du erkannt hast, darf sich verändern. Alte Muster dürfen weichen, Neues darf wachsen. Gemeinsam mit den Pferden begleite ich dich dabei, andere Wege zu gehen, neue Antworten zu finden – und sie so zu verkörpern, dass sie in deinem Alltag lebendig werden.'
    text: 'Was du erkannt hast, darf sich verändern. Alte Muster dürfen weichen, Neues darf wachsen. Gemeinsam mit den Pferden begleite ich dich dabei, andere Wege zu gehen, neue Antworten zu finden – und sie so zu verkörpern, dass sie in deinem Alltag lebendig werden.'
  }
] as const

const stopStyles = [
  { top: '2%', left: '0%' },
  { top: '28%', left: '36%' },
  { top: '10%', left: '72%' }
] as const
</script>

<template>
  <section
    id="ueber-mich"
    class="relative pb-14 pt-14 sm:pb-16 sm:pt-20"
  >
    <div class="container-page">
      <RevealOnScroll
        as="div"
        class="mx-auto max-w-3xl space-y-10 sm:space-y-14"
      >
        <blockquote class="border-l border-gold-300/60 py-1 pl-6 sm:pl-8">
          <!-- <p class="font-serif text-lg leading-loose tracking-tight text-taupe-900 sm:text-2xl">
            Pferde reagieren auf feine Ebenen – sie zeigen ehrlich, was gerade in dir lebendig ist.
            Ohne Bewertung, dafür mit Klarheit.
          </p> -->
          <p class="font-serif text-lg leading-loose tracking-tight text-taupe-900 sm:text-2xl">
            Pferde nehmen wahr, was Worte nicht sagen. Sie spüren, was du in dir trägst, oft noch
            bevor du selbst es bemerkst.
          </p>
        </blockquote>

        <!-- <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">Wie ich arbeite</p> -->

        <!-- <p class="text-base leading-loose text-taupe-700 sm:text-xl sm:leading-loose">
          Meine Arbeit verbindet die Präsenz der Pferde mit ganzheitlicher Begleitung – vom Fühlen
          zum Tun, von Innen nach Außen. Denn echte Veränderung entsteht nicht im Verstehen allein,
          sondern dort, wo das Erkannte im Körper ankommt und gelebt wird.
        </p> -->
        <p class="text-base leading-loose text-taupe-700 sm:text-xl sm:leading-loose">
          Meine Arbeit verbindet die Präsenz der Pferde mit ganzheitlicher Begleitung. Denn die
          Pferde zeigen nicht nur auf – sie fordern dich auf, das Erkannte so zu verkörpern, dass es
          in deinem Alltag lebendig wird. Lass dich von ihnen führen – in dein eigenes
          Gleichgewicht, in deine Klarheit, in deine Größe.
        </p>
      </RevealOnScroll>
    </div>
  </section>

  <!-- <section class="relative pb-20 pt-6 sm:pb-28 sm:pt-10">
    <div class="container-page">
      <div class="relative mx-auto max-w-6xl">
        <div
          class="pointer-events-none absolute inset-x-0 -top-10 -z-10 mx-auto h-56 max-w-4xl rounded-full bg-gradient-to-r from-gold-200/30 via-sand-100/50 to-rose-200/20 blur-3xl"
          aria-hidden="true"
        />

        <div class="relative mt-12 lg:mt-0 lg:min-h-[30rem]">
          <svg
            class="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block"
            viewBox="0 0 1000 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="aboutFlow"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stop-color="rgb(212 167 78)"
                  stop-opacity="0.0"
                />
                <stop
                  offset="30%"
                  stop-color="rgb(212 167 78)"
                  stop-opacity="0.45"
                />
                <stop
                  offset="70%"
                  stop-color="rgb(212 167 78)"
                  stop-opacity="0.45"
                />
                <stop
                  offset="100%"
                  stop-color="rgb(212 167 78)"
                  stop-opacity="0.0"
                />
              </linearGradient>
              <filter
                id="aboutFlowBlur"
                x="-20%"
                y="-50%"
                width="140%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="2.2" />
              </filter>
            </defs>

            <path
              d="M40,120 C180,40 300,60 410,140 C520,220 640,250 760,160 C860,85 935,105 980,150"
              fill="none"
              stroke="url(#aboutFlow)"
              stroke-width="3.2"
              stroke-linecap="round"
              filter="url(#aboutFlowBlur)"
            />
            <path
              d="M40,120 C180,40 300,60 410,140 C520,220 640,250 760,160 C860,85 935,105 980,150"
              fill="none"
              stroke="url(#aboutFlow)"
              stroke-width="1.4"
              stroke-linecap="round"
            />
          </svg>

          <div class="space-y-14 lg:space-y-0">
            <RevealOnScroll
              v-for="(pillar, idx) in pillars"
              :key="pillar.title"
              as="article"
              class="group relative max-w-2xl lg:absolute lg:w-[22rem]"
              :style="stopStyles[idx]"
              :delay-ms="idx * 80"
            >
              <div class="flex items-center gap-4">
                <span
                  class="relative inline-flex h-11 w-11 shrink-0 items-center justify-center text-taupe-700"
                >
                  <span
                    class="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold-200/55 via-sand-100/70 to-rose-200/35 blur-[1px]"
                    aria-hidden="true"
                  />
                  <span
                    class="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-gold-200/20 blur-xl"
                    aria-hidden="true"
                  />

                  <svg
                    v-if="pillar.icon === 'heart'"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <svg
                    v-else-if="pillar.icon === 'eye'"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg
                    v-else
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715 18 9.5l-.259-.785a2.25 2.25 0 00-1.22-1.22L15.75 7.5l.785-.259a2.25 2.25 0 001.22-1.22L18 5.25l.259.785a2.25 2.25 0 001.22 1.22L21 7.5l-.785.259a2.25 2.25 0 00-1.22 1.22zM16.898 20.572 16.5 21l-.398-.428a2.25 2.25 0 010-2.144l.398-.428.398.428a2.25 2.25 0 010 2.144z"
                    />
                  </svg>
                </span>

                <div class="min-w-0">
                  <h3 class="font-serif text-2xl font-semibold tracking-tight text-taupe-900">
                    {{ pillar.title }}
                  </h3>
                  <div
                    class="mt-3 h-px w-20 bg-gradient-to-r from-gold-300/60 via-gold-300/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <p class="mt-6 max-w-prose text-sm leading-loose text-taupe-700 sm:text-base">
                {{ pillar.text }}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>
