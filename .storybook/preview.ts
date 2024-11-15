import { setup, type Preview } from "@storybook/vue3"
import { initialize, mswLoader } from 'msw-storybook-addon'
import { createAppRouter } from '../src/app/routes'
import '../src/app/assets/css/styles.css'

const routes = createAppRouter("memory")
setup((app) => {
  app.use(routes)
})

initialize({
  onUnhandledRequest: "bypass"
})

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
