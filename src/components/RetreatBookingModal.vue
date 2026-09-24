<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement | null>(null)
const loaded = ref(false)
const formUrl = 'https://95df7f5d.sibforms.com/v2/serve/MUIFAO8ON0AwdK_UCLF0k5UiNEqNX3j5gtfv25_uPJVzvP8Wr7fu-SVmm396wKb4m0iu1oOl8XW453jfd-2bNCRXkJwy2AawjB5x6u9NCOzYbGlJnrrP-_W28WBW_5Iz35JlP0ouN_bc52o9xa4_VIhjMVEEQ76UAB9X8W0QgE_On2uFqI9enx6vETvJbpz60W-F1Koac05Ks3FVOg=='
let previousOverflow = ''
let previousFocus: HTMLElement | null = null
let locked = false

function restorePage() {
  if (!locked) return
  document.body.style.overflow = previousOverflow
  locked = false
  previousFocus?.focus()
}

watch(() => props.open, async (open) => {
  if (open) {
    if (!locked) {
      previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      locked = true
    }
    loaded.value = true
    await nextTick()
    if (props.open && !dialog.value?.open) dialog.value?.showModal()
  } else {
    dialog.value?.close()
    restorePage()
  }
}, { immediate: true })
onBeforeUnmount(restorePage)
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      class="retreat-dialog"
      aria-labelledby="retreat-form-title"
      @cancel.prevent="emit('close')"
      @click="(event) => { if (event.target === dialog) emit('close') }"
    >
      <div class="dialog-content">
        <div class="dialog-heading">
          <h2 id="retreat-form-title">Retreat-Anmeldung</h2>
          <button class="close-button" type="button" aria-label="Anmeldung schließen" @click="emit('close')">×</button>
        </div>
        <iframe
          v-if="loaded"
          :src="formUrl"
          title="Brevo-Anmeldeformular für das Gruppenretreat"
          width="540"
          height="700"
          class="retreat-form-frame"
          allowfullscreen
        ></iframe>
        <p class="form-fallback">
          Formular wird nicht angezeigt?
          <a :href="formUrl" target="_blank" rel="noopener noreferrer">Direkt öffnen</a>
        </p>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.retreat-dialog {
  margin: auto;
  padding: 0;
  width: min(580px, calc(100% - 24px));
  max-height: calc(100vh - 24px);
  max-height: calc(100dvh - 24px);
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
.dialog-content { padding: 12px; }
.dialog-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 4px 12px;
}
h2 { font-family: Forum, Georgia, serif; font-size: 28px; }
.close-button {
  flex: 0 0 40px;
  height: 40px;
  border-radius: 50%;
  background: #eef0e8;
  font-size: 26px;
  cursor: pointer;
}
.retreat-form-frame {
  display: block;
  margin-inline: auto;
  width: 100%;
  max-width: 540px;
  height: min(700px, calc(100vh - 110px));
  height: min(700px, calc(100dvh - 110px));
  border: 0;
}
.form-fallback { margin: 10px 0 2px; text-align: center; font-size: 12px; }
.form-fallback a { text-decoration: underline; }
@media (max-width: 480px) {
  .dialog-content { padding: 8px; }
}
</style>
