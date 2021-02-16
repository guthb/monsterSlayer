import { createApp } from 'vue';

import {createStore} from 'vuex'

import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() { 
        return {
             counter: 0,
           
        };
    },
    mutations: {
        increment(state) { 
            console.log(state)
            state.counter = state.counter + 2; //has to be snyc
        },
        increase(state, payload) { 
            state.counter = state.counter + payload.value;
        }, 
    },
    actions: {
        increment(context) { 
            setTimeout(function () {
                context.commit('increment')  //async
            }, 2000);
        },
        increase(context, payload) { 
            context.commit('increase', payload)
        },
    },
    getters: {
        testauth(state) { 
            return state.isLoggedIn;
        },
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) { 
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) { 
                return 0
            }
            if (finalCounter > 100) { 
                return 100;
            }
            return finalCounter;
        
        },
    }
}

const store = createStore({
    modules: {
        counter: counterModule
    },
    state() { 
        return {
            isLoggedIn: false
        };
    },
    mutations: {
           setAuth(state, payload) { 
            state.isLoggedIn = payload.isAuth;
        }   
    },
    actions: {
        
        login(context) { 
            context.commit('setAuth',{ isAuth: true });
        },
        logout(context) { 
            context.commit('setAuth', { isAuth: false });
        },
    },
    getters: {
       
        userIsAuthenticated(state) {
            return state.isLoggedIn;
         }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app');
