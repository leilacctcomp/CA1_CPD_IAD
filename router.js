import Vue from 'vue';
import Router from 'vue-router';
import Diary from './views/Diary.vue';
import MoodTrack from './views/MoodTrack.vue';
import GoalSetting from './views/GoalSetting.vue';
import Reminder from './views/Reminder.vue';
import Gaming from './views/Gaming.vue';
import Analytics from './views/Analytics.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/diary',
      name: 'diary',
      component: Diary,
    },
    {
      path: '/mood-track',
      name: 'mood-track',
      component: MoodTrack,
    },
    {
      path: '/goal-setting',
      name: 'goal-setting',
      component: GoalSetting,
    },
    {
      path: '/reminder',
      name: 'reminder',
      component: Reminder,
    },
    {
      path: '/gaming',
      name: 'gaming',
      component: Gaming,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics,
    }
  ],
});
