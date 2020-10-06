// @ts-ignore
const app = Vue.createApp({
    data() {
        return {
            messageGoal: 'Learn Vue',
            vueLink: 'https://vueJs.org'
        };
    },
    methods: {
        outputMessage: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'You Need to learn Vue!';
            } else {
                return 'You will master Vue!';
            }
        }
    }
});

app.mount('#user-goal');
