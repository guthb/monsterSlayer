export default {
    login() { },
    async signup(context, payload) {
        const response = await fetch(`{
            method: 'POST',
            body: JSON.stringify({
                email: payload.eamil,
                password: payload.password,
                returnSecureToken:true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log(resonseData)
            const error = new Error(resonseData.message || 'Failed to authenticate');
            throw error;
        }

        console.log(resonseData);
    }
}