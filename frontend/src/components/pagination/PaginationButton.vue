<script setup lang="ts">
import { useImageStore } from "@/stores/image";
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const imageStore = useImageStore()
const selected = computed(() => value == imageStore.page)

const { value } = defineProps<{
  value: number;
}>()

function handleClick() {
  imageStore.setPage(value)

  router.push({
    query: {
      ...route.query,
      page: imageStore.page
    }
  })
}
</script>

<template>
  <button @click="handleClick"
          class="pagination-button"
          :class="selected ? 'active' : ''"
  >
    {{ value }}
  </button>
</template>