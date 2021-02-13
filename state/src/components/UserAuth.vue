<template>
    <button @click="login">Login</button>
    <button @click="logout">LogOut</button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('login');
        },
        logout() {
            this.$store.dispatch('logout');
        }
    }
}
</script>