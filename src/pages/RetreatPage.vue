<script setup lang="ts">
import SiteFooter from '@/sections/SiteFooter.vue'
import logoMark from '@/assets/brand/energie-pferd-mark-128.png'

const heroImage = '/retreat/hero-sabine-1800.webp'
const impressions = [
  {
    src: '/retreat/impression-sabine-1200.webp',
    srcset: '/retreat/impression-sabine-640.webp 640w, /retreat/impression-sabine-1200.webp 1200w',
    alt: 'Sabine begleitet eine Frau auf einer Behandlungsliege in der Nähe eines Pferdes auf der Weide',
    position: '35% center',
  },
  {
    src: '/retreat/impression-judith-1080.webp',
    srcset: '/retreat/impression-judith-640.webp 640w, /retreat/impression-judith-1080.webp 1080w',
    alt: 'Judith an einer Behandlungsliege, umgeben von Pferden unter grünen Bäumen',
    position: 'center 55%',
  },
]
const experiences = [
  {
    title: 'Horse Healing Session',
    detail: 'Spüren & verbinden',
    text: 'Zeit für Körperarbeit, achtsame Berührung und die Verbindung mit den Pferden.',
  },
  {
    title: 'Begegnungen in der Herde',
    detail: 'Präsent sein & wahrnehmen',
    text: 'Den Pferden begegnen und wahrnehmen, was sich im Hier und Jetzt zeigt.',
  },
  {
    title: 'Waldbaden',
    detail: 'Eintauchen & ankommen',
    text: 'Langsamer werden, die Sinne öffnen und die Natur auf dich wirken lassen.',
  },
  {
    title: 'Sharing & Kreise',
    detail: 'Austauschen & gehört werden',
    text: 'Raum für das, was dich bewegt. Du entscheidest, was du teilen möchtest.',
  },
  {
    title: 'Gemeinsam genießen',
    detail: 'Nähren & durchatmen',
    text: 'Ein vegetarisches Bio-Mittagessen und Snacks begleiten dich durch den Tag.',
  },
]
</script>

