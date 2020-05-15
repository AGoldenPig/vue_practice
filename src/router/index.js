import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'book',
    component: Book
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes
})

