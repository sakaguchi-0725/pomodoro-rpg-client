<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  isOpen: boolean
  title: string
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 animate-slide-in-fwd-center" style="margin: 0;">
    <div class="bg-white p-6 rounded-md shadow-lg max-w-lg w-11/12 text-left">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold">{{ props.title }}</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">
          <XMarkIcon class="size-6" />
        </button>
      </div>
      
      <div class="flex flex-col justify-center">
        <slot name="contents"></slot>
      </div>
      <div v-if="$slots.buttons"  class="mt-5 flex justify-around">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>