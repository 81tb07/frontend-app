<script setup lang="ts"></script>

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
      <RouterLink
        class="block text-center py-2 w-full rounded-2xl bg-amber-500 shadow-2xl"
        to="/login"
        >{{ $t('landingPage.cta') }}</RouterLink
      >
    </div>
  </main>
</template>
