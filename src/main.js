import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import {router} from "./router";
import PrimeVue from "primevue/config";


const app = createApp(App);
//inyectamos

app.use(PrimeVue);
app.use(router);

app.mount('#app');

