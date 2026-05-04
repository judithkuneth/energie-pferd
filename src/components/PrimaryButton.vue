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
    target: '_self',
  },
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
        ? 'shadow-glow bg-taupe-800 text-sand-50 hover:bg-taupe-700'
        : 'border border-taupe-300/70 bg-white/60 text-taupe-900 hover:bg-white'
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
        ? 'shadow-glow bg-taupe-800 text-sand-50 hover:bg-taupe-700'
        : 'border border-taupe-300/70 bg-white/60 text-taupe-900 hover:bg-white'
    "
  >
    <slot />
  </button>
</template>

