// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      name: 'Vue Developer',
      age: 25,
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UH0Im37AH1OJSew-57Bk8AHaE6%26pid%3DApi&f=1'
    };
  },
  methods: {
    incrementAgeByFive() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.random();
    }
  }
});

app.mount('#nameCard');