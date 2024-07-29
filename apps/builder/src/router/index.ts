import ActionsPage from '@/views/actions/ActionsPage.vue'
import DataSourcePage from '@/views/data-source-view/DataSourcePage.vue'
import HomePage from '@/views/home/HomePage.vue'
import LayoutPage from '@/views/layout/LayoutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/app',
//       name: 'app',
//       component: HomePage,
//       children: [
//         { path: 'dataSource', name: 'dataSource', component:DataSourcePage },
//         { path: 'layout', name: 'layout', component: LayoutPage },
//         // { path: 'actions', name: 'actions', component: 'ActionsView' }
//     ]
//     },

//   ]
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          name: 'app',
          component: HomePage,
          children: [
              { path: '/', redirect: '/dataSource' },
              { path: 'dataSource', name: 'dataSource', component: DataSourcePage },
              { path: 'layout', name: 'layout', component: LayoutPage },
              { path: 'actions', name: 'actions', component: ActionsPage }
          ]
      }
  ]
})


export default router
