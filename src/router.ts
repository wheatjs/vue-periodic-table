import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Element from './views/Element.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
        path: '/element/:element',
        name: 'element',
        component: Element,
    }
    // { 
    //     path: "*", 
    //     component: Home 
    // }
  ],
});
