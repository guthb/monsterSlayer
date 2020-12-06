<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list> -->

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps"  > -->
      <!-- <template #default="slotProps"> -->
      <!-- <h2>{{ slotProps.item}}</h2>
      <p>{{ slotProps['another-prop']}}</p> -->
      <!-- </template> -->
    <!-- </course-goals> -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGols.vue';
import ManageGoals from './components/MagangedGoals.vue';

export default {

  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() { 
      return {
        selectedComponent: 'active-goals',
      activeUser: {
        name: 'Joe Black',
        description: "Soul Taker",
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
      console.log("button pressed" , cmp)
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>