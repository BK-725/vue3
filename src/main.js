import './assets/main.css'
import i18nPlugin from './utils/i18n'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 传入插件
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
