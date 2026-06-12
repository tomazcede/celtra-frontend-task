<script setup lang="ts">
import {useImageStore} from "@/stores/image.ts";
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router";
import Section from "@/components/Section.vue";
import PaginationHeader from "@/components/pagination/PaginationHeader.vue";
import PaginationBody from "@/components/pagination/PaginationBody.vue";

const route = useRoute();
const imageStore = useImageStore()

onMounted(async () => {
  await imageStore.setPage(route.query.page ? parseInt(<string>route.query.page) : 1);
})
</script>

<template>
  <Section>
    <template v-slot:header>
      <PaginationHeader />
    </template>

    <template v-slot:default>
      <PaginationBody />
    </template>
  </Section>
</template>

<style scoped>

</style>