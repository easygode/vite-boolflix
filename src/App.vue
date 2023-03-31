<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import MovieSearch from './components/MovieSearch.vue';
import AppFooter from './components/AppFooter.vue';
import CardApp from './components/CardApp.vue';

export default {
  name:'App',
  components: {
    AppHeader,
    AppMain,
    MovieSearch,
    AppFooter,
    CardApp
  },
  data(){
    return {
      store
    }
  },
  methods: {
    search (){
      //movie
      axios.get(this.store.config.urlApi + this.store.config.endpointMovie  , {
        params: {
          api_key: this.store.config.apiKey,
          language: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      })
      .then((response) => {
        console.log(response);
          this.store.movies = response.data.results;
          this.store.searchKey = '',
          this.store.moviesFound = response.data.results.length;
          console.log(store.searchKey);
      })
      .catch((error) => {
        this.store.movies = [];
        this.store.moviesFound = 0;
      });
      //tv shows
      //axios.get(this.store.config.urlApi + this.store.config.endpointTvShows , {
        //params: {
          //api_key: this.store.config.apiKey,
          //language: this.store.config.defaultLang,
          //query: this.store.searchKey
        //}
      //})
      //.then((response) => {
        //console.log(response);
          //this.store.movies = response.data.results;
          //this.store.searchKey = '',
          //this.store.moviesFound = response.data.results.length;
          //console.log(store.searchKey);
      //})
    }
    },
    created(){
        this.search();
    },
    computed: {
      results(){
        return [...this.store.movies, ...this.store.tv]
      }
    }
  }

</script>

<template>
  <AppHeader />
  <AppMain />
  <MovieSearch @search="search" />
  <AppFooter />
  <CardApp />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>