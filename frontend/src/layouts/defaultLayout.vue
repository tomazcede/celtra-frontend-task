<script setup lang="ts">

import Header from "@/components/Header.vue";
</script>

<template>
  <div class="default-container">
    <Header />
    <div class="content">
      <slot />
    </div>
  </div>

</template>

<style scoped>

</style>