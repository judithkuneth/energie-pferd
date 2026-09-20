<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import config from '@/data/retreat-form.json'
import { submitRetreat } from '@/services/submitRetreat'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const router = useRouter()
const dialog = ref<HTMLDialogElement | null>(null)
const pending = ref(false)
const error = ref('')
let previousOverflow = ''
let previousFocus: HTMLElement | null = null
let locked = false

function restorePage() {
  if (!locked) return
  document.body.style.overflow = previousOverflow
  locked = false
  previousFocus?.focus()
}

watch(
  () => props.open,
  async (open) => {
    if (open) {
      previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      locked = true
      await nextTick()
      dialog.value?.showModal()
    } else {
      dialog.value?.close()
      restorePage()
    }
  },
)
onBeforeUnmount(restorePage)

async function submit(event: Event) {
  const form = event.currentTarget
  if (!(form instanceof HTMLFormElement) || pending.value || !form.reportValidity()) return
  pending.value = true
  error.value = ''
  try {
    const data = new FormData(form)
    data.set('VORNAME', String(data.get('VORNAME')).trim())
    data.set('EMAIL', String(data.get('EMAIL')).trim())
    data.set('SMS', String(data.get('SMS')).replace(/[\s()/.-]/g, ''))
    await submitRetreat(config.action, data)
    form.reset()
    emit('close')
    await router.push('/retreat/danke')
  } catch {
    error.value =
      'Die Übermittlung konnte nicht bestätigt werden. Bitte prüfe deine Angaben und versuche es erneut. Bei Fragen erreichst du Judith unter +43 676/83 555 785.'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      class="retreat-dialog"
      aria-labelledby="retreat-form-title"
      @cancel.prevent="!pending && emit('close')"
      @click="
        (event) => {
          if (event.target === dialog && !pending) emit('close')
        }
      "
    >
      <div class="dialog-content">
        <button
          class="close-button"
          type="button"
          aria-label="Anmeldung schließen"
          :disabled="pending"
          @click="emit('close')"
        >
          ×
        </button>
        <p class="eyebrow">Gruppenretreat · Pferdemagie</p>
        <h2 id="retreat-form-title">Dein Tag für dich.</h2>
        <p class="intro">
          11. Oktober 2026 · 10–17 Uhr<br />Blåsehof, Maria Saal · € 280 pro Person
        </p>
        <form :action="config.action" method="POST" :aria-busy="pending" @submit.prevent="submit">
          <fieldset :disabled="pending">
            <legend class="sr-only">Deine Kontaktdaten</legend>
            <label for="retreat-name">Vor- und Nachname</label>
            <input
              id="retreat-name"
              name="VORNAME"
              type="text"
              autocomplete="name"
              maxlength="200"
              required
              pattern=".*\S.*"
            />
            <label for="retreat-phone">Telefonnummer</label>
            <div class="phone-fields">
              <select name="SMS__COUNTRY_CODE" aria-label="Ländervorwahl" required>
                <option
                  v-for="(country, index) in config.countries"
                  :key="index"
                  :value="country.code"
                  :selected="country.label === '+43 AT'"
                >
                  {{ country.label }}
                </option>
              </select>
              <input
                id="retreat-phone"
                name="SMS"
                type="tel"
                autocomplete="tel-national"
                placeholder="676 1234567"
                required
                pattern="[0-9 ]{4,24}"
                aria-describedby="phone-hint"
              />
            </div>
            <p id="phone-hint" class="hint">
              Deine Nummer ohne Ländervorwahl, nur Ziffern und Leerzeichen.
            </p>
            <label for="retreat-email">E-Mail-Adresse</label>
            <input id="retreat-email" name="EMAIL" type="email" autocomplete="email" required />
            <div class="honeypot" aria-hidden="true">
              <input name="email_address_check" type="text" tabindex="-1" autocomplete="off" />
            </div>
            <input type="hidden" name="locale" value="de" />
            <p class="privacy">
              Wir verwenden deine Angaben zur Bearbeitung deiner Retreat-Anmeldung. Die Übermittlung
              erfolgt über Brevo.
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Datenschutz</a>
            </p>
            <label class="terms-consent">
              <input id="retreat-terms" name="OPT_IN" value="1" type="checkbox" required />
              <span
                >Ich akzeptiere die
                <a href="/retreat/bedingungen" target="_blank" rel="noopener noreferrer"
                  >Buchungs- &amp; Stornobedingungen (öffnet in neuem Tab)</a
                >.</span
              >
            </label>
            <button class="submit-button" type="submit">
              {{ pending ? 'Wird gesendet …' : 'Zahlungspflichtig anmelden' }}
              <span v-if="!pending" aria-hidden="true">↗</span>
            </button>
          </fieldset>
          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
          <p class="hint bottom-note">
            Alle Felder sind Pflichtfelder. Mit deiner Anmeldung buchst du verbindlich für 280 €.
            Dein Platz ist nach Erhalt der Buchungsbestätigung für dich reserviert.
          </p>
        </form>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.retreat-dialog {
  margin: auto;
  padding: 0;
  width: min(560px, calc(100% - 28px));
  max-height: calc(100dvh - 28px);
  overflow: auto;
  border: 1px solid #d8cec5;
  border-radius: 20px;
  background: #fdfcf9;
  color: #353b33;
  box-shadow: 0 24px 90px #0004;
}
.retreat-dialog::backdrop {
  background: #1c1a1899;
  backdrop-filter: blur(5px);
}
.dialog-content {
  position: relative;
  padding: 38px;
}
.close-button {
  position: absolute;
  top: 12px;
  right: 14px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eef0e8;
  font-size: 26px;
  cursor: pointer;
}
.eyebrow {
  margin: 10px 30px 12px 0;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
h2 {
  font-family: Forum, Georgia, serif;
  font-size: 44px;
  line-height: 1.1;
}
.intro {
  font-size: 13px;
  line-height: 1.8;
  margin: 14px 0 24px;
  color: #59624f;
}
fieldset {
  min-width: 0;
}
label {
  display: block;
  margin: 18px 0 7px;
  font-size: 13px;
  font-weight: 500;
}
input:not([type='hidden']),
select {
  width: 100%;
  min-width: 0;
  border: 1px solid #b8c1b1;
  background: white;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
}
.phone-fields {
  display: grid;
  grid-template-columns: 115px 1fr;
  gap: 10px;
}
.hint {
  margin-top: 6px;
  font-size: 11px;
  color: #606956;
  line-height: 1.6;
}
.privacy {
  margin: 20px 0;
  font-size: 11px;
  line-height: 1.7;
}
.privacy a {
  text-decoration: underline;
}
.submit-button {
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
  background: #294b40;
  color: white;
  padding: 15px 20px;
  border-radius: 999px;
  font-size: 14px;
  cursor: pointer;
}
.submit-button:hover {
  background: #3e6154;
}
:disabled {
  cursor: wait;
  opacity: 0.7;
}
.form-error {
  margin-top: 16px;
  padding: 12px;
  border-radius: 8px;
  background: #f7e7df;
  color: #793825;
  font-size: 13px;
  line-height: 1.6;
}
.honeypot {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}
.bottom-note {
  text-align: center;
  margin-top: 12px;
}
.terms-consent {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 0 0 20px;
  font-size: 12px;
  line-height: 1.7;
}
.terms-consent input[type='checkbox'] {
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  padding: 0;
  accent-color: #294b40;
}
.terms-consent a {
  text-decoration: underline;
}
@media (max-width: 480px) {
  .dialog-content {
    padding: 28px 22px;
  }
  h2 {
    font-size: 38px;
  }
}
</style>
