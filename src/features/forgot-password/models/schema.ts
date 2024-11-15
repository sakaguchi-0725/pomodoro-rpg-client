import { validationRules } from "@/shared/lib"
import { z } from "zod"

export const forgotPasswordSchema = z.object({
  email: validationRules.email,
})

export const confirmForgotPasswordSchema = z.object({
  email: validationRules.email,
  confirmationCode: validationRules.confirmationCode,
  password: validationRules.publicPassword,
})

export type ForgotPasswordInputSchema = z.infer<typeof forgotPasswordSchema>
export type ConfirmForgotPasswordInputSchema = z.infer<typeof confirmForgotPasswordSchema>