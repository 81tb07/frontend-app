<script setup lang="ts"></script>

<template>
  <main
    class="w-screen max-w-[600px] mx-auto h-screen px-8 flex flex-col items-start gap-6 content-stretch justify-center"
  >
    <h1 class="text-3xl">{{ $t('loginPage.title') }}</h1>
    <p class="text-lg" v-html="$t('loginPage.headline')" />
    <div class="flex items-center justify-between w-full"></div>
    <div class="flex flex-col px-6 w-full gap-3">
      <RouterLink
        class="block text-center py-2 w-full rounded-2xl bg-amber-500 shadow-2xl"
        to="/login"
        >{{ $t('loginPage.form.ctas.submit') }}</RouterLink
      >
      <RouterLink
        class="block text-center py-2 w-full rounded-2xl shadow-2xl border border-solid border-4 border-slate-900"
        to="/"
        >{{ $t('loginPage.form.ctas.cancel') }}</RouterLink
      >
    </div>
  </main>
</template>
