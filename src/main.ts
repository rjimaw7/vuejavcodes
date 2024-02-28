import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home/Home.vue';

const pinia = createPinia();
const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        }
        // {
        //     path: '/about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('./components/About.vue')
        // },
        // {
        //     path: '/products',
        //     component: () => import('./components/Products.vue')
        // }
    ]
});

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);

app.mount('#app');
