<script setup lang="ts">

import PaginationButton from "@/components/pagination/PaginationButton.vue";
import PaginationArrow from "@/components/pagination/PaginationArrow.vue";
import {useImageStore} from "@/stores/image.ts";
import {computed} from "vue";

const imageStore = useImageStore()
const pages = computed(() => {
  const max = imageStore.maxPage
  const current = imageStore.page
  const windowSize = 5

  if (max <= windowSize) {
    return Array.from({ length: max }, (_, i) => i + 1)
  }

  let start = current - 2
  let end = current + 2

  if (start < 1) {
    start = 1
    end = windowSize
  }

  if (end > max) {
    end = max
    start = max - windowSize + 1
  }

  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})
</script>

<template>
  <div class="pagination-control">
    <PaginationArrow direction="left" :amount="-1"/>
    <PaginationButton v-for="val in pages"
                      :value="val" />
    <PaginationArrow direction="right" :amount="1"/>
  </div>
</template>

<style scoped>

</style>