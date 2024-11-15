import { client, handleApiError } from "@/shared/api"

export const login = async (email: string, password: string): Promise<string | undefined> => {
  const { error } = await client.POST('/signin', {
    body: {
      email,
      password,
    }
  })

  if (error) {
    return handleApiError(error)
  }
  return
}

export const signup = async (name: string, email: string, password: string): Promise<string | undefined> => {
  const { error } = await client.POST('/signup', {
    body: {
      name,
      email,
      password
    }
  })

  if (error) {
    return handleApiError(error)
  }
  return
}

export const confirmSignup = async (email: string, confirmationCode: string): Promise<string | undefined> => {
  const { error } = await client.POST('/signup/confirm', {
    body: {
      email,
      code: confirmationCode
    }
  })

  if (error) {
    return handleApiError(error)
  }
  return
}

export const isAuthenticated = async () => {
  const { data, error } = await client.GET('/is-auth')

  if (error) {
    return false
  }

  return data.isAuthenticated
}

export const signOut = async () => {
  const { error } = await client.POST('/signout')

  if (error) {
    return handleApiError(error)
  }
}