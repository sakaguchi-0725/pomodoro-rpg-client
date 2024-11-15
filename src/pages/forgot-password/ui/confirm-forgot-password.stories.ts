import { Meta, StoryObj } from "@storybook/vue3";
import ConfirmForgotPassword from "./confirm-forgot-password.vue";

const meta: Meta<typeof ConfirmForgotPassword> = {
  component: ConfirmForgotPassword,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}