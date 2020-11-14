<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manueal Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0123 45678 90',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }  
}
</script>