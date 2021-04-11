<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <p>{{user.name}}</p>
    <h3>{{user.age}}</h3>
  </section>
</template>

<script>
import {ref, reactive} from 'vue';


export default {

  setup() {
    // const uName = ref('Tommy');
    // const uAge = ref(26);

    const uAge = ref(13)
    const user = reactive({
      name: 'Barney',
      age: 26
    })

    setTimeout(function() {
      // uName.value = 'Tom';
      // uAge.value = 44;
      user.name = 'Tom'
      user.age = 44
    }, 2000);

    //return { userName: uName, age: uAge};
        return { user: user};
  }
//   data() {
//     return {
//       userName: 'sam',
//     };
//   },
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