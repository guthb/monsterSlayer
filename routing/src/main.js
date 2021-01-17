import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        //{ path: '/teams', component: TeamsList, alias: '/' }, --no url change
        {
            name: 'teams',
            path: '/teams',
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers, props: true
                }
            ]
        },
        {
            path: '/users', components: {
                default: UsersList,
                footer: UsersFooter
            }
        },
        //{ path: '/teams/:teamId', component: TeamMembers, props: true },
        //{ path: '/:catchAll(.*)', redirect: '/teams'}
        { path: '/:notFoundl(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savePosition) { 
        console.log(to, from, savedPosition);
        // this.$route
        if (savePosition) { 
            return savePosition
        }
        return { letft:0, top:0};

    }
});

router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    next();
 });

const app = createApp(App);

app.use(router);

app.mount('#app');
