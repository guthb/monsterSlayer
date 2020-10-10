//JS 
//document.querySelector('button').addEventListener();


// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
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
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      //event.preventDefault();
      alert('Submitted!');
    },
    confirmedInput() {
      this.confirmedName = this.name;
    }

  }
});

app.mount('#events');
