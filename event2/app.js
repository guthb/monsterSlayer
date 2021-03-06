const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    fullnameOutput() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Smiley';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {

        const that = this;

        setTimeout(function () {
          // @ts-ignore
          that.counter = 0;
        }, 2000);

      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  }
});

app.mount('#events');
