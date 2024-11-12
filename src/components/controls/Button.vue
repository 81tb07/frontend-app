<script setup lang="ts">
import { ButtonProps } from './types'

const { text, variant, href, to, fit, isDisabled, ...otherProps } =
  defineProps<ButtonProps>()

const isLink = !!href
const isRouterLink = !!to

// TODO Enrich this object when we'll support several size for the component
const sizeDependentCssClasses = {
  'py-2': true,
  'rounded-2xl': true,
}

const secondaryVariant = {
  'bg-white shadow-2xl border border-solid border-4 border-slate-900': true,
}

const cssClasses = {
  'text-center block': true,
  ...sizeDependentCssClasses,
  'w-full': fit === 'parent',
  'bg-amber-500': variant === 'primary',
  ...(variant === 'secondary' ? secondaryVariant : {}),
  'pointer-events-none': isLink && isDisabled,
}
</script>

<template>
  <a v-if="isLink" :href="href" :class="cssClasses">{{ text }}</a>
  <RouterLink v-else-if="isRouterLink" :class="cssClasses" :to="to">{{
    text
  }}</RouterLink>
  <button v-else type="button" :disabled="isDisabled" :class="cssClasses">
    {{ text }}
  </button>
</template>
