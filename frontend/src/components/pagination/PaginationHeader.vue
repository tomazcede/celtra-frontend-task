<script setup lang="ts">
import {useImageStore} from "@/stores/image.ts";
import PaginationArrow from "@/components/pagination/PaginationArrow.vue";
import PaginationButton from "@/components/pagination/PaginationButton.vue";
import PaginationControls from "@/components/pagination/PaginationControls.vue";

const imageStore = useImageStore()
</script>

<template>
<div class="pagination-header">
  <div class="font-xs">
    <span>
      {{ imageStore.currentPageLimits.min }} - {{ imageStore.currentPageLimits.max }}
    </span>
    <span>
      of
    </span>
    <span>
      {{ imageStore.numOfItems }}
    </span>
  </div>
  <PaginationControls />
</div>
</template>

<style scoped>
</style>