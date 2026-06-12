<script setup lang="ts">
import type { ImageModel } from "@/interfaces/Image.ts";
import DownloadButton from "@/components/image/DownloadButton.vue";

const { image } = defineProps<{
  image: ImageModel
}>()


</script>

<template>
<div class="pagination-item">
  <RouterLink
      class="text-decoration-none text-black"
      :to="`/image/${image.id}`"
  >
    <div class="pagination-item-img-container">
      <img :src="image.download_url" alt="image" class="pagination-item-img" />
    </div>

    <div class="pagination-item-info font-sm gray-bottom-border">
      <span>{{ image.author }}</span>
    </div>
  </RouterLink>

  <div class="pagination-item-info font-xs">
    <DownloadButton :image="image" />
  </div>
</div>
</template>

<style scoped>

</style>