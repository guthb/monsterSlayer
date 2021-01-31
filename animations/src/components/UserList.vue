<template>
    <ul>
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user}}</li>
    </ul>
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