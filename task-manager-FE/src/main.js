import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "vue3-toastify/dist/index.css";
import Toast from "vue3-toastify";

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Toast);

app.mount('#app')
