import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        //{ path: '/teams', component: TeamsList, alias: '/' }, --no url change
        { path: '/teams', component: TeamsList, alias:'/' },
        { path: '/teams', components: UsersList },
        { path: '/teams/:teamId', component: TeamMembers, props: true },
        { path: '/:catchAll(.*)'}
    ],
    linkActiveClass: 'active'
});
const app = createApp(App);

app.use(router);

app.mount('#app');
