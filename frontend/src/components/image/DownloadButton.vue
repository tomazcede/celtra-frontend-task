<script setup lang="ts">
import DefaultButton from "@/components/blocks/DefaultButton.vue";
import { useDownload } from "@/composables/download.ts"
import type {ImageModel} from "@/interfaces/Image.ts";

const downloadUtil = useDownload();
const { image } = defineProps<{
  image: ImageModel
}>()

function handleDownload() {
  downloadUtil.download(image)
}
</script>

<template>
  <DefaultButton label="Download"
                 @click="handleDownload"
  />
</template>

<style scoped>

</style>