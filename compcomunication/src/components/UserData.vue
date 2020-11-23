<template>
    <section>
        <form @submit.prevent="submitForm">
        <input type="text" placeholder="your name" v-model="enteredName" />
        <input type="text" placeholder="your age" v-model="enteredAge"/>
        <button>Set User Data</button>
        </form>
    </section>   
</template>

<script>
export default {
    emits:['set-form'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        };
    },
    methods:{
        submitForm(){
            this.$emit('set-form', this.enteredName, this.enteredAge)
        }
    }
};
</script>