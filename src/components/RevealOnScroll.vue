<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type AsTag = keyof HTMLElementTagNameMap

const props = withDefaults(
  defineProps<{
    as?: AsTag
    delayMs?: number
    yOffset?: number
  }>(),
  {
    as: 'div',
    delayMs: 0,
    yOffset: 12,
  },
)

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

const style = computed(() => ({
  transitionDelay: `${props.delayMs}ms`,
}))

const className = computed(() => {
  const base =
    'will-change-transform transition-[transform,opacity,filter] duration-700 ease-out motion-reduce:transition-none'
  const hidden = `opacity-0 translate-y-[${props.yOffset}px] blur-[1px]`
  const shown = 'opacity-100 translate-y-0 blur-0'
  return `${base} ${isVisible.value ? shown : hidden}`
})

onMounted(() => {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
        observer = null
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  )

  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <component :is="as" ref="el" :class="className" :style="style">
    <slot />
  </component>
</template>

