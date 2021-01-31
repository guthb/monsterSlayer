<template>
    <ul>
        <li v-for="user in users" :key="user">{{ user}}</li>
    </ul>
</template>

<script>
import LearningResource from '../../../learningApp/src/components/learning-resources/LearningResource.vue'
export default {
  components: { LearningResource },
    data() {
        return{
            users: ['moe', 'larry', 'curly', 'shemp', 'curly-joe']
        }
    }
}
</script>