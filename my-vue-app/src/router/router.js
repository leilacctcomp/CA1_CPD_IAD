import { createRouter, createWebHistory } from 'vue-router';

// Importing the Vue pages components
import UserDiary from '../components/UserDiary.vue';
import UserMoodTrack from '../components/UserMoodTrack.vue';
import UserGoalSetting from '../components/UserGoalSetting.vue';
import UserReminder from '../components/UserReminder.vue';
import UserGaming from '../components/UserGaming.vue';
import UserAnalytics from '../components/UserAnalytics.vue';

const routes = [
  {
    path: '/',
    name: 'UserDiary',
    component: UserDiary,
  },
  {
    path: '/mood-track',
    name: 'UserMoodTrack',
    component: UserMoodTrack,
  },
  {
    path: '/goal-setting',
    name: 'UserGoalSetting',
    component: UserGoalSetting,
  },
  {
    path: '/reminder',
    name: 'UserReminder',
    component: UserReminder,
  },
  {
    path: '/gaming',
    name: 'UserGaming',
    component: UserGaming,
  },
  {
    path: '/analytics',
    name: 'UserAnalytics',
    component: UserAnalytics,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;