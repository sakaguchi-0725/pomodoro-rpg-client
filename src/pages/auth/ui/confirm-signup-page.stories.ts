import { Meta, StoryObj } from "@storybook/vue3";
import ConfirmSignupPage from "./confirm-signup-page.vue";

const meta: Meta<typeof ConfirmSignupPage> = {
  component: ConfirmSignupPage,
}

export default meta

type Story = StoryObj<typeof ConfirmSignupPage>

export const Primary: Story = {}