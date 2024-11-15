import { ref } from "vue"
import { useRouter } from "vue-router"
import { ConfirmForgotPasswordInputSchema, confirmForgotPasswordSchema } from "../models/schema"
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import { confirmForgotPassword } from "@/entities/forgot-password"

export const useConfirmForgotPassword = () => {
  const router = useRouter()
  const errorMessage = ref('')

  const { defineField, errors, handleSubmit } = useForm<ConfirmForgotPasswordInputSchema>({
    validationSchema: toTypedSchema(confirmForgotPasswordSchema)
  })

  const onSubmit = handleSubmit(async (values) => {
    const error = await confirmForgotPassword(values.email, values.confirmationCode, values.password)

    if (error !== undefined) {
      errorMessage.value = error
      return
    }
    alert('パスワードを更新しました。')
    router.push({ name: 'login' })
  })

  const toForgotPassword = () => {
    router.push({ name: 'forgot-password' })
  }

  return {
    defineField,
    errors,
    errorMessage,
    onSubmit,
    toForgotPassword,
  }
}