import { Meta, StoryObj } from "@storybook/vue3";
import InternalServer from "./internal-server.vue";

const meta: Meta<typeof InternalServer> = {
  component: InternalServer,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}