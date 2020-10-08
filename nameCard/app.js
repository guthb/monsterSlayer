// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      name: 'Vue Developer',
      age: 25
    };
  },
  methods: {
    incrementAgeByFive() {
      return this.age + 5;
    }
  }
});

app.mount('#nameCard');