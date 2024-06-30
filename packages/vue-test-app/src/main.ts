import { ComponentLibrary } from 'vue-library';
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ComponentLibrary).use(createPinia()).use(router)

app.mount('#app')
