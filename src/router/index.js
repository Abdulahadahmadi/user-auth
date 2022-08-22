import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'register',
            component: () => import(/* webpackChunkName: "home" */ '@/views/RegisterUser.vue')
        },
    ],
})