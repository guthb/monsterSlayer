export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    setCaoches(state, payload) {
        state.coaches = payload;
    }
};