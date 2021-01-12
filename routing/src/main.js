import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        //{ path: '/teams', component: TeamsList, alias: '/' }, --no url change
        {
            name: 'teams',
            path: '/teams',
            component: TeamsList,
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        { path: '/teams', components: UsersList },
        //{ path: '/teams/:teamId', component: TeamMembers, props: true },
        //{ path: '/:catchAll(.*)', redirect: '/teams'}
        { path: '/:catchAll(.*)', component: NotFound}
    ],
    linkActiveClass: 'active'
});
const app = createApp(App);

app.use(router);

app.mount('#app');
