export default {
    async contactCoach(context, payload) {
        const newRequest = {
            //id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.message,
            message: payload.message
        };
        const response = await fetch(`https://vue-coach-adb56-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`{
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

         if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request!')
            throw error;
         }
        
        newRequest.id = responseData.name;

        context.commit('addRequest', newRequest);
    }
};