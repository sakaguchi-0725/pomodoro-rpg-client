import { validationRules } from "@/shared/lib";
import { z } from "zod";

export const timerSettingSchema = z.object({
  pomodoro: validationRules.pomodoro,
  shortBreak: validationRules.shortBreak,
  longBreak: validationRules.longBreak,
})

export type TimerSettingInputSchema = z.infer<typeof timerSettingSchema>