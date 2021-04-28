<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vue'

export default {
  setup() {
    const store = useStore();

    function inc() {
      store.dispatch('increament');
    }

    return { inc };
  },
};
</script>