import { ApiResponse } from "@/shared/api";

export const invalidRequestResponse: ApiResponse<'InvalidRequest'> = {
  code: 'BadRequest',
  message: '登録に失敗しました'
}