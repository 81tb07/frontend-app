<script setup lang="ts">
import { type ButtonProps } from './types'

const { text, variant, href, to, fit, isDisabled, ...otherProps } =
  defineProps<ButtonProps>()
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :class="[
      'text-center block py-2 rounded-2xl',
      fit === 'parent' && 'w-full',
      !!href && isDisabled && 'pointer-events-none',
      variant === 'primary' && 'bg-amber-500',
      variant === 'secondary' &&
        'bg-white shadow-2xl border border-solid border-4 border-slate-900',
    ]"
    v-bind="otherProps"
    >{{ text }}</a
  >
  <RouterLink
    v-else-if="to"
    :class="[
      'text-center block py-2 rounded-2xl',
      fit === 'parent' && 'w-full',
      !!href && isDisabled && 'pointer-events-none',
      variant === 'primary' && 'bg-amber-500',
      variant === 'secondary' &&
        'bg-white shadow-2xl border border-solid border-4 border-slate-900',
    ]"
    :to="to"
    v-bind="otherProps"
    >{{ text }}</RouterLink
  >
  <button
    v-else
    type="button"
    :disabled="isDisabled"
    :class="[
      'text-center block py-2 rounded-2xl',
      fit === 'parent' && 'w-full',
      !!href && isDisabled && 'pointer-events-none',
      variant === 'primary' && 'bg-amber-500',
      variant === 'secondary' &&
        'bg-white shadow-2xl border border-solid border-4 border-slate-900',
    ]"
    v-bind="otherProps"
  >
    {{ text }}
  </button>
</template>
