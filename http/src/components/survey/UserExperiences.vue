<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-elsee-if="!isLoading && ( !results || results.length === 0)">No Results Data in Database</p>
      <ul v-else-if ="!isLoading && results.length > 0" >
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return{
      results: [],
      isLoading: false
    }
  },
  methods:{
    loadExperiences(){
      this.isLoading =true;
      //firebase
      fetch('https://some-backend-url.com/surveys.json')
        .then((response) => {
          if(response.ok){
            return response.json();
        }
      })
      .then((data) => {
        this.isLoading = false;
        console.log(data);
        const results = [];
        for (const id in data){
          results.push({
            id: id, 
            name: data[id].name, 
            rating: data[id].rating,
          )};
        }
        this.results = results;
      ));
    },
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>