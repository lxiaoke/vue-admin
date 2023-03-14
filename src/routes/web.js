import * as VueRouter from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';

const routes = [{ path: '/', component: Dashboard }];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
