<script setup lang="ts">
import SiteFooter from '@/sections/SiteFooter.vue'
</script>

<template>
  <div class="min-h-dvh bg-sand-50 font-sans text-taupe-800">
    <header class="border-b border-taupe-200/50 bg-sand-50/90">
      <div class="container-page flex items-center justify-between gap-4 py-4">
        <RouterLink to="/" class="font-serif text-lg font-semibold text-taupe-900 no-underline">
          Energie Pferd
        </RouterLink>
        <RouterLink
          to="/"
          class="text-sm font-medium text-taupe-700 no-underline transition hover:text-primary-600"
        >
          Zurück zur Website
        </RouterLink>
      </div>
    </header>

    <main class="container-page py-12 sm:py-16">
      <article class="mx-auto max-w-3xl">
        <p class="text-xs font-semibold tracking-[0.28em] text-taupe-600">RECHTLICHES</p>
        <h1 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-taupe-900 sm:text-4xl">
          Impressum
        </h1>

        <aside class="mt-8 rounded-2xl border border-gold-300/50 bg-gold-200/25 p-5 text-sm leading-relaxed">
          <strong class="font-semibold text-taupe-900">Vor Veröffentlichung ergänzen:</strong>
          Bitte deine vollständige Postanschrift eintragen und prüfen, ob für deine Tätigkeit
          weitere Pflichtangaben wie Gewerbebehörde, Kammerzugehörigkeit oder Berufsrecht gelten.
        </aside>

        <div class="imprint-content mt-10 space-y-10">
          <section>
            <h2>Medieninhaberin und verantwortlich für den Inhalt</h2>
            <p>
              Judith Kuneth<br />
              [Vollständige Postanschrift ergänzen]<br />
              Österreich
            </p>
            <p>
              E-Mail: <a href="mailto:judith.kuneth@gmail.com">judith.kuneth@gmail.com</a><br />
              Telefon: <a href="tel:+4367683555785">+43 676 83555785</a>
            </p>
          </section>

          <section>
            <h2>Unternehmensgegenstand</h2>
            <p>Persönliche Begleitung und energetische Körperarbeit in der Präsenz der Pferde.</p>
          </section>

          <section>
            <h2>Domain- und Hostinganbieter</h2>
            <p>
              World4You Internet Services GmbH<br />
              Wolfgang-Pauli-Straße 2, BT3<br />
              4020 Linz<br />
              Österreich<br />
              <a href="https://www.world4you.com/" target="_blank" rel="noopener">
                www.world4you.com
              </a>
            </p>
          </section>

          <section>
            <h2>Haftung für Inhalte und Links</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für
              Vollständigkeit, Richtigkeit und Aktualität kann dennoch keine Gewähr übernommen
              werden. Für Inhalte externer Websites, auf die verlinkt wird, sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2>Urheberrecht</h2>
            <p>
              Inhalte und Werke auf dieser Website unterliegen dem geltenden Urheberrecht. Eine
              Verwendung außerhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung der
              jeweiligen Rechteinhaberin oder des jeweiligen Rechteinhabers.
            </p>
          </section>
        </div>
      </article>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.imprint-content h2 {
  margin-bottom: 0.75rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--color-taupe-900);
}

.imprint-content p {
  margin-top: 0.75rem;
  font-size: 0.925rem;
  line-height: 1.8;
  color: var(--color-taupe-700);
}

.imprint-content a {
  color: var(--color-primary-600);
  text-underline-offset: 3px;
}
</style>
