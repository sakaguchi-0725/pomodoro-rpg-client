<script setup lang="ts">
import { CharacterStatus } from '@/features/character-status'
import { PomodoroField } from '@/features/pomodoro'
import { TimerSettingModal } from '@/features/timer-settings'
import { useModal } from '@/shared/lib/use-modal'

const { isOpen, open, close } = useModal()

</script>

<template>
  <PomodoroField @open-modal="open" />
  <CharacterStatus />

  <TimerSettingModal :is-open="isOpen" @close="close" />
</template>