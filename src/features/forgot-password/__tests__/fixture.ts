import { ApiResponse } from "@/shared/api"

export const invalidRequestResponse: ApiResponse<"InvalidRequest"> = {
  code: 'BadRequest',
  message: '入力値が正しくありません'
}