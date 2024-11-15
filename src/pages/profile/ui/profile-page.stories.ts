import { Meta, StoryObj } from "@storybook/vue3";
import ProfilePage from "./profile-page.vue";

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}