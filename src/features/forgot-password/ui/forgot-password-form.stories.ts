import { Meta, StoryObj } from "@storybook/vue3"
import ForgotPasswordForm from "./forgot-password-form.vue"
import { expect, userEvent, within } from "@storybook/test"
import { httpMock } from "@/shared/tests/http-mock"
import { invalidRequestResponse } from "../__tests__/fixture"

const meta: Meta<typeof ForgotPasswordForm> = {
  component: ForgotPasswordForm,
}

export default meta

type Story = StoryObj<typeof meta>

export const ValidationError: Story = {
  name: 'バリデーションエラー',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByRole('button', { name: '再設定メールを送信' })
    await userEvent.click(btn, { delay: 200 })

    const error = canvas.getByText('必須項目です')
    expect(error).toBeInTheDocument()
  }
}

export const BadRequest: Story = {
  name: 'BadRequest',
  parameters: {
    msw: {
      handlers: [
        httpMock.post('/forgot-password', ({ response }) => response(400).json(invalidRequestResponse))
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText('メールアドレス')
    await userEvent.type(input, 'test@example.com', { delay: 50 })

    const btn = canvas.getByRole('button', { name: '再設定メールを送信' })
    await userEvent.click(btn, { delay: 200 })

    const error = canvas.getByText('入力値が正しくありません')
    expect(error).toBeInTheDocument()
  }
}