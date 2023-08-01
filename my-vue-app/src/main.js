import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // check path


createApp(App)
  .use(router)
  .mount('#app');
