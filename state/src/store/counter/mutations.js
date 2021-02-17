export default {
    increment(state) {
        console.log(state)
        state.counter = state.counter + 2; //has to be snyc
    },
    increase(state, payload) {
        state.counter = state.counter + payload.value;
    },
};