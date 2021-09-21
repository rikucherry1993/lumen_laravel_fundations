require('./bootstrap');

import router from "./route"
import VueRouter from "vue-router";
import Vue from "vue";
import index from "./index";

window.Vue = require('vue').default;
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('example-2', require('./components/Example2.vue').default);

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  router,
  components: {
    "index": index
  }
});
