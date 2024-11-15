<script setup lang="ts">
import { BaseModal } from '@/shared/ui/modal';
import { useTimerSetting } from '../hooks/use-timer-setting'
import SettingInput from './setting-input.vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { defineField, errors, onSubmit } = useTimerSetting(() => emit('close'))

const [pomodoro, pomodoroProps] = defineField('pomodoro')
const [shortBreak, shortBreakProps] = defineField('shortBreak')
const [longBreak, longBreakProps] = defineField('longBreak')
</script>

<template>
  <BaseModal title="Timer Settings" :is-open="props.isOpen" @close="emit('close')">
    <template #contents>
      <div class="flex flex-col justify-center space-y-4 mt-3">
        <SettingInput
          id="pomodoro"
          label="Pomodoro"
          :error-message="errors.pomodoro"
          v-model="pomodoro"
          v-bind="pomodoroProps"
        />
        
        <SettingInput
          id="shortBreak"
          label="Short Break"
          :error-message="errors.shortBreak"
          v-model="shortBreak"
          v-bind="shortBreakProps"
        />
        
        <SettingInput
          id="longBreak"
          label="Long Break"
          :error-message="errors.longBreak"
          v-model="longBreak"
          v-bind="longBreakProps"
        />
      </div>
    </template>
    <template #buttons>
      <button @click="emit('close')" class="mt-4 px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
      <button @click="onSubmit" class="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Store</button>
    </template>
  </BaseModal>
</template>