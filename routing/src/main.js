import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamList.vue';
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList },
        {path: '/teams', components: UsersList },
    ]
});
const app = createApp(App);

app.use(router);

app.mount('#app');
