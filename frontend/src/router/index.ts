import { createRouter, createWebHistory } from 'vue-router'
import index from "@/pages/index.vue";
import image from "@/pages/image.vue";

const routes = [
  { path: '/', component: index },
  { path: '/image/:id', component: image },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
