<script setup lang="ts">
import { defineProps, defineModel, computed } from 'vue'

const props = defineProps<{
  id: string
  label: string
  errorMessage?: string
}>()

const model = defineModel<number | undefined>({ required: true })

const classes = computed(() => [
  "flex items-center rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6",
  props.errorMessage ? "ring-red-500 focus-within:ring-red-500" : "ring-gray-300 focus-within:ring-indigo-600"
])
</script>

<template>
  <div class="flex justify-between items-start w-full">
    <p class="pt-2 text-gray-500 font-light">
      {{ props.label }}
    </p>
    <div class="flex flex-col items-end">
      <div :class="classes" style="width: 100px;">
        <input
          :id="props.id"
          type="number"
          class="w-full focus:outline-none"
          v-model="model"
          v-bind="$attrs"
        />
        <span class="text-gray-400 text-xs ml-1">min</span>
      </div>
      <div class="h-6 mt-1 flex justify-end">
        <p v-if="props.errorMessage" class="text-red-500 text-sm whitespace-nowrap">{{ props.errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

