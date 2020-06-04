import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SchedulesCalendar from '../views/Schedules'
import HistoryComponent from '../views/History'
import ProvidersComponent from '../views/Providers'
import StatisticsComponent from '../views/Statistics'
import constructionSitesComponent from '../views/ConstructionSites'
import DeliveryAreasComponent from '../views/DeliveryAreas'
import MaterialsComponent from '../views/Materials'
import NewconstructionSitesComponent from '../components/ConstructionSites/CreateConstructionSite'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: SchedulesCalendar
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryComponent
  },
  {
    path: '/providers',
    name: 'Providers',
    component: ProvidersComponent
  },
  {
    path: '/constructionsites',
    name: 'Constructionsites',
    component: constructionSitesComponent
  },
  {
    path: '/constructionsites/new',
    name: 'CreateConstructionsites',
    component: NewconstructionSitesComponent
  },
  {
    path: '/materials',
    name: 'Materials',
    component: MaterialsComponent
  },
  {
    path: '/deliveryAreas',
    name: 'DeliveryAreas',
    component: DeliveryAreasComponent
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: StatisticsComponent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
