import Vue from 'vue';
import VueRouter from 'vue-router';

import { homeRoutes } from '@app/home';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...homeRoutes,
    ],
});
