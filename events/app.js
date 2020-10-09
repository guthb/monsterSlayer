//JS 
//document.querySelector('button').addEventListener();


// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },
    incrementBy(num) {
      this.counter = this.counter + num;
    },

    decrementBy(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    }

  }
});

app.mount('#events');
