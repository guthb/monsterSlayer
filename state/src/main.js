import { createApp } from 'vue';

import {createStore} from 'vuex'

import App from './App.vue';

const store = createStore({
    state() { 
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) { 
            state.counter = state.counter + 2; //has to be snyc
        },
        increase(state, payload) { 
            state.counter = state.counter + payload.value;
        },
        
    },
    actions: {
        increment(context) { 
            context.commit('increment')
        },
    },
    getters: {
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
        
        }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app');
