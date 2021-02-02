<template>
    
        <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user}}</li>
        </transition-group>
   
    <div>
        <input type="text" ref="userNameInput"/>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
import LearningResource from '../../../learningApp/src/components/learning-resources/LearningResource.vue'
export default {
  components: { LearningResource },
    data() {
        return{
            users: ['moe', 'larry', 'curly', 'shemp', 'curly-joe']
        }
    },
    methods: {
        addUser(){
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(user) {
            this.users = this.users.filter( usr => usr !==user);
        }
    }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }
  li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
  }
</style>