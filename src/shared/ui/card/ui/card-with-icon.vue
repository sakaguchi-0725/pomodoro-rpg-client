<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  label: string
  icon: "settings" | "example"
}>()

defineEmits<{
  onClick: []
}>()

const iconElement = computed(() => {
  if (props.icon === "settings") {
    return Cog6ToothIcon
  }
})
</script>

<template>
  <div class="rounded border border-gray-300 flex flex-col w-full p-6">
    <div class="flex flex-row items-center mb-6 justify-between">
      <h1 class="font-semibold text-2xl">{{ props.label }}</h1>
      <button class="p-1 rounded-full hover:bg-gray-100" @click="$emit('onClick')">
        <component :is="iconElement"class="size-7 text-gray-600" />
      </button>
    </div>
    <slot></slot>
  </div>
</template>