<script setup lang="ts">
import { defineProps, defineModel, computed } from 'vue'

const props = defineProps<{
  id: string
  type: "email" | "text" | "number"
  placeholder?: string
  errorMessage?: string
}>()

const model = defineModel<string | number | undefined>({ required: true })

const classes = computed(() => [
  "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
  props.errorMessage ? "ring-red-500 focus:ring-red-500" : "ring-gray-300 focus:ring-indigo-600"
])
</script>

<template>
  <div>
    <label :for="props.id" class="block text-sm font-medium leading-6 text-gray-900"><slot></slot></label>
    <div class="mt-2">
      <input
        :id="props.id"
        :type="props.type"
        :placeholder="props.placeholder"
        :class="classes"
        v-model="model"
        v-bind="$attrs"
      />
      <span v-if="props.errorMessage" class="text-red-500">{{ props.errorMessage }}</span>
    </div>
  </div>
</template>