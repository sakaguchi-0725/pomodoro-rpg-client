import { Meta, StoryObj } from "@storybook/vue3";
import CharacterStatus from "./character-status.vue";

const meta: Meta<typeof CharacterStatus> = {
  component: CharacterStatus,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}