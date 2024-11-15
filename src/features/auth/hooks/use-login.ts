import { useForm } from "vee-validate"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { LoginInputSchema, loginSchema } from "../model/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { login } from "@/entities/auth"

export const useLogin = () => {
  const router = useRouter()
  const errorMessage = ref('')

  const { defineField, errors, handleSubmit } = useForm<LoginInputSchema>({
    validationSchema: toTypedSchema(loginSchema)
  })

  const onSubmit = handleSubmit(async (values) => {
    const error = await login(values.email, values.password)
    if (error !== undefined) {
      errorMessage.value = error
      return
    }

    router.push({ name: 'pomodoro' })
  })

  const toSignupPage = () => {
    router.push({ name: "signup" })
  }

  return {
    defineField,
    errors,
    errorMessage,
    onSubmit,
    toSignupPage,
  }
}