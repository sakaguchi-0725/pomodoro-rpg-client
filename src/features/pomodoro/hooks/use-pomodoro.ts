import { computed, ref, watch } from "vue"
import { SECONDS_PER_MINUTE } from "@/entities/pomodoro"

export const usePomodoro = (
  getDuration: () => number,
  onComplete: () => void
) => {
  const isRunning = ref(false)
  const timeLeft = ref(0)

  watch(
    () => getDuration(),
    () => timeLeft.value = getDuration(),
    { immediate: true }
  )

  let intervalId: number | null = null

  const startCountDown = () => {
    if (intervalId) return
    isRunning.value = true

    intervalId = window.setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value -= 1
      } else {
        stopCountDown()
        onComplete()
      }
    }, 1000)
  }

  const stopCountDown = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
      isRunning.value = false
    }
  }

  const resetCountDown = () => {
    timeLeft.value = getDuration()
    stopCountDown()
  }

  const progress = computed(() => ((getDuration() - timeLeft.value) / getDuration()) * 100)
  const minutes = computed(() => String(Math.round(timeLeft.value / SECONDS_PER_MINUTE)).padStart(2, '0'))
  const seconds = computed(() => String(timeLeft.value % SECONDS_PER_MINUTE).padStart(2, '0'))

  return {
    isRunning,
    progress,
    minutes,
    seconds,
    startCountDown,
    stopCountDown,
    resetCountDown,
  }
}