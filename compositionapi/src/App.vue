<template>
  <section class="container">
    <h2>{{ user.name }}</h2>  
    <h3>{{user.age}}</h3>
    <button @click="user.age=66">change age</button>
  </section>
</template>

<script>
import {reactive} from 'vue';


export default {

  setup() {
    // const uName = ref('Tommy');
    // const uAge = ref(26);

    const user = reactive({
      name: 'Barney',
      age: 26
    })

    // setTimeout(function() {
    //   // uName.value = 'Tom';
    //   // uAge.value = 44;
    //   user.name = 'Tom'
    //   user.age = 44
    // }, 2000);

   

    //return { userName: uName, age: uAge};
        return { user: user};
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