<script>
// import axios library
import axios from 'axios';
// import store from store.js
import { store } from './store';
// import components
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import SearchApp from './components/SearchApp.vue';
import FooterApp from './components/FooterApp.vue';
import CardApp from './components/CardApp.vue';

//declaration components to export
export default {
  name:'App',
  components: {
    HeaderApp,
    MainApp,
    SearchApp,
    CardApp,
    FooterApp,
    
  },
  //access to data from store.js
  data(){
    return {
      store
    }
  },
  //Api call
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
          this.store.movies = response.data.results;
          this.store.searchKey = '',
          this.store.moviesFound = response.data.results.length;
      })
      .catch((error) => {
        this.store.movies = [];
        this.store.moviesFound = 0;
      });
      //tv shows
      axios.get(this.store.config.urlApi + this.store.config.endpointTvShows , {
        params: {
          api_key: this.store.config.apiKey,
          language: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      })
      .then((response) => {
          this.store.movies = response.data.results;
          this.store.searchKey = '',
          this.store.moviesFound = response.data.results.length;
          console.log(store.searchKey);
      })
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
  <HeaderApp />
  <MainApp />
  <SearchApp @search="search" />
  <CardApp />
  <FooterApp />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>