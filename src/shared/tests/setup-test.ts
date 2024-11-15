import { afterAll, afterEach, beforeAll } from 'vitest'
import { mockServer } from './mock-server'

beforeAll(() => mockServer.listen({ onUnhandledRequest: 'error' }))
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())