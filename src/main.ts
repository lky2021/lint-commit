import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '@/router/index.ts'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/css/styles.css'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

import './permission.ts'

app.mount('#app')
