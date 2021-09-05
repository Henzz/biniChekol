import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

<<<<<<< HEAD

require('admin-lte')
require('jquery')
require('bootstrap')
=======
import "admin-lte/dist/css/adminlte.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

require("bootstrap");
require("admin-lte");
require("jquery");
>>>>>>> 61f7fecd41398131ca6b63a3a6176fad208e5e3d

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
