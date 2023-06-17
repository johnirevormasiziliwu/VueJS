import { createRouter, createWebHistory } from "vue-router";
import Home from "./../views/Home.vue";
import About from "./../views/About.vue";
import Contact from "./../views/Contact.vue";
import User from "./../views/User.vue";
import ShowUser from "./../views/ShowUser.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    name: "about",
    component: About,
  },
  {
    path: "/",
    name: "contact",
    component: Contact,
  },
  {
    path: "/",
    name: "users",
    component: User,
  },
  {
    path: "/",
    name: "showuser",
    component: ShowUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;