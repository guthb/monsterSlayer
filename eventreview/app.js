// @ts-nocheck
const app = Vue.createApp({
    data() {
        return { userInput: '' }
    },
    methods: {
        displayAlert() {
            alert('Alert Alert')
        },
        registerUser(event) {
            this.userInput = event.target.value;
        }
    }
});

app.mount('#event');