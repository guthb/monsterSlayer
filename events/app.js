//JS 
//document.querySelector('button').addEventListener();


// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
    }

  }
});

app.mount('#events');