<template>
  <div class="retreat-page">
    <a class="skip-link" href="#retreat-content">Zum Inhalt springen</a>
    <header class="retreat-header">
      <div class="container-page header-inner">
        <RouterLink to="/" class="retreat-brand" aria-label="Energie Pferd – zur Startseite">
          <img :src="logoMark" alt="" width="42" height="42" />
          <span class="brand-wordmark font-forum">Energie Pferd</span>
        </RouterLink>
        <nav aria-label="Retreat-Navigation">
          <a href="#begleitung" class="guide-link">Deine Begleiterinnen</a>
          <a href="#anmeldung" class="retreat-button small"
            >Platz sichern <span aria-hidden="true">↗</span></a
          >
        </nav>
      </div>
    </header>

    <main id="retreat-content">
      <section class="retreat-hero" aria-labelledby="retreat-title">
        <img
          :src="heroImage"
          srcset="/retreat/hero-sabine-960.webp 960w, /retreat/hero-sabine-1440.webp 1440w, /retreat/hero-sabine-1800.webp 1800w"
          sizes="(max-width: 767px) 1000px, 100vw"
          alt="Sabine begleitet eine Frau auf einer Behandlungsliege, während zwei Pferde ihnen auf der Weide nahe sind"
          class="hero-photo"
          fetchpriority="high"
        />
        <div class="hero-shade" />
        <div class="container-page hero-content">
          <p class="eyebrow">Gruppenretreat · Pferdemagie</p>
          <h1 id="retreat-title">Ein Tag für dich.<br /><em>Lass dich berühren.</em></h1>
          <p class="hero-copy">
            Ein Tag zum Ankommen, Spüren und Sein im Raum der Pferde.
          </p>
          <a href="#anmeldung" class="retreat-button light"
            >Platz sichern <span aria-hidden="true">↗</span></a
          >
          <p class="hero-date">
            11. Oktober 2026 <span aria-hidden="true">·</span> Blåsehof, Kärnten
          </p>
        </div>
        <span class="photo-credit">Foto: Christina Passegger</span>
      </section>

      <div class="facts-strip">
        <dl class="container-page facts-grid">
          <div>
            <dt>Deine Auszeit</dt>
            <dd>11. Oktober 2026</dd>
          </div>
          <div>
            <dt>Zeit zum Sein</dt>
            <dd>10 – 17 Uhr</dd>
          </div>
          <div>
            <dt>Persönlicher Rahmen</dt>
            <dd>Max. 6 Teilnehmer:innen</dd>
          </div>
          <div>
            <dt>Dein Beitrag</dt>
            <dd>€ 280</dd>
          </div>
        </dl>
      </div>

      <section class="container-page section-space intro-grid">
        <div>
          <p class="eyebrow">Zurück zu dir</p>

             <h2>Mehr Sein.<br />Mehr Verbindung.<br /><em>Mehr du.</em></h2>
        </div>
        <div class="prose-copy">
          <p class="intro-lead">
            Vielleicht sehnst du dich nach Klarheit, Sicherheit oder Verbindung zu dir selbst. Vielleicht möchtest du ganz einfach nur sein und fühlen was ist.

          </p>
          <p>
            In der Präsenz der Pferde liegt etwas zutiefst Magisches. Sie sind feinfühlig, wild, frei und
            ganz im Moment. In der Begegnung mit ihnen darf sichtbar werden, was im Alltag oft unter
            der Oberfläche bleibt.
          </p>
          <p>
            Gemeinsam öffnen wir einen Raum zum Ankommen, Wahrnehmen und Begegnen. Körperarbeit,
            achtsame Berührung und die Präsenz der Pferde laden dich ein, zur Ruhe zu kommen und dir
            selbst näher zu sein – in deinem Tempo, auf deine Weise.
          </p>
        </div>
      </section>

      <section id="erleben" class="experience-section section-space">
        <div class="container-page experience-grid">
          <div class="experience-heading">
            <p class="eyebrow">Was dich erwartet</p>
            <h2>Ein Tag, der<br /><em>dir Raum gibt.</em></h2>
            <p>
              Von Anfang bis Ende liebevoll begleitet.<br />Mit Zeit für Begegnung, Stille und
              Genuss.
            </p>
          </div>
          <ol class="experience-list">
            <li v-for="(experience, index) in experiences" :key="experience.title">
              <span class="experience-number" aria-hidden="true">0{{ index + 1 }}</span>
              <div>
                <p class="experience-detail">{{ experience.detail }}</p>
                <h3>{{ experience.title }}</h3>
                <p>{{ experience.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="permission-section container-page" aria-label="Raum für dich">
        <span class="small-star" aria-hidden="true">✳</span>
        <h2>Nichts muss. <em>Alles darf.</em></h2>
        <p>
          Du darfst einfach da sein. Spüren, was gerade ist.<br />Und dir selbst mit Offenheit
          begegnen.
        </p>
      </section>

      <section id="begleitung" class="container-page section-space guides-section">
        <div class="section-heading">
          <p class="eyebrow">Wir halten den Raum für dich</p>
          <h2>Deine <em>Begleiterinnen.</em></h2>
          <p>
            Zwei Frauen, eine gemeinsame Herzensangelegenheit:<br />dich in deiner Verbindung zu dir
            selbst zu begleiten.
          </p>
        </div>
        <div class="guides-grid">
          <article>
            <img
              src="/retreat/judith.webp"
              alt="Judith sitzt auf einem Baumstamm in der Natur. Sie beschreibt sich als Kraftentfalterin und Brückenbauerin zwischen Welten."
              width="1080"
              height="1350"
              loading="lazy"
            />
            <div class="guide-copy">
              <p class="eyebrow">Kraftentfalterin & Wegbegleiterin</p>
              <h3>Judith Kuneth</h3>
              <p>„Deine Wegbegleiterin durch Licht und Schatten – zurück in deine Kraft.“</p>
              <a href="tel:+4367683555785">Judith anrufen <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article>
            <img
              src="/retreat/sabine.webp"
              alt="Sabine mit ihrer Pferdepartnerin Joey auf der Weide. Sie beschreibt sich als Raumhalterin für Entfaltung und Begleiterin in dein volles Potenzial."
              width="1080"
              height="1350"
              loading="lazy"
            />
            <div class="guide-copy">
              <p class="eyebrow">Raumhalterin & Visionärin</p>
              <h3><span class="academic-title">Mag.a.phil.</span> Sabine Dörfler</h3>
              <p>„Deine Begleiterin in dein volles Potenzial – mit Raum für deine Entfaltung.“</p>
              <a href="tel:+4369910751170">Sabine anrufen <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section
        class="impressions-section"
        aria-label="Impressionen aus der Natur und mit den Pferden"
      >
        <img
          v-for="photo in impressions"
          :key="photo.src"
          :src="photo.src"
          :srcset="photo.srcset"
          sizes="55vw"
          :style="{ objectPosition: photo.position }"
          :alt="photo.alt"
          loading="lazy"
          width="960"
          height="720"
        />
      </section>

      <section id="anmeldung" class="booking-section section-space">
        <div class="container-page booking-grid">
          <div>
            <p class="eyebrow">Deine Auszeit am Blåsehof</p>
            <h2>Ein Tag für dich.<br /><em>Bist du dabei?</em></h2>
            <p class="booking-intro">
              Wir freuen uns auf dich. Für deine Anmeldung oder Fragen zum Retreat melde dich
              persönlich bei Judith <a href="tel:+4367683555785">+43 676/83 555 785</a>
              oder Sabine <a href="tel:+4369910751170">+43 699/10 75 11 70</a>.
            </p>
            <a
              href="tel:+4367683555785"
              class="retreat-button light booking-cta"
              aria-label="Platz sichern – Judith zur Anmeldung anrufen"
            >Platz sichern <span aria-hidden="true">↗</span></a>
          </div>
          <div class="booking-details">
            <p class="eyebrow">Alles auf einen Blick</p>
            <dl>
              <div>
                <dt>Wann</dt>
                <dd><time datetime="2026-10-11">11. Oktober 2026</time><br />10–17 Uhr</dd>
              </div>
              <div>
                <dt>Wo</dt>
                <dd>Blåsehof<br />Arndorf 6, A-9063 Maria Saal</dd>
              </div>
              <div>
                <dt>Beitrag</dt>
                <dd>
                  € 280<br /><span
                    >Inklusive vegetarischem Bio-Mittagessen & Snacks</span
                  >
                </dd>
              </div>
              <div>
                <dt>Gruppe</dt>
                <dd>Maximal 6 Teilnehmer:innen</dd>
              </div>
            </dl>
            <p class="stay-note">
              Du möchtest länger bleiben?<br />Apartments am Hof:
              <a href="tel:+4369910751170">Sabine: +43 699/10 75 11 70</a><br />
              <a href="https://www.blasehof.at" target="_blank" rel="noopener noreferrer"
                >www.blasehof.at ↗</a
              >
            </p>
          </div>
        </div>
        <p class="container-page weather-note">
          Bei extremen Wetterlagen behalten wir uns vor, die Veranstaltung abzusagen.
        </p>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.retreat-page {
  --forest: #294b40;
  --cream: #f4f1e8;
  color: #353b33;
  background: #fdfcf9;
}
.retreat-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fdfcf9f5;
  border-bottom: 1px solid #deded3;
  backdrop-filter: blur(12px);
}
.header-inner,
.retreat-brand,
nav {
  display: flex;
  align-items: center;
}
.header-inner {
  justify-content: space-between;
  gap: 16px;
  padding-block: 14px;
}
.retreat-brand {
  gap: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 21px;
  letter-spacing: 0.08em;
}
nav {
  gap: 28px;
  font-size: 13px;
}
nav a {
  text-decoration: none;
}
.retreat-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border-radius: 999px;
  background: var(--forest);
  color: white;
  padding: 16px 26px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s;
}
.retreat-button:hover {
  background: #3e6154;
}
.retreat-button.small {
  padding: 11px 20px;
  gap: 15px;
}
.retreat-button.light {
  background: #f7f4e9;
  color: #294b40;
}
.retreat-button.light:hover {
  background: #e7e7d7;
}
.retreat-hero {
  position: relative;
  min-height: 660px;
  display: flex;
  align-items: center;
  color: white;
}
.hero-photo,
.hero-shade {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-photo {
  object-position: center 60%;
}
.hero-shade {
  background: linear-gradient(90deg, #1c1a18d9 0%, #1c1a1889 55%, #1c1a1822 100%);
}
.hero-content {
  position: relative;
  padding-block: 90px;
}
.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  line-height: 1.8;
}
h1,
h2,
h3 {
  font-family: Forum, Georgia, serif;
  font-weight: 400;
}
h1 {
  font-size: clamp(52px, 6.2vw, 82px);
  line-height: 1.04;
  margin: 26px 0;
  letter-spacing: -0.025em;
}
h2 {
  font-size: clamp(40px, 4.5vw, 60px);
  line-height: 1.09;
  letter-spacing: -0.02em;
  margin: 20px 0 24px;
}
em {
  font-style: normal;
  color: #72826a;
}
h1 em {
  color: #e0e6c9;
}
.hero-copy {
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 30px;
}
.hero-date {
  margin-top: 28px;
  font-size: 13px;
  letter-spacing: 0.04em;
}
.hero-date span {
  padding-inline: 10px;
}
.facts-strip {
  background: var(--cream);
  border-bottom: 1px solid #e3e1d7;
}
.photo-credit {
  position: absolute;
  bottom: 12px;
  right: 18px;
  font-size: 10px;
  color: #fff;
}
.facts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-block: 30px;
  gap: 22px;
}
.facts-grid dt {
  font-size: 11px;
  color: #646b60;
  margin-bottom: 7px;
}
.facts-grid dd {
  font-size: 15px;
  font-weight: 500;
}
.section-space {
  padding-block: 96px;
}
.intro-grid,
.experience-grid,
.booking-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 85px;
}
.prose-copy {
  font-size: 15px;
  line-height: 1.9;
}
.prose-copy p + p {
  margin-top: 20px;
}
.prose-copy .intro-lead {
  font-size: 21px;
  line-height: 1.6;
  margin-bottom: 25px;
}
.experience-section {
  background: #eef0e8;
}
.experience-heading > p:last-child {
  font-size: 15px;
  line-height: 1.9;
}
.experience-list {
  list-style: none;
  padding: 0;
}
.experience-list li {
  display: flex;
  gap: 23px;
  padding: 25px 0;
  border-top: 1px solid #cdd3c6;
}
.experience-list li:first-child {
  padding-top: 0;
  border-top: 0;
}
.experience-number {
  font-family: Forum, serif;
  font-size: 24px;
  color: #718267;
}
.experience-detail {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 10px;
  color: #57684f;
}
.experience-list h3 {
  font-size: 29px;
  margin: 5px 0 8px;
  line-height: 1.15;
}
.experience-list h3 + p {
  font-size: 14px;
  line-height: 1.8;
}
.permission-section {
  padding-block: 80px 20px;
  text-align: center;
}
.small-star {
  font-size: 32px;
  color: #758168;
}
.permission-section p,
.section-heading > p:last-child {
  font-size: 15px;
  line-height: 1.85;
}
.section-heading {
  text-align: center;
  margin-bottom: 46px;
}
.guides-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
  max-width: 960px;
  margin-inline: auto;
}
.guides-grid img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.guide-copy {
  padding-top: 25px;
}
.guide-copy h3 {
  font-size: 34px;
  margin: 8px 0 12px;
}
.academic-title {
  font-size: 21px;
}
.guide-copy > p:not(.eyebrow) {
  font-size: 15px;
  line-height: 1.8;
  max-width: 360px;
}
.guide-copy a {
  display: inline-flex;
  gap: 24px;
  margin-top: 20px;
  font-size: 13px;
  color: var(--forest);
}
.impressions-section {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 12px;
  padding: 0 12px;
}
.impressions-section img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}
.booking-section {
  margin-top: 12px;
  background: var(--forest);
  color: #f8f7ed;
}
.booking-section em {
  color: #cad6b6;
}
.booking-intro {
  max-width: 390px;
  font-size: 15px;
  line-height: 1.9;
}
.booking-cta {
  margin-top: 30px;
  padding: 18px 32px;
  font-size: 16px;
}
.contact-links {
  display: grid;
  gap: 8px;
  margin-top: 26px;
  font-size: 12px;
  color: #d3ddc8;
}
.contact-links a {
  text-decoration: none;
  width: fit-content;
}
.contact-links a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.booking-details {
  border: 1px solid #ffffff35;
  padding: 32px;
  border-radius: 4px;
  background: #ffffff06;
}
.booking-details dl {
  margin-top: 26px;
}
.booking-details dl > div {
  display: grid;
  grid-template-columns: 78px 1fr;
  gap: 14px;
  padding: 17px 0;
  border-bottom: 1px solid #ffffff25;
  font-size: 14px;
  line-height: 1.7;
}
.booking-details dt {
  color: #cad6bf;
  font-size: 12px;
}
.booking-details dd span {
  font-size: 12px;
  color: #e0e6d8;
}
.stay-note {
  margin-top: 24px;
  font-size: 12px;
  line-height: 1.9;
}
.stay-note a {
  text-decoration: underline;
}
.weather-note {
  margin-top: 44px;
  color: #d6dfcf;
  font-size: 11px;
  line-height: 1.7;
}
section[id],
main[id] {
  scroll-margin-top: 90px;
}
.skip-link {
  position: fixed;
  top: -100px;
  left: 16px;
  z-index: 60;
  background: white;
  padding: 12px;
}
.skip-link:focus {
  top: 12px;
}
@media (max-width: 767px) {
  .guide-link {
    display: none;
  }
  .retreat-brand {
    font-size: 17px;
    gap: 6px;
  }
  .retreat-brand img {
    width: 34px;
    height: 34px;
  }
  .retreat-button.small {
    padding: 10px 14px;
    gap: 10px;
    font-size: 12px;
  }
  .retreat-hero {
    min-height: 600px;
  }
  .hero-content {
    padding-block: 65px;
  }
  .hero-shade {
    background: linear-gradient(90deg, #1c1a18ca, #1c1a1865);
  }
  .hero-photo {
    object-position: 62% center;
  }
  .hero-copy {
    font-size: 15px;
  }
  .hero-date {
    font-size: 11px;
  }
  .facts-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px 14px;
  }
  .facts-grid dd {
    font-size: 13px;
  }
  .section-space {
    padding-block: 64px;
  }
  .intro-grid,
  .experience-grid,
  .booking-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .guides-grid {
    grid-template-columns: 1fr;
    gap: 44px;
    max-width: 480px;
  }
  .permission-section {
    padding-block: 60px 0;
  }
  .impressions-section {
    gap: 8px;
    padding-inline: 8px;
  }
  .impressions-section img {
    height: 230px;
  }
  .booking-details {
    padding: 24px;
  }
}
</style>
