<script setup lang="ts">
import { ref } from 'vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'

type BrevoResponse = {
  success?: boolean
  message?: string
  errors?: Record<string, string>
}

const submissionStatus = ref<'idle' | 'success' | 'error'>('idle')
const submissionMessage = ref('')
const isSubmitting = ref(false)

const preventInvalidSubmission = (event: Event) => {
  const form = event.currentTarget
  if (!(form instanceof HTMLFormElement) || form.checkValidity()) return

  event.preventDefault()
  event.stopImmediatePropagation()
  form.reportValidity()
}

const preventInvalidButtonClick = (event: MouseEvent) => {
  const target = event.target
  if (!(target instanceof Element) || !target.closest('button[type="submit"]')) return
  preventInvalidSubmission(event)
}

const submitNewsletter = async (event: SubmitEvent) => {
  const form = event.currentTarget
  if (!(form instanceof HTMLFormElement)) return

  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  isSubmitting.value = true
  submissionStatus.value = 'idle'
  submissionMessage.value = ''

  try {
    const separator = form.action.includes('?') ? '&' : '?'
    const response = await fetch(`${form.action}${separator}isAjax=1`, {
      method: 'POST',
      body: new FormData(form),
    })

    if (!response.ok) throw new Error(`Brevo request failed with status ${response.status}`)

    const result = (await response.json()) as BrevoResponse
    if (!result.success) {
      const fieldError = result.errors ? Object.values(result.errors)[0] : undefined
      submissionStatus.value = 'error'
      submissionMessage.value =
        result.message ||
        fieldError ||
        'Hopsa, deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.'
      return
    }

    submissionStatus.value = 'success'
    submissionMessage.value =
      result.message ||
      'Fast geschafft! Bitte bestätige deine Anmeldung über den Link in deinem Postfach.'
    form.reset()
  } catch {
    submissionStatus.value = 'error'
    submissionMessage.value =
      'Hopsa, deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="impulse" class="pb-8 pt-1 sm:pb-10">
    <div class="container-page">
      <RevealOnScroll as="div">
        <div class="mx-auto max-w-2xl border-t border-taupe-200/60 py-6 sm:py-7">
          <div class="space-y-4">
            <div>
              <h2 class="font-serif text-lg font-semibold tracking-tight text-taupe-900 sm:text-xl">
              Aktuelle Termine & Angebote
              </h2>
              <p class="mt-1.5 max-w-lg text-xs leading-relaxed text-taupe-600 sm:text-sm">
                Trag dich ein um über aktuelle Angebote und Einblicke informiert zu bleiben.
              </p>
            </div>

            <div class="sib-form">
              <div id="sib-form-container" class="sib-form-container">
                <form
                  id="sib-form"
                  method="POST"
                  action="https://95df7f5d.sibforms.com/serve/MUIFAHdGbRbw2L9dSfjzawk5IfIPCGQ3AYrQq1GXejrCC_wZcHtjdaRHhyXbSaS1OE2LCkVZAnQCU6H4rTD2A9QkZcnK63sR027dH-VOaWw54xckuCRcThLuQKmL5rRHytWhOiraitwReHPX9DpFbyCfsmCdceojDkcCnFu2O0KNTzq_RtBRY8tSSDifRaX3_3uLheG3FqotMpMYuA=="
                  data-type="subscription"
                  class="space-y-2.5"
                  @click.capture="preventInvalidButtonClick"
                  @submit.prevent="submitNewsletter"
                >
                  <div class="flex flex-col gap-2 sm:flex-row sm:items-start">
                    <div class="sib-input min-w-0 flex-1">
                      <div class="form__entry entry_block">
                        <div class="form__label-row">
                          <label class="entry__label sr-only" for="EMAIL">E-Mail-Adresse</label>
                          <div class="entry__field">
                            <input
                              id="EMAIL"
                              class="input h-11 w-full rounded-full border border-taupe-300/80 !bg-white/80 px-4 text-sm text-taupe-900 outline-none placeholder:text-taupe-700 focus:border-primary-500 focus:!bg-white focus:ring-2 focus:ring-primary-500/20"
                              type="email"
                              name="EMAIL"
                              autocomplete="email"
                              placeholder="Deine E-Mail-Adresse"
                              data-required="true"
                              required
                            />
                          </div>
                        </div>
                        <label
                          class="entry__error entry__error--primary mt-1 block text-left text-xs text-rose-400"
                        />
                      </div>
                    </div>

                    <button
                      class="sib-form-block__button sib-form-block__button-with-loader m-0 inline-flex h-11 shrink-0 items-center justify-center self-start rounded-full border border-taupe-300/80 bg-white/80 px-5 text-sm font-medium text-taupe-800 transition duration-200 hover:-translate-y-0.5 hover:border-taupe-500 hover:bg-white hover:shadow-sm"
                      form="sib-form"
                      type="submit"
                      :disabled="isSubmitting"
                    >
                      <svg
                        v-if="isSubmitting"
                        class="mr-2 h-4 w-4 animate-spin"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                        />
                      </svg>
                      {{ isSubmitting ? 'Wird angemeldet …' : 'Anmelden' }}
                    </button>
                  </div>

                  <label class="flex items-start gap-3 text-left text-xs leading-relaxed text-taupe-600">
                    <input
                      id="newsletter-consent"
                      type="checkbox"
                      required
                      class="mt-0.5 h-4 w-4 shrink-0 accent-primary-500"
                    />
                    <span>
                      Ich möchte Neuigkeiten von Energie Pferd erhalten und kann mich jederzeit
                      abmelden.
                      <RouterLink to="/datenschutz" class="font-medium text-taupe-700">
                        Datenschutz
                      </RouterLink>
                    </span>
                  </label>

                  <input
                    type="text"
                    name="email_address_check"
                    value=""
                    class="input--hidden"
                    tabindex="-1"
                    aria-hidden="true"
                  />
                  <input type="hidden" name="locale" value="de" />
                </form>

                <div
                  v-if="submissionStatus === 'error'"
                  id="error-message"
                  class="mt-4 rounded-xl border border-rose-400/50 bg-rose-200/45 px-4 py-3 text-left text-sm text-taupe-800"
                  role="alert"
                >
                  {{ submissionMessage }}
                </div>

                <div
                  v-if="submissionStatus === 'success'"
                  id="success-message"
                  class="mt-4 rounded-xl border border-primary-500/30 bg-sage-200/55 px-4 py-3 text-left text-sm text-taupe-800"
                  role="status"
                  aria-live="polite"
                >
                  {{ submissionMessage }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.sib-form,
.sib-form-container,
.entry__field {
  width: 100%;
}

.sib-form {
  margin: 0;
  padding: 0;
  background: transparent;
  font-family: inherit;
}

.sib-form-container {
  max-width: none;
  margin: 0;
  padding: 0;
}

.entry__field {
  margin: 0;
  overflow: visible;
  border: 0;
  background: transparent;
}

#sib-form .entry__field {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

#sib-form .sib-form-block__button {
  margin: 0 !important;
}

#sib-form #EMAIL:focus {
  outline: none !important;
  border-color: var(--color-primary-500) !important;
  box-shadow: 0 0 0 2px rgb(0 145 125 / 18%) !important;
}

#sib-form #EMAIL::placeholder {
  color: var(--color-taupe-700) !important;
  opacity: 1 !important;
}

.input--hidden {
  position: absolute;
  left: -5000px;
}
</style>
