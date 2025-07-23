import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import './assets/tailwind.css'

//Import Views



const app = createApp(App)
app.use(router)
app.mount('#app')


