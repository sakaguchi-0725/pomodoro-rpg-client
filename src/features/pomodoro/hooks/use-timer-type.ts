import { getAllSetting, postPomodoroTime, SECONDS_PER_MINUTE, TIMER_TYPES, TimerType } from "@/entities/pomodoro"
import { computed, ref } from "vue"

export const useTimerType = () => {
  const timerSettings = getAllSetting()
  const currentType = ref<TimerType>(TIMER_TYPES.pomodoro)
  const currentTime = computed(() => timerSettings[currentType.value])
  
  const changeTimerType = (type: TimerType) => {
    currentType.value = type
  }

  let cycleCount = 0
  const executionTimerTypeCycle = async () => {
    cycleCount ++

    if (currentType.value === TIMER_TYPES.pomodoro) {
      const error = await postPomodoroTime(timerSettings.pomodoro / SECONDS_PER_MINUTE)

      if (error !== undefined) {
        alert(error)
        return
      }

      if (cycleCount % 5 === 0) {
        changeTimerType("longBreak")
      } else {
        changeTimerType("shortBreak")
      }
    } else {
      changeTimerType("pomodoro")
    }
  }

  return {
    currentType,
    currentTime,
    changeTimerType,
    executionTimerTypeCycle,
  }
}