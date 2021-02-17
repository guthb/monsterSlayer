

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

