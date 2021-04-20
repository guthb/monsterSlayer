<template>
    <h2>{{userName}}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
    props: ['userName', 'age']
}
</script>
