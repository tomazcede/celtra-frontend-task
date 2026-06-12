<script setup lang="ts">
const { href } = defineProps<{
  href: string
}>()
</script>

<template>
<RouterLink :to="href" class="flex-center">
  <img src="/img/arrow-left-regular.svg" alt="arrow" style="height: 20px" />
</RouterLink>
</template>

<style scoped>

</style>