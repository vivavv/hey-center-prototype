import { createRouter, createWebHistory } from "vue-router";
import MobileApp from "@/components/MobileApp";
import AppChat from "@/components/AppChat";

const routes = [
  {
    path: "/",
    name: "MobileApp",
    component: MobileApp
  },
  {
    path: "/chat/:id",
    name: "AppChat",
    component: AppChat
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
