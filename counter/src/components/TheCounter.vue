<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from 'vue'
import {useStore} from 'vuex';

export default {
  setup() {

    const store = useStore();

    const counter = computed(function() {
      return store.getters.counter;
    });

    // const counter = 0;

    return { counter };
  },
};
</script>