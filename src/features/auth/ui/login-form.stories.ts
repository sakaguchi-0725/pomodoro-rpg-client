import { Meta, StoryObj } from "@storybook/vue3"
import LoginForm from "./login-form.vue"
import { expect, userEvent, within } from "@storybook/test"
import { httpMock } from "@/shared/tests/http-mock"
import { signinFailure } from "../__tests__/fixture"

const meta: Meta<typeof LoginForm> = {
  component: LoginForm
}

export default meta

type Story = StoryObj<typeof meta>

export const ValidationError: Story = {
  name: "バリデーションエラー",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByRole('button', { name: 'ログイン' })
    await userEvent.click(btn, { delay: 200 })

    const errors = canvas.getAllByText('必須項目です')
    expect(errors.length).toBe(2)
  }
}

export const BadRequest: Story = {
  name: 'BadRequest',
  parameters: {
    msw: {
      handlers: [httpMock.post('/signin', ({ response }) => response(400).json(signinFailure))]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText('メールアドレス')
    await userEvent.type(emailInput, 'test@example.com', { delay: 50 })

    const passwordInput = canvas.getByLabelText('パスワード')
    await userEvent.type(passwordInput, 'Password', { delay: 50 })

    const btn = canvas.getByRole('button', { name: 'ログイン' })
    await userEvent.click(btn, { delay: 200 })

    const error = canvas.getByText('入力値が正しくありません')
    expect(error).toBeInTheDocument()
  }
}