import { Meta, StoryObj } from "@storybook/vue3";
import SignupPage from "./signup-page.vue";

const meta: Meta<typeof SignupPage> = {
  component: SignupPage,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}