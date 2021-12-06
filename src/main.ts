import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './router/'
import { createRouter, createWebHistory } from 'vue-router'
import './constants/global.scss'
import { createPinia } from 'pinia'
import shell from 'vue-shell'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(shell)
  .use(createPinia())
  .mount('#app')
