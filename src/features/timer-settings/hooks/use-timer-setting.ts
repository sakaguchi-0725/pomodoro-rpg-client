import { useForm } from "vee-validate"
import { TimerSettingInputSchema, timerSettingSchema } from "../model/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { getAllSetting, SECONDS_PER_MINUTE, storeTime } from "@/entities/pomodoro"
import { onMounted } from "vue"

export const useTimerSetting = (onSuccess: () => void) => {
  const { defineField, errors, setValues, handleSubmit } = useForm<TimerSettingInputSchema>({
    validationSchema: toTypedSchema(timerSettingSchema)
  })

  onMounted(() => {
    const settings = getAllSetting()
    setValues({
      pomodoro: settings.pomodoro / SECONDS_PER_MINUTE,
      shortBreak: settings.shortBreak / SECONDS_PER_MINUTE,
      longBreak: settings.longBreak / SECONDS_PER_MINUTE,
    })
  })

  const onSubmit = handleSubmit((values) => {
    storeTime("pomodoro", String(values.pomodoro))
    storeTime("shortBreak", String(values.shortBreak))
    storeTime("longBreak", String(values.longBreak))

    onSuccess()
  })

  return {
    defineField,
    errors,
    onSubmit
  }
}