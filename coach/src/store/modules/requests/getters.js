export default {
    requests(state, getters, routState, rootGetters) {
        const coachId = rootGetters.userId;
        console.log(state.requests)
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasrRequests(state, getters){
        return getters.requests && getters.requests.length >0;
    } 
};