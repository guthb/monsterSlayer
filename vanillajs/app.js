Vue.createAp({
  data: function () {
    return {
      goals: [],
      enterdValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = ''
    }
  }
}).mount('#app');




// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');


// function addGoal() {
//   const enteredValue = input.value;
//   const listItem = document.createElement('li');
//   listItem.textContent = enteredValue;
//   list.appendChild(listItem);
//   input.value = '';
// }

// button.addEventListener('click', addGoal);