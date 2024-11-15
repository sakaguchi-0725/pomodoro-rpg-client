<script setup lang="ts">
import { TimerType, TimerTypeLabels } from '@/entities/pomodoro'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  currentType: TimerType,
}>()

defineEmits<{
  changeType: [type: TimerType],
}>()
</script>

<template>
  <div class="flex flex-row space-x-1.5 justify-center text-sm">
    <button
      v-for="(label, type) in TimerTypeLabels"
      :key="type"
      :class="[
        'font-medium py-1.5 px-2 rounded lg:px-3',
        type === props.currentType
          ? 'bg-gray-100 shadow-inner shadow-gray-200'
          : 'text-gray-600'
      ]"
      @click="$emit('changeType', type)"
    >{{ label }}</button>
  </div>
</template>