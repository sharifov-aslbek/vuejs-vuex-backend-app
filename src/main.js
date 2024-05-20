

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiComponents from './ui-components/component.js'
import store from './store'
const app = createApp(App)

uiComponents.map(components => app.component(components.name, components))
app.use(router)
app.use(store)
app.mount('#app')
