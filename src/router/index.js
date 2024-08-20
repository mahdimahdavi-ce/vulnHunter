import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import VulnerabilitiesDetails from '../views/VulnerabilitiesDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details',
      name: 'DetailsPage',
      component: DetailsView,
      props: true, 
    },
    {
      path: '/api/vulnerabilities/detail/:id',
      name: 'vulnerabilitiesDetails',
      component: VulnerabilitiesDetails,
      props: true, 
    },
  ]
})

export default router
