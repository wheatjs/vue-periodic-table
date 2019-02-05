import Vue from 'vue';

import { App } from '@app/core';
import { router } from '@shared/router';
import { store } from '@shared/store';

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
