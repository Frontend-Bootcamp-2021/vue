import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import AboutComponent from '../views/about/About.vue';
import DetailComponent from '../views/detail/Detail.vue';
import ChatComponent from '../views/chat/Chat.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }, {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }, {
    path: '/detail',
    name: 'Detail',
    component: DetailComponent
  }, {
    path: '/chat',
    name: 'Chat',
    component: ChatComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;