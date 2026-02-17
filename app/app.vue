<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="app__main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
