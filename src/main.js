/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll)

registerPlugins(app)

app.mount('#app')
