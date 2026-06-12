<script setup lang="ts">
import {useImageStore} from "@/stores/image.ts";
import {computed} from "vue";
import PaginationItem from "@/components/pagination/PaginationItem.vue";

const imageStore = useImageStore()
const images = computed(() => imageStore.images ?? [])

const loading = computed(() => imageStore.loading)
</script>

<template>
  <div v-if="loading">
    Loading...
  </div>

  <div v-else class="pagination-body">
    <PaginationItem v-for="image in images"
                    :image="image" />
  </div>

</template>

<style scoped>

</style>