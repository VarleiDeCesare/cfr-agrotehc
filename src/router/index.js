import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Dashboard from "@/views/Dashboard";
import Lavouras from "../views/lavoura/Index"
import Lavoura from "../views/lavoura/View"
import Safra from "../views/lavoura/safras/View.vue"
import CreateSafra from "../views/lavoura/safras/Create"
import EditUser from "../views/user/Edit"

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
  {
    path: "/lavouras/:id/safras/:id",
    name: 'Safra',
    component: Safra
  },
  {
    path: "/lavouras/:id/safras/create",
    name: 'Nova Safra',
    component: CreateSafra
  },
  {
    path: "/user/:id",
    name: 'Perfil',
    component: EditUser
  },


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
