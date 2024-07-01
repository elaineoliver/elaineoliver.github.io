import { ComponentLibrary } from 'vue-library';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

async function prepareApp() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

const app = createApp(App)

app.use(ComponentLibrary).use(createPinia()).use(router)

prepareApp().then(() => {
  app.mount("#app");
});
