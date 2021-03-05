<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode= "outline"> Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <!-- <li v-for="coach in filteredCoaches" :key ="coach.id">
                    {{coach.firstName}}
                </li> -->
                <coach-item v-for="coach in filteredCoaches" 
                :key="coach.id" 
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :rate="coach.hourlyRate">
                </coach-item>
            </ul>
            <h3 v-else>No Coaches Found</h3>
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue'


export default {
    components: {
        CoachItem,
        BaseCard,
        CoachFilter
    },
    data(){
        return {
            activefilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed:{
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    },
    methods: {
        setFilters(updateFilters){

        }
    }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>