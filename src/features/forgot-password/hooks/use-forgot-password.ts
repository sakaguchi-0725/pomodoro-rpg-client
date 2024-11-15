import { useForm } from "vee-validate"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { ForgotPasswordInputSchema, forgotPasswordSchema } from "../models/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { forgotPassword } from "@/entities/forgot-password"

export const useForgotPassword = () => {
  const router = useRouter()
  const errorMessage = ref('')

  const { defineField, errors, handleSubmit } = useForm<ForgotPasswordInputSchema>({
    validationSchema: toTypedSchema(forgotPasswordSchema)
  })

  const onSubmit = handleSubmit(async (values) => {
    const error = await forgotPassword(values.email)

    if (error !== undefined) {
      errorMessage.value = error
      return
    }
    alert('入力したメールアドレスに、確認コードを送信しました')
    router.push({ name: 'confirm-forgot-password' })
  })

  const toLoginPage = () => {
    router.push({ name: 'login' })
  }

  return {
    defineField,
    errors,
    errorMessage,
    onSubmit,
    toLoginPage,
  }
}