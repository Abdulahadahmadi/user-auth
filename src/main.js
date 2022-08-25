import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'flowbite';
import  router from './router';
import Vuex from 'vuex';


createApp(App).use(router).mount('#app')
