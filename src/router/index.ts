import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router';

import PlayersView from '../views/PlayersView.vue';
import TeamsView from '../views/TeamsView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'PlayersView',
    component:PlayersView
  },
  {
    path: '/Teams',
    name:'TeamsView',
    component:TeamsView
  }
]

const router = createRouter({
    history:createWebHistory(),
    routes
  });

  export default router;