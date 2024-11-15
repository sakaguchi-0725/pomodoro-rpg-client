export const SECONDS_PER_MINUTE = 60

export const TIMER_TYPES = {
  pomodoro: 'pomodoro',
  shortBreak: 'shortBreak',
  longBreak: 'longBreak'
} as const

export const TimerTypeLabels = {
  [TIMER_TYPES.pomodoro]: 'Pomodoro',
  [TIMER_TYPES.shortBreak]: 'Short Break',
  [TIMER_TYPES.longBreak]: 'Long Break'
} as const

export type TimerType = typeof TIMER_TYPES[keyof typeof TIMER_TYPES]

export type TimerSettings = Record<TimerType, number>
