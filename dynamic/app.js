const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphIsVisible: true,
            inoutBackgroundColor: ''
        };
    },
    computed: {
        paragraphClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphIsVisiable,
                hidden: !this.paragraphIsVisiable
            };
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        },
    },
});
app.mount("#dynamic");