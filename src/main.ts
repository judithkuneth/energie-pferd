import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/sora/wght.css'
import './styles.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
