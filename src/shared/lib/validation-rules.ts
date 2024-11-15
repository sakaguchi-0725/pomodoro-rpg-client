import { z } from "zod"

const messages = {
  required: "必須項目です",
  email: "メールアドレス形式で入力して下さい",
  minMinutes: (min: number) => `${min}分以上で入力して下さい`,
  invalidType: (type: string) => `${type}で入力して下さい`,
}

export const validationRules = {
  name: z.string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  email: z.string({ required_error: messages.required })
    .email({ message: messages.email })
    .min(1, { message: messages.required }),
  publicPassword: z.string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  confirmationCode: z.string({ required_error: messages.required })
    .min(1, { message: messages.required }),
  pomodoro: z.number({
    required_error: messages.required,
    invalid_type_error: messages.invalidType("数値")
  }).min(10, { message: messages.minMinutes(10) }),
  shortBreak: z.number({
    required_error: messages.required,
    invalid_type_error: messages.invalidType("数値")
  }).min(1, { message: messages.minMinutes(1) }),
  longBreak: z.number({
    required_error: messages.required,
    invalid_type_error: messages.invalidType("数値")
  }).min(5, { message: messages.minMinutes(3) })
}