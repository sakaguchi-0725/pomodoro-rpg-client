<script setup lang="ts">
import { ArrowPathIcon, Cog6ToothIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  isRunning: boolean
}>()

const emit = defineEmits<{
  start: []
  stop: []
  reset: []
  setting: []
}>()
</script>

<template>
  <div class="flex flex-row justify-center items-center space-x-4">
    <button
      v-if="!props.isRunning"
      @click="emit('start')"
      class="p-2 border border-gray-300 rounded hover:bg-gray-100"
      aria-label="start"
    >
      <PlayIcon class="h-5 w-5 text-gray-600" />
    </button>
    <button
      v-if="props.isRunning"
      @click="emit('stop')"
      class="p-2 border border-gray-300 rounded hover:bg-gray-100"
      aria-label="stop"
    >
      <PauseIcon class="h-5 w-5 text-gray-600" />
    </button>
    <button
      @click="emit('reset')"
      class="p-2 border border-gray-300 rounded hover:bg-gray-100"
      aria-label="reset"
    >
      <ArrowPathIcon class="h-5 w-5 text-gray-600" />
    </button>
    <button
      @click="emit('setting')"
      class="p-2 border border-gray-300 rounded hover:bg-gray-100"
      aria-label="setting"
    >
      <Cog6ToothIcon class="h-5 w-5 text-gray-600" />
    </button>
  </div>
</template>