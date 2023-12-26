import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    },
    {
      name: "Services",
      path: "/Services",
      component: () =>
        import(/* webpackChunkName: "services" */ "@/views/Services.vue"),
    },
    {
      name: "Works",
      path: "/Works",
      component: () =>
        import(/* webpackChunkName: "works" */ "@/views/Works.vue"),
    },
    {
      name: "Reviews",
      path: "/Reviews",
      component: () =>
        import(/* webpackChunkName: "reviews" */ "@/views/Reviews.vue"),
    },
  ],
  linkExactActiveClass: "border-white border-b-4",
});

export default router;
