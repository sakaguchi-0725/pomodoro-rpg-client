import { Meta, StoryObj } from "@storybook/vue3"
import SignupForm from "./signup-form.vue"
import { expect, userEvent, within } from "@storybook/test"
import { httpMock } from "@/shared/tests/http-mock"
import { signupFailure } from "../__tests__/fixture"

const meta: Meta<typeof SignupForm> = {
  component: SignupForm,
}

export default meta

type Story = StoryObj<typeof meta>

export const ValidationError: Story = {
  name: 'バリデーションエラー',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByRole('button', { name: '登録' })
    await userEvent.click(btn, { delay: 200 })

    const errors = canvas.getAllByText('必須項目です')
    expect(errors.length).toBe(3)
  }
}

export const BadRequest: Story = {
  name: 'BadRequest',
  parameters: {
    msw: {
      handlers: [httpMock.post('/signup', ({ response }) => response(400).json(signupFailure))]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const usernameInput = canvas.getByLabelText('ユーザー名')
    await userEvent.type(usernameInput, 'テスト太郎', { delay: 50 })

    const emailInput = canvas.getByLabelText('メールアドレス')
    await userEvent.type(emailInput, 'test@example.com', { delay: 50 })

    const passwordInput = canvas.getByLabelText('パスワード')
    await userEvent.type(passwordInput, 'Password', { delay: 50 })

    const btn = canvas.getByRole('button', { name: '登録' })
    await userEvent.click(btn, { delay: 200 })

    const error = canvas.getByText('入力値が正しくありません')
    expect(error).toBeInTheDocument()
  }
}