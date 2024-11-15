import { Meta, StoryObj } from "@storybook/vue3";
import PomodoroPage from "./pomodoro-page.vue";

const meta: Meta<typeof PomodoroPage> = {
  component: PomodoroPage,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}