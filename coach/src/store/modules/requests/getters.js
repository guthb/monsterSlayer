export default {
    requests(state){
        return state.requests;
    },
    hasrRequests(state){
        return state.requests && state.requests.length >0;
    } 
};