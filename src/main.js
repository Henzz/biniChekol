import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'admin-lte/dist/css/adminlte.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

require('admin-lte')
require('jquery')
require('bootstrap')

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
