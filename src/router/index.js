import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
import Works from "@/views/Works.vue";
import Reviews from "@/views/Reviews.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Services",
      path: "/Services",
      component: Services,
    },
    {
      name: "Works",
      path: "/Works",
      component: Works,
    },
    {
      name: "Reviews",
      path: "/Reviews",
      component: Reviews,
    },
  ],
  linkExactActiveClass: "border-white border-b-4",
});

export default router;
