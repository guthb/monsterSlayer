export default {
    async egisterCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            //id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://vue-coach-566b4-default-rtdb.firebaseio.com/caoches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        //const responseData = await response.json();

        if (!response.ok) {
            // error...
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    }
};