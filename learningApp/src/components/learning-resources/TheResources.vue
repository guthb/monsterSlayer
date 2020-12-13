<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResouces from './StoredResource.vue';
import AddResources from './AddResources.vue';

export default {
  components: {
    StoredResouces,
    AddResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'offical Vue.js docs',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'google this...',
          link: 'https://google.com'
        }
      ]
    };
  },
  computed:{
    storedResButtonMode(){
      return this.selectedTab ==='stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab ==='add-resource' ? null : 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>
