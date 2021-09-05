import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "admin-lte/dist/css/adminlte.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

require("bootstrap");
require("admin-lte");
require("jquery");

window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
