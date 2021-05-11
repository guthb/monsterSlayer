// new Vue({
//   el: '#app',
//   data: {
//     isVisible: true
//   },
//   methods: {
//     toggleBox() {
//       this.isVisible = !this.isVisible;
//     }
//   },
// });

Vue.createApp({
  data() {
    return { isVisible: true };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount('#app')