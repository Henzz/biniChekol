import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingWelcome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => 
      import("../components/landingPage/LandingWelcome.vue"),
  },
  {
    path: "/customerdashboard",
    name: "customerDashboard",
    component: () => 
      import("../components/customer/customerDashboard.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
