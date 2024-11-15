import { Meta, StoryObj } from "@storybook/vue3";
import TimerSettingModal from "./timer-setting-modal.vue";

const meta: Meta<typeof TimerSettingModal> = {
  component: TimerSettingModal,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}