import { ApiResponse } from "@/shared/api";

export const signupConfirmFailure: ApiResponse<"InvalidRequest"> = {
  code: "BadRequest",
  message: "確認コードが間違っています"
}

export const signinFailure: ApiResponse<"InvalidRequest"> = {
  code: "BadRequest",
  message: "入力値が正しくありません"
}

export const signupFailure: ApiResponse<"InvalidRequest"> = {
  code: "BadRequest",
  message: "入力値が正しくありません"
}