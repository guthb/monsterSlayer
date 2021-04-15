<template>
  <section class="container">
    <h2>{{ userName }}</h2>  
    <h3>{{ age }}</h3>
    <button @click="setAge">change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name"  v-model="lastName" />
    </div>
  </section>
</template>

<script>
import{ref, compile} from 'vue';

export default {

  setup() {
    // const uName = ref('Tommy');
    // const uAge = ref(26);

    //const uName = ref('Barney');
    const uAge  = ref(26);
    const firstName = ref('');
    const lastName = ref('');
    

    // setTimeout(function() {
    //   // uName.value = 'Tom';
    //   // uAge.value = 44;
    //   user.name = 'Tom'
    //   user.age = 44
    // }, 2000);

    const uName = computed(function(){
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      uAge.value = 77;
    }

    function setFirstName(event) {
      firstName.value = event.target.value
    }

    function setLastName(event) {
      firstName.value = event.target.value
    }

    //return { userName: uName, age: uAge};
    return { userName: uName, age: uAge, setAge: setNewAge, firstName, lastName};
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