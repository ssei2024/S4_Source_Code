import { createRouter, createWebHistory } from 'vue-router'

const Landing = () => import("@/pages/Landing.vue");
const Signup = () => import("@/pages/Signup.vue");
const AboutUs = () => import("@/pages/AboutUs.vue");
const NotFound = () => import("@/pages/NotFound.vue");

const routes = [
  { path: '/',name:'landing', component: Landing },
  { path: '/signup',name:'signup', component: Signup },
  { path: '/about-us',name:'aboutUs', component: AboutUs },
  { path: '/:pathMatch(.*)*',name:'notFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router