import { useForm } from "vee-validate"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { ConfirmSignupInputSchema, confirmSignupSchema } from "../model/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { confirmSignup } from "@/entities/auth"

export const useConfirmSignup = () => {
  const router = useRouter()
  const errorMessage = ref('')

  const { defineField, errors, handleSubmit } = useForm<ConfirmSignupInputSchema>({
    validationSchema: toTypedSchema(confirmSignupSchema)
  })

  const onSubmit = handleSubmit(async (values) => {
    const error = await confirmSignup(values.email, values.confirmationCode)
    if (error !== undefined) {
      errorMessage.value = error
      return
    }

    router.push({ name: "login" })
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