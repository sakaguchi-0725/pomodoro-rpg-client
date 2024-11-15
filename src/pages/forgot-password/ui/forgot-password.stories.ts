import { Meta, StoryObj } from "@storybook/vue3";
import ForgotPassword from "./forgot-password.vue";

const meta: Meta<typeof ForgotPassword> = {
  component: ForgotPassword,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}