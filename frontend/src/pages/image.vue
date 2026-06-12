<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router'
import Section from "@/components/Section.vue";
import {computed, onMounted, type Ref, ref} from "vue";
import {useImageStore} from "@/stores/image.ts";
import type {ImageModel} from "@/interfaces/Image.ts";
import BackButton from "@/components/blocks/BackButton.vue";
import CaretLeft from "@/components/icons/CaretLeft.vue";
import CaretRight from "@/components/icons/CaretRight.vue";
import Caret from "@/components/blocks/Caret.vue";
import DownloadButton from "@/components/image/DownloadButton.vue";

const route = useRoute()
const router = useRouter()

const id = route.params.id
const imageStore = useImageStore()
const image: Ref<ImageModel | null | undefined> = ref(null)

async function incrementImage(val: number) {
  const currentId = Number(route.params.id)

  const newId = currentId + val
  image.value = await imageStore.findImage(newId.toString())

  if (!image.value) {
    router.push("/")
    return
  }

  router.push(`/image/${image.value.id}`)
}

onMounted(async () => {
  if(!id) {
    router.push("/")
    return
  }

  image.value = await imageStore.findImage(id.toString())

  if(!image.value) {
    router.push("/")
    return
  }
})
</script>

<template>
  <Section>
    <template v-slot:header>
      <div class="image-header">
        <div class="flex-center">
          <BackButton href="/" />
          <span class="text-black whitespace-nowrap">{{image?.author}}</span>
        </div>

        <div class="image-carets">
          <Caret direction="left"
                 :disabled="false"
                 @click="incrementImage(-1)"
          />
          <Caret direction="right"
                 :disabled="false"
                 @click="incrementImage(+1)"
          />
        </div>

        <div class="flex-center justify-end">
          <DownloadButton
              v-if="image"
              :image="image"
          />
        </div>
      </div>
    </template>

    <template v-slot:default>
      <div class="image-section">
        <div class="image-info font-sm" v-if="image">
          {{image.width}} x {{image.height}}
        </div>
        <div class="image-container">
          <img class="image-item" v-if="image" :src="image.download_url" alt="image" />
        </div>
        <div class="image-info"></div>
      </div>
    </template>
  </Section>
</template>

<style scoped>

</style>