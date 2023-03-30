<script>
import CountryFlag from 'vue-country-flag-next'
export default {
  name: 'Card',
  components: {
    CountryFlag
  },
  props: {
    info: Object
  },
  computed: {
    getLanguage(){
        switch(this.info.original_language) {
        case 'en':
            return 'gb';
        case 'he':
            return 'il';
        default:
            return this.info.original_language;
        }
    },
    getVote(){
        return Math.ceil(this.info.vote_average / 2);
    }
  }
}

</script>

<template>
<h1>Boolflix Classe 89</h1>
<article>
    <h3>{{ info.title }}</h3>
    <h4>{{ info.original_title }}</h4>
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