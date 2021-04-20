<template>
  <section class="container">
    <user-data :user-name="userName" :age="age"></user-data>
    <button @click="setAge">change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name"  ref="lastnameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import{ref, watch, computed} from 'vue';
import userDate from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    // const uName = ref('Tommy');
    // const uAge = ref(26);

    //const uName = ref('Barney');
    const uAge  = ref(26);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
      

    // setTimeout(function() {
    //   // uName.value = 'Tom';
    //   // uAge.value = 44;
    //   user.name = 'Tom'
    //   user.age = 44
    // }, 2000);


  const uName = computed(function(){
    return firstName.value + ' ' + lastName.value;
  });

  watch([uAge, uName], function(newValue, oldValue) {
    console.log('Old age:' + oldValue[0]);
    console.log('New age:' + newValue[0]);
    console.log('Old name:' + oldValue[1]);
    console.log('New name:' + newValue[1]);
  })

  function setNewAge() {
    uAge.value = 77;
  }

  // function setLastName() {
  //   lastName.value = 101;
  // }

  // function setFirstName(event) {
  //   firstName.value = event.target.value
  // }

  function setLastName() {
    lastName.value = lastNameInput.value.value;
  }

    //return { userName: uName, age: uAge};
    return { userName: uName, age: uAge, setAge: setNewAge, firstName, lastNameInput, setLastName};
  }
//   data() {
//     return {
//       userName: 'sam',
//       age:31;
//     };
//   },
// methods: {
//   setNewAge() {
//     this.age =32;
//   }
// }

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>