<template>
  <button @click="confirmInput">Confirm</button>
  <button@click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {changesSaved: false};
  },
  inject: ['users'],
  methods: {
    confirmInput(){
      //do somthing
      this.$router.push('/teams');
    },
    saveChanges(){
      changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList' 'Component' 'beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
     console.log('UserList' 'Component' 'beforeRouteLeave');
     console.log(to, from);
     if ( this.changesSaved){
       next();
     } else {
       const userWantstoLeave= promt('you have unsaved changes')
       next(userWantstoLeave);
     }
  },
  unmounted() {
    console.log ('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>