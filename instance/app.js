// @ts-ignore
const app = Vue.createApp({
    data() {
        return {
            messageGoalA: 'Learn Vue',
            messageGoalB: '<h2>Master Vue</h2>',
            vueLink: 'https://vueJs.org'
        };
    },
    methods: {
        outputMessage() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.messageGoalA;
            } else {
                return this.messageGoalB;
            }
        }
    }
});

app.mount('#user-goal');
