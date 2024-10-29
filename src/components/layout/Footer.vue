<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <footer>
    <div class="absolute bottom-[20px] right-[20px]">
      <nav>
        <RouterLink class="text-neutral-700" to="/">Login</RouterLink> |
        <RouterLink class="text-neutral-700" to="/about">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>
