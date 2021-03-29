export default {
    async login() {        
        const response = await fetch(``, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log("not ok response",responseData)
            const error = new Error(responseData.message || 'Failed to authenticate, check your log in');
            throw error;
        }

    },
    async signup(context, payload) {
        
        const response = await fetch(``, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken:true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log("not ok response",responseData)
            const error = new Error(responseData.message || 'Failed to authenticate, check your log in');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    }
}