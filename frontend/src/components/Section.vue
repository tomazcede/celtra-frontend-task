<script setup lang="ts">

</script>

<template>
<div class="section-container">
  <div class="section-header gray-bottom-border">
    <slot name="header" />
  </div>
  <div class="section-content">
    <slot name="default" />
  </div>
</div>
</template>

<style scoped>

</style>