// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Give from '../views/give-page.vue';
import Home from '../views/Home-page.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/give-page', name: 'Give', component: Give }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
