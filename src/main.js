// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index';
import axios from 'axios'
import VueAxios from 'vue-axios'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

axios.defaults.withCredentials = true;
Vue.use(VueAxios,axios);
Vue.use(iView);
Vue.config.productionTip = false
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
