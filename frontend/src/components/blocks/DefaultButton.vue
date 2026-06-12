<script setup lang="ts">
const { label, href } = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: null
  },
  download: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<template>
  <a
      v-if="href"
      class="default-btn font-xs"
      :href="href"
      download
  >
    {{ label }}
  </a>

  <button v-else
          class="default-btn font-xs"
          @click="$emit('click')">
    {{ label }}
  </button>
</template>

<style scoped>

</style>