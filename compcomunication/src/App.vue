<template>
    <div>
        <active-user></active-user>
        <user-data></user-data>
    </div>
</template>


<script>
    import ActiveUser from './components/ActiveUser.vue'
    import UserData from './components/UserData.vue'
    export default {}
</script>

<style>
html{
    font-family: sans-serif;
}

section{
    margin : 2rem auto;
    max-width:40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem
}
</style>