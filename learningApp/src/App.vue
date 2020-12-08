<template>
    <ul></ul>
</template>

<script>
export default {
    data() {
        return {
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

                },
            ],
        };
    },
}
</script>