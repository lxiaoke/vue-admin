import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import './style.css';
import App from './App.vue';

import HelloWorld from './components/HelloWorld.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [{ path: '/', component: HelloWorld }],
});

createApp(App).use(router).mount('#app');
