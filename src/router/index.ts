import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import About from '../views/About.vue';
// import Chords from '../views/Chords.vue';
// import Scales from '../views/Scales.vue';
import LofiNameGenerator from '../views/LofiNameGenerator.vue';
import Contact from '../views/Contact.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/chords',
  //   name: 'Chords',
  //   component: Chords
  // },
  // {
  //   path: '/scales',
  //   name: 'Scales',
  //   component: Scales
  // },
  {
    path: '/lofinamegenerator',
    name: 'LofiNameGenerator',
    component: LofiNameGenerator
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router