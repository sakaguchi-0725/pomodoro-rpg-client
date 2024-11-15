<script setup lang="ts">
import { defineEmits } from 'vue'
import TimerTypeButtons from './timer-type-buttons.vue'
import { useTimerType } from '../hooks/use-timer-type'
import { usePomodoro } from '../hooks/use-pomodoro'
import TimerControllButtons from './timer-controll-buttons.vue'

defineEmits<{
  openModal: []
}>()

const { currentType, currentTime, changeTimerType, executionTimerTypeCycle } = useTimerType()
const { isRunning, progress, minutes, seconds, startCountDown, stopCountDown, resetCountDown } = usePomodoro(
  () => currentTime.value,
  executionTimerTypeCycle
)
</script>

<template>
  <div class="border border-gray-200 rounded-md py-7 shadow-sm flex flex-col items-center w-full sm:w-3/5 md:w-3/5 lg:w-1/2">
    <div class="w-10/12 space-y-5 md:w-7/12 mx-auto">
      <TimerTypeButtons :current-type="currentType" @change-type="changeTimerType" />

      <div class="text-center py-2">
        <h2 class="text-5xl font-bold sm:text-6xl xl:text-7xl">{{ minutes }}:{{ seconds }}</h2>
      </div>

      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-indigo-600 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
      </div>

      <TimerControllButtons
        :is-running="isRunning"
        @start="startCountDown"
        @stop="stopCountDown"
        @reset="resetCountDown"
        @setting="$emit('openModal')"
      />
    </div>
  </div>
</template>