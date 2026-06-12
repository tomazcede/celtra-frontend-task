<script setup lang="ts">
import { useImageStore } from "@/stores/image";
import {computed} from "vue";
import Caret from "@/components/blocks/Caret.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const imageStore = useImageStore()
const disabled = computed(() => {
  let val = direction == 'left' ? 1 : imageStore.maxPage

  return imageStore.page === val
})

const { direction, amount } = defineProps<{
  direction: 'left' | 'right'
  amount?: number
}>()

function handleClick() {
  imageStore.incrementPage(amount ?? 1)

  router.push({
    query: {
      ...route.query,
      page: imageStore.page
    }
  })
}
</script>

<template>
  <Caret :direction="direction"
         :disabled="disabled"
         @click="handleClick"
  />
</template>