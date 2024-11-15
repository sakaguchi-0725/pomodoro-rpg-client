import { useRouter } from 'vue-router'
import { ApiSchema } from './response'

type ApiError = ApiSchema<'ErrorResponse'>

const ErrorCodes = {
  BadRequest: 'BadRequest',
  NotFound: 'NotFound',
  Unauthorized: 'Unauthorized',
  InternalServerError: 'InternalServerError',
} as const

const ErrorMessages = {
  BadRequest: '入力内容が正しくありません。入力内容を確認して、再度お試しください。',
  NotFound: 'お探しの情報が見つかりませんでした。',
  Unauthorized: 'トークンの有効期限が切れています。もう一度ログインして下さい。',
  Default: '予期せぬエラーが発生しました。もう一度お試しください。',
} as const

const generateErrorMessage = (code: string | undefined): string => {
  const key = code as keyof typeof ErrorMessages
  return ErrorMessages[key] ?? ErrorMessages['Default']
}

export const handleApiError = (error: ApiError) => {
  const router = useRouter()

  if (error.message) {
    return error.message
  }

  switch (error.code) {
    case ErrorCodes.NotFound:
    case ErrorCodes.BadRequest:
      return generateErrorMessage(error.code)
    case ErrorCodes.Unauthorized:
      alert(generateErrorMessage(error.code))
      router.push({ name: 'login' })
      return 
    case ErrorCodes.InternalServerError:
    default:
      alert(ErrorMessages['Default'])
      router.push({ name: 'internal-server' })
      return
  }
}