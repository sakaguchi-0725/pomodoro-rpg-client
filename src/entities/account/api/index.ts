import { client, handleApiError } from "@/shared/api"
import { Account } from "../model"

export const fetchAccount = async (): Promise<{ data?: Account, error?: string }> => {
  const { data, error } = await client.GET('/accounts')

  if (error) {
    return { error: handleApiError(error) }
  }

  return { data }
}