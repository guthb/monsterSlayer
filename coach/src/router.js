import {createRouter, createWebHistory} from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    { path: '/',},
    { path: '/coaches', component: null},
    { path: '/coaches/id:', component: null, 
        children: [
            { path: 'contact', component: null}, // /coaches/c1/contact
        ]
    },
    { path: '/register', component: null},
    { path: '/requests', component: null},
    { path: '/:notFound(.*)', component: null},
  ],
});