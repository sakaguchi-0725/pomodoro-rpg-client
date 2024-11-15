import { Meta, StoryObj } from "@storybook/vue3"
import LoginPage from "./login-page.vue"

const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}