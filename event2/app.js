const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
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
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    }
  },
  computed: {
    // fullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Smiley';
    // }
  }
});

app.mount('#events');
