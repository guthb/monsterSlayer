const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template:`
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza!'
    }
  }
})

app2.mount('#app2');


// let message = 'Hello';

// let longMessage = message + 'World';

// console.log(longMessage);

// message = 'Hell0!!!';

// console.log(longMessage);

const data = {
  message: 'Hello!'
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  if (key === 'message'){
    target.message = value + 'World!';
  }
  target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!';
