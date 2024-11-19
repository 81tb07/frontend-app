<script setup lang="ts">
import { type ButtonProps } from './types'

const { text, variant, href, to, fit, isDisabled, ...otherProps } =
  defineProps<ButtonProps>()

const cssClasses = {
  'text-center block py-2 rounded-2xl': true,
  'w-full': fit === 'parent',
  'bg-amber-500': variant === 'primary',
  'bg-white shadow-2xl border border-solid border-4 border-slate-900':
    variant === 'secondary',
  'pointer-events-none': !!href && isDisabled,
}
</script>

<template>
  <a v-if="href" :href="href" :class="cssClasses" v-bind="otherProps">{{
    text
  }}</a>
  <RouterLink v-else-if="to" :class="cssClasses" :to="to" v-bind="otherProps">{{
    text
  }}</RouterLink>
  <button
    v-else
    type="button"
    :disabled="isDisabled"
    :class="cssClasses"
    v-bind="otherProps"
  >
    {{ text }}
  </button>
</template>
