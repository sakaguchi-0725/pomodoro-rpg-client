import { createApp } from 'vue'
import App from '@/app/app.vue'
import { createAppRouter } from '@/app/routes'

const router = createAppRouter("web")
createApp(App).use(router).mount('#app')
