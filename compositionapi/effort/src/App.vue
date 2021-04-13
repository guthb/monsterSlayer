<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.goalVisibility">{{goal}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="togggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import {reactive} from 'vue';
export default {
  setup() {
    // const courseGoal = ref('Finish comp api effort');
    // const goalIsVisible = reg(false);
    // const courseData = ref({
    //   goal: "another way",
    //   goalVisibility: false
    // })

    onst courseData = reactive({
      goal: "another way",
      goalVisibility: false
    })


    function toggleGoalVisibility() {
      //goalIsVisible.value = !goalIsVisible.value;
      //courseData.value.goalVisibility = !courseData.value.goalVisibility;
      courseData.goalVisibility = !courseData.goalVisibility;
    }

    return { 
      goal: courseGoal.goal, 
      courseData,
      toggleGoalVisibility };
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>