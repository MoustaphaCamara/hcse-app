require('./bootstrap');

import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";

import App from './pages/App.vue';
import {routes} from './routes';

 
const router = createRouter({
    history: createWebHistory(),
    routes,
  });


createApp(App).use(router,axios, VueAxios).mount('#app')
