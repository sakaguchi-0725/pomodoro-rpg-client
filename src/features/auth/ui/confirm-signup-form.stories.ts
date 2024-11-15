import { Meta, StoryObj } from '@storybook/vue3'
import { expect, userEvent, within } from '@storybook/test'
import ConfirmSignupForm from './confirm-signup-form.vue'
import { httpMock } from '@/shared/tests/http-mock'
import { signupConfirmFailure } from '../__tests__/fixture'

const meta: Meta<typeof ConfirmSignupForm> = {
  component: ConfirmSignupForm,
}

export default meta

type Story = StoryObj<typeof meta>

export const ValidationError: Story = {
  name: '必須項目エラー',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByRole('button', { name: '登録' })
    await userEvent.click(btn, { delay: 200 })

    const errors = canvas.getAllByText('必須項目です')
    expect(errors.length).toBe(2)
  }
}

export const BadRequest: Story = {
  name: 'BadRequest',
  parameters: {
    msw: {
      handlers: [
        httpMock.post('/signup/confirm', ({ response }) => response(400).json(signupConfirmFailure))
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByPlaceholderText('test@example.com')
    await userEvent.type(emailInput, 'test@example.com', { delay: 50 })

    const codeInput = canvas.getByLabelText('確認コード')
    await userEvent.type(codeInput, '1234567', { delay: 50 })

    const btn = canvas.getByRole('button', { name: '登録' })
    await userEvent.click(btn, { delay: 50 })

    const error = canvas.getByText('確認コードが間違っています')
    expect(error).toBeInTheDocument()
  }
}