import DataSourcePage from '@/views/data-source-view/DataSourcePage.vue'
import HomePage from '@/views/home/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: HomePage,
      children: [
        { path: 'dataSource', name: 'dataSource', component:DataSourcePage },
        // { path: 'layout', name: 'layout', component: 'LayoutView' },
        // { path: 'actions', name: 'actions', component: 'ActionsView' }
    ]
    },

  ]
})

export default router
