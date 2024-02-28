import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueQueryPlugin);

app.mount('#app');
