<script>
import CountryFlag from 'vue-country-flag-next'
export default {
  name: 'Card',
  
  components: {
    CountryFlag,
  },
  props: {
    info: Object,
  },
  //computed: {
    //getLanguage(){
        //switch(this.info.original_language) {
        //case 'en':
            //return 'gb';
        //case 'he':
            //return 'il';
        //default:
            //return this.info.original_language;
        //}
    //},
    //getVote(){
        //return Math.ceil(this.info.vote_average / 2);
    //},
    //title(){
      //return this.info.title;
    //},
    //original_title(){
      //return this.info.original_title || this.info.original_name;
    //}
  }

</script>

<template>
<h1>Boolflix Classe 89</h1>
<article>
    <h3>{{ title }}</h3>
    <h4>{{ original_title }}</h4>
    <div>{{  getLanguage }}</div>
    <country-flag :country="getLanguange" size="small" />
    <div>{{ getVote }}</div>
    <div v-for="n in 5">{{ n }}</div>
    <font-awesome></font-awesome>
    <font-awesome></font-awesome>
</article>
</template>
 
<style lang="scss" scoped>
h3 {
    color: green;
}
</style>