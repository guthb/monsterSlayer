import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UserFooter from './pages/UserFooter.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        //{ path: '/teams', component: TeamsList, alias: '/' }, --no url change
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true},
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
            },
            beforeEnter(to, from, next) { 
                console.log('users beforeEnter')
                console.log(to, from)
                next();
            }

        },
        //{ path: '/teams/:teamId', component: TeamMembers, props: true },
        //{ path: '/:catchAll(.*)', redirect: '/teams'}
        { path: '/:notFoundl(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savePosition) { 
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
    if (to.meta.needsAuth) {
        console.log('Needs Auth');
        next();
    } else { 
        next();
    }
        
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } });  //next true confirms & this is an infinite loop
    // }
    next();
});
 

router.afterEach(function (to, from) {
    //sending anlytics
    console.log('Global afterEach')
    console.log(to, from);
});

export default router;