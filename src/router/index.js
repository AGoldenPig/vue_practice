import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Book.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'book',
    component: Book
  },{
    path: '/home',
    name: 'home',
    component: Home
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes
})

