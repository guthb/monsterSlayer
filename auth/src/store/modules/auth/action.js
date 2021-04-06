let timer;


export default {
    
        async login(context, payload) {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[ADD API_KEY]`, {
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
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[ADD API_KEY]`, {
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

        //const expiresIn = +responseData.expiresIn * 1000;
        const expiresIn = 5000; //testing
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);


         timer = setTimeout(function () {
            context.dispatch('logout')
        }, expiresIn);


        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        //     tokenExpiration: responseData.expiresIn
        });

       

    },
    autoLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - newdate().getTime();

        if (expiresIn < 0) {
            return;
        }
        
        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn);
        
        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
                // tokenExpiration: null
            });
            
        }
    },
    logout(context) {
        localStorage.removeItem('token');
        localStoragae.removeItem('userId');
        localStorage.removeItem('tokenExpiration')

        clearTimeout(timer);
        
        context.commit('setUser', {
            token: null,
            userId : null,
            //tokenExpiration : null,
        });      
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
}