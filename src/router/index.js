import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Brands from "../views/Brands.vue";
import Brand from "../views/Brand.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contato",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/marcas",
    name: "Brands",
    component: Brands,
  },
  {
    path: "/marca",
    name: "Brand",
    component: Brand,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
