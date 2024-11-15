import { TimerSettings, TIMER_TYPES, SECONDS_PER_MINUTE, TimerType } from "@/entities/pomodoro"

const defaultSettings: TimerSettings = {
  pomodoro: 25 * SECONDS_PER_MINUTE,
  shortBreak: 5 * SECONDS_PER_MINUTE,
  longBreak: 15 * SECONDS_PER_MINUTE,
}

export const storeTime = (key: TimerType, val: string) => localStorage.setItem(key, val)

export const getAllSetting = (): TimerSettings => {
  return {
    pomodoro: Number(localStorage.getItem(TIMER_TYPES.pomodoro)) * SECONDS_PER_MINUTE || defaultSettings.pomodoro,
    shortBreak: Number(localStorage.getItem(TIMER_TYPES.shortBreak)) * SECONDS_PER_MINUTE || defaultSettings.shortBreak,
    longBreak: Number(localStorage.getItem(TIMER_TYPES.longBreak)) * SECONDS_PER_MINUTE || defaultSettings.longBreak
  }
}