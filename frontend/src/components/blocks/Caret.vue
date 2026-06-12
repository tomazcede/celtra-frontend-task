<script setup lang="ts">
import CaretLeft from "@/components/icons/CaretLeft.vue";
import CaretRight from "@/components/icons/CaretRight.vue";

const { direction, disabled } = defineProps<{
  direction: 'left' | 'right',
  disabled: boolean
}>()

const emit = defineEmits(['click']);

function handleClick() {
    if(disabled)
      return

    emit("click");
}

</script>

<template>
  <button @click="handleClick" class="arrow-btn">
    <CaretLeft
        v-if="direction == 'left'"
        class="arrow-btn-icon"
        :class="disabled ? 'disabled' : ''"
    />
    <CaretRight
        v-if="direction == 'right'"
        class="arrow-btn-icon"
        :class="disabled ? 'disabled' : ''"
    />
  </button>
</template>