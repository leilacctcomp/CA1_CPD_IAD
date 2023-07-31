import { createRouter, createWebHistory } from 'vue-router';

// Here you can import your components
// import Diary from '../views/Diary.vue';
// import MoodTrack from '../views/MoodTrack.vue';
// import GoalSetting from '../views/GoalSetting.vue';
// import Reminder from '../views/Reminder.vue';
// import Gaming from '../views/Gaming.vue';
// import Analytics from '../views/Analytics.vue';

const routes = [
  {
    path: '/',
    name: 'Diary',
    component: Diary,
  },
  {
    path: '/mood-track',
    name: 'MoodTrack',
    component: MoodTrack,
  },
  {
    path: '/goal-setting',
    name: 'GoalSetting',
    component: GoalSetting,
  },
  {
    path: '/reminder',
    name: 'Reminder',
    component: Reminder,
  },
  {
    path: '/gaming',
    name: 'Gaming',
    component: Gaming,
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
