import { App, createApp } from 'vue'
import { createMemoryHistory, createRouter, useRouter } from 'vue-router'

export const mockRoute = () => ({
  setup() {
    const { currentRoute } = useRouter()
    return { currentRoute }
  },
  template: `
    <div data-testid="currentRoute">Path: {{ currentRoute.fullPath }}</div>
    <story />
  `,
})

const _router = (name: string) => {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        name: 'dummy',
        component: { template: '<div></div>' },
      },
      {
        path: `/${name}`,
        name,
        component: { template: '<div></div>' },
      },
    ],
  })
}

export const withSetup = <T extends Record<string, unknown>>(
  composable: () => T,
): [T, App<Element>] => {
  const result = Object.create({})
  const app = createApp({
    setup() {
      Object.assign(result, composable())
      return () => {}
    },
  })
  app.use(_router('home'))
  app.mount(document.createElement('div'))
  return [result, app]
}