export default {
    contactCoach(context, payload){
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.message,
            message: payload.message
        };
        context.commit('addRequest', newRequest);
    }
}