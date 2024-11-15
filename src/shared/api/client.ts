import createClient from "openapi-fetch"
import { paths } from "./schema"

const baseUrl = import.meta.env.VITE_API_BASE_URL ?? ''

const instance = createClient<paths>({
  baseUrl,
  credentials: "include",
})

instance.use()

export const client = {
  GET: instance.GET,
  POST: instance.POST,
  PUT: instance.PUT,
  DELETE: instance.DELETE
}