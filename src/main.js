import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import PrimeVueComponents from './components/PrimeVueComponents'
import { createPinia } from 'pinia'

import "primevue/resources/themes/lara-light-indigo/theme.css";

const app = createApp(App)
const pinia = createPinia()

PrimeVueComponents.forEach(comp => {
    app.component(comp.name, comp)
})
app
    .use(pinia)
    .use(PrimeVue)
    .mount('#app')

