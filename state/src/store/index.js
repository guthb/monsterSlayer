import { createStore } from 'vuex'
import rootmutations from './mutations.js'
import rootactions from './actions.js'
import rootgetters from './getters'
import counterModule from './modules/counter/index.js.js'

const store = createStore({
    modules: {
        counter: counterModule
    },
    state() { 
        return {
            isLoggedIn: false
        };
    },
    mutations: rootmutations,
    actions: rootactions,
    getters: rootgetters
})

export default store;