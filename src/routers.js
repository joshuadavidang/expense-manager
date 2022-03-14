import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddTransaction from "./components/AddTransaction";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },

  {
    name: "AddTransaction",
    component: AddTransaction,
    path: "/addtransaction",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
