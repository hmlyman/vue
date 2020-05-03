import Vue from "vue";
import Router from "vue-router";
import Sources from "../views/Sources.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "sources",
      component: Sources,
    },
  ],
});
