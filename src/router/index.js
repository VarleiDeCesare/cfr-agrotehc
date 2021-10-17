import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Dashboard from "@/views/Dashboard";
import Lavouras from "../views/lavoura/Index"
import Lavoura from "../views/lavoura/View"

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/lavouras',
    name: 'Lavouras',
    component: Lavouras
  },
  {
    path: "/lavouras/:id",
    name: 'Lavoura',
    component: Lavoura
  },


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
