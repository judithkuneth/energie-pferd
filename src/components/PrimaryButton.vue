<script setup lang="ts">
type Variant = 'primary' | 'ghost'

withDefaults(
  defineProps<{
    href?: string
    variant?: Variant
    target?: '_blank' | '_self'
    rel?: string
  }>(),
  {
    variant: 'primary',
    target: '_self'
  }
)
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="rel"
    class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition active:translate-y-px"
    :class="
      variant === 'primary'
        ? 'bg-primary-500 text-sand-50 hover:bg-primary-600'
        : 'border border-taupe-300/80 bg-white/75 text-taupe-900 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-sm'
    "
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition active:translate-y-px"
    :class="
      variant === 'primary'
        ? 'bg-primary-500 text-sand-50 hover:bg-primary-600'
        : 'border border-taupe-300/80 bg-white/75 text-taupe-900 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-sm'
    "
  >
    <slot />
  </button>
</template>
