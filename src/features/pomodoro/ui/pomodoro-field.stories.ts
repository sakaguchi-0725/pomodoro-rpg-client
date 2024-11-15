import { Meta, StoryObj } from "@storybook/vue3"
import PomodoroField from "./pomodoro-field.vue"
import { storeTime } from "@/entities/pomodoro"
import { httpMock } from "@/shared/tests/http-mock"
import { expect, userEvent, within } from "@storybook/test"
import { invalidRequestResponse } from "../__tests__/fixture"

const meta: Meta<typeof PomodoroField> = {
  component: PomodoroField,
}

export default meta

type Story = StoryObj<typeof meta>

export const StoreTimeSuccess: Story = {
  name: 'FocusTime登録成功',
  async beforeEach() {
    storeTime("pomodoro", "0.1")
  },
  parameters: {
    msw: {
      handlers: [
        httpMock.post('/times', ({ response }) => response(200).empty())
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByLabelText('start')
    await userEvent.click(btn)

    const completedText = await canvas.findByText("05:00", {}, { timeout: 10000 })
    expect(completedText).toBeInTheDocument()
  }
}

export const StoreTimeFailure: Story = {
  name: 'FocusTime登録失敗',
  async beforeEach() {
    storeTime("pomodoro", "0.1")
  },
  parameters: {
    msw: {
      handlers: [
        httpMock.post('/times', ({ response }) => response(400).json(invalidRequestResponse))
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByLabelText('start')
    await userEvent.click(btn)
  }
}