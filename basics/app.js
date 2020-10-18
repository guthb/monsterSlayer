
// @ts-ignore
const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        },

    },
    method: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxAselected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBselected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCselected;
            }
        }
    }
})

app.mount('#styling')