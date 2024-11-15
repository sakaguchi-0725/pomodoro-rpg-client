import { client, handleApiError } from "@/shared/api"

export const postPomodoroTime = async (focusTime: number) => {
  const { error } = await client.POST('/times', {
    body: { focusTime }
  })

  if (error) {
    return handleApiError(error)
  }
}