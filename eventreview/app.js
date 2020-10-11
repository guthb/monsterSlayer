// @ts-nocheck
const app = Vue.createApp({
    data() {
        return { userInput: '', confirmedUserInput: '' }
    },
    methods: {
        displayAlert() {
            alert('Alert Alert')
        },
        registerUser(event) {
            this.userInput = event.target.value;
        },
        confirmUser() {
            this.confirmedUserInput = this.userInput;
        }

    }
});

app.mount('#event');