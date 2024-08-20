import './assets/main.css'
import store from './stores/counter';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(createPinia())
app.use(store);
app.use(router)
app.use(Antd)

app.mount('#app')
