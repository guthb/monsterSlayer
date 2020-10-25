const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            taskListIsVisibile: true
        };
    },
    computed: {
        buttonCaption() {
            return this.taskListIsVisibile ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        toggleTaskList() {
            this.taskListIsVisibile = !this.taskListIsVisibile;
        }
    }

});


app.mount('#assignment')