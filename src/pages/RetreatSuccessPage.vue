<script setup lang="ts">
import SiteFooter from '@/sections/SiteFooter.vue'
import RetreatTerms from '@/components/RetreatTerms.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-sand-50 text-taupe-800">
    <main class="container-page flex flex-1 items-center justify-center py-20">
      <article class="max-w-xl text-center">
        <p class="text-xs uppercase tracking-[.2em] text-taupe-600">Gruppenretreat · Pferdemagie</p>
        <div
          class="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-sage-200 text-2xl text-[#294b40]"
          aria-hidden="true"
        >
          ✓
        </div>
        <h1 class="mt-6 font-forum text-5xl">Danke für deine Anmeldung.</h1>
        <p class="mt-6 leading-relaxed">
          Deine Angaben wurden erfolgreich übermittelt. Mit deiner Anmeldung buchst du verbindlich
          einen Platz für das Retreat. Dein Platz ist nach Erhalt der Buchungsbestätigung für dich
          reserviert.
        </p>
        <section
          class="mt-8 rounded-2xl border border-taupe-200 bg-sand-100/60 p-6 text-left"
          aria-labelledby="payment-title"
        >
          <h2 id="payment-title" class="font-forum text-3xl">Dein Teilnahmebeitrag</h2>
          <p class="mt-3 text-sm leading-relaxed">
            Bitte überweise 280 € innerhalb von 48 Stunden auf das folgende Konto:
          </p>
          <dl class="mt-5 space-y-3 text-sm">
            <div>
              <dt class="text-taupe-600">Kontoinhaber:in</dt>
              <dd>Judith Kuneth</dd>
            </div>
            <div>
              <dt class="text-taupe-600">IBAN</dt>
              <dd>LT60 3250 0545 4994 5443</dd>
            </div>
            <div>
              <dt class="text-taupe-600">BIC</dt>
              <dd>REVOLT21</dd>
            </div>
            <div>
              <dt class="text-taupe-600">Betrag</dt>
              <dd>280 €</dd>
            </div>
            <div>
              <dt class="text-taupe-600">Verwendungszweck</dt>
              <dd>Pferdemagie - dein Vor- und Nachname</dd>
            </div>
          </dl>
          <p class="mt-5 text-xs leading-relaxed text-taupe-600">
            Bei Fragen melde dich bei
            <a class="underline" href="tel:+4367683555785">Judith unter +43 676/83 555 785</a>.
          </p>
        </section>
        <section
          class="mt-6 text-left text-sm leading-relaxed"
          aria-labelledby="cancellation-title"
        >
          <h2 id="cancellation-title" class="mb-6 font-forum text-3xl">
            Buchungs- &amp; Stornobedingungen
          </h2>
          <RetreatTerms />
        </section>
        <!-- <p class="mt-4 text-sm leading-relaxed text-taupe-600">
          Falls du eine Bestätigungs-E-Mail erhältst, folge bitte dem Link darin. Schau
          gegebenenfalls auch in deinen Spam-Ordner.
        </p> -->
        <p class="mt-8 text-sm font-medium">
          11. Oktober 2026 · 10–17 Uhr<br />Blåsehof · Maria Saal
        </p>
        <RouterLink
          to="/retreat"
          class="mt-8 inline-flex rounded-full bg-[#294b40] px-7 py-4 text-sm text-white no-underline"
          >Zurück zum Retreat</RouterLink
        >
      </article>
    </main>
    <SiteFooter />
  </div>
</template>
