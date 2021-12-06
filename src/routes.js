import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Future from './views/Future.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import Resume from './views/Resume.vue'


export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
  { path: '/future', component: Future, meta: { title: 'Future' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
  { path: '/portfolio', component: Portfolio, meta: { title: 'Portfolio' } },
  { path: '/resume', component: Resume, meta: { title: 'Resume' } },
]

// export const routes = new VueRouter({
//   routes2,
//   linkExactActiveClass: "active" // active class for *exact* links.
// })
