const app = Vue.createapp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    method: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = true;
            } else if (box === 'B') {
                this.boxBSelected = true;
            } else if (box === 'C') {
                this.boxCSelected = true;
            }


        }
    }
})

app.mount('#styling')