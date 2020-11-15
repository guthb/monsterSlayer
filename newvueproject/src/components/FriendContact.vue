<template>
    <li>
        <h2>{{name}} {{isFavorite === '1' ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorie</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} </button>
        <ul v-if = "detailsAreVisible">
            <li><strong>Phone:</strong>{{phoneNumber}}</li>
            <li><strong>Email:</strong>{{emailAddress}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props:[ 'name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'manuel',
                    name: 'Manueal Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com'
                },           
            };
        },
    methods:{
        toggleDetails() {
            this.detailsAreVisible =!this.detailsAreVisible;
        },
        toggleFavorie() {
            if (this.isFavorite === '1'){
                this.isFavorite = '0';
            } else {
                this.isFavorite ='1';
            }
        }
    }
};
</script>