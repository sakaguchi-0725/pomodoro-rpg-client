import { Meta, StoryObj } from "@storybook/vue3";
import WelcomePage from "./welcome-page.vue";

const meta: Meta<typeof WelcomePage> = {
  component: WelcomePage,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}