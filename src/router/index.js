import { createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/Home.vue'
import Register from '../views/RegisterUser.vue'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import Blog from '../views/Blog.vue'
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;