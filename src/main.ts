import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Para instalar o Bootstrap executar o comando:
// npm i bootstrap bootstrap-vue-3

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'

// Para instalar o Axios executar o comando:
// npm i axios
const app = createApp(App)

app.use(BootstrapVue3)
app.use(router)

app.mount('#app')
