import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Future from '../views/Future.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/:path(.*)', component: NotFound },
  { path: '/future', component: Future, meta: { title: 'Future' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
  { path: '/portfolio', component: Portfolio, meta: { title: 'Portfolio' } },
  { path: '/resume', component: Resume, meta: { title: 'Resume' } },
]