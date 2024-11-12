<script setup lang="ts">
import Button from '../components/controls/Button.vue'
</script>

<template>
  <main
    class="w-screen max-w-[600px] mx-auto h-screen px-8 flex flex-col items-start gap-6 content-stretch justify-center"
  >
    <h1 class="text-3xl">{{ $t('landingPage.title') }}</h1>
    <p class="text-lg" v-html="$t('landingPage.headline')" />
    <div class="flex items-center justify-between w-full">
      <img src="" class="text-xs" :alt="$t('landingPage.steps.first')" />
      <img src="" class="text-xs" :alt="$t('landingPage.steps.second')" />
      <img src="" class="text-xs" :alt="$t('landingPage.steps.third')" />
    </div>
    <div class="px-6 w-full">
      <Button
        variant="primary"
        :text="$t('landingPage.cta')"
        fit="parent"
        to="/login"
      />
    </div>
  </main>
</template>
