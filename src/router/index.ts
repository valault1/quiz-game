import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Quiz from '../views/Quiz.vue'
import StartQuiz from '../views/StartQuiz.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/quiz/:category/:difficulty',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/',
    name: 'StartQuiz',
    component: StartQuiz
  },
  {
    path: '/finished/:numCorrect',
    name: 'Finished',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Finished.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
