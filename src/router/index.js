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
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/users",
    name: "users",
    component: User,
  },
  {
    path: "/users/:id",
    name: "users.show",
    component: ShowUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;