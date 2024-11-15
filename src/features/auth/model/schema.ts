import { validationRules } from "@/shared/lib";
import { z } from "zod";

export const loginSchema = z.object({
  email: validationRules.email,
  password: validationRules.publicPassword,
})

export const signupSchema = z.object({
  name: validationRules.name,
  email: validationRules.email,
  password: validationRules.publicPassword,
})

export const confirmSignupSchema = z.object({
  email: validationRules.email,
  confirmationCode: validationRules.confirmationCode,
})

export type LoginInputSchema = z.infer<typeof loginSchema>
export type SignupInputSchema = z.infer<typeof signupSchema>
export type ConfirmSignupInputSchema = z.infer<typeof confirmSignupSchema>