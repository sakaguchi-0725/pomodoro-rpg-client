import { client, handleApiError } from "@/shared/api"

export const forgotPassword = async (email: string): Promise<string | undefined> => {
  const { error } = await client.POST('/forgot-password', {
    body: {
      email,
    }
  })

  if (error) {
    return handleApiError(error)
  }
  return
}

export const confirmForgotPassword = async (email: string, code: string, password: string): Promise<string | undefined> => {
  const { error } = await client.POST('/forgot-password/confirm', {
    body: {
      email,
      code,
      password,
    }
  })

  if (error) {
    return handleApiError(error)
  }
  
  return
}