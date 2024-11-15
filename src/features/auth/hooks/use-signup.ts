import { useForm } from "vee-validate"
import { SignupInputSchema, signupSchema } from "../model/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { signup } from "@/entities/auth"
import { ref } from "vue"
import { useRouter } from "vue-router"

export const useSignup = () => {
  const router = useRouter()
  const errorMessage = ref('')

  const { defineField, errors, handleSubmit } = useForm<SignupInputSchema>({
    validationSchema: toTypedSchema(signupSchema)
  })

  const onSubmit = handleSubmit(async (values) => {
    const error = await signup(values.name, values.email, values.password)
    if (error !== undefined) {
      errorMessage.value = error
      return
    }
    alert('入力したメールアドレスに、確認コードを送信しました')
    router.push({ name: 'confirm-signup' })
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