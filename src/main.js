import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

const app = createApp(App) 

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: { preset: Aura },
})


app.component('PvButton', Button)
app.component('PvDataTable', DataTable)
app.component('PvColumn', Column)

app.mount('#app')
