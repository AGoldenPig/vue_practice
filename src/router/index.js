import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Book.vue'
import HomeRouter from '../router/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/book',
    name:'book',
    component: Book
  },
  HomeRouter
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes
})

