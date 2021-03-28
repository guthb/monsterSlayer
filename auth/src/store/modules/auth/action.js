export default {
    login() {},
    async signup(context, payload) {
        const response = await fetch(`[enter api key to test]`,{
            method: 'POST',
            body: JSON.stringify({
                email: payload.eamil,
                password: payload.password,
                returnSecureToken:true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log("not ok response",resonseData)
            const error = new Error(resonseData.message || 'Failed to authenticate');
            throw error;
        }

        console.log(resonseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    }
}