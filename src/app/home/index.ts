import { RouteConfig } from 'vue-router';

export const homeRoutes: RouteConfig[] = [

    {
        path: '/',
        component: () => import('./HomeView.vue'),
    },

    {
        path: '/:symbol',
        component: () => import('./HomeView.vue'),
    },

];
