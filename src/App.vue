<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import MovieSearch from './components/MovieSearch.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name:'App',
  components: {
    AppHeader,
    AppMain,
    MovieSearch,
    AppFooter,
  },
  data(){
    return {
      store
    }
  },
  methods: {
    search (){
      axios.get(this.store.config.urlMovie, {
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
      .catch((error) => {
        this.store.movies = [];
        this.store.moviesFound = 0;
      })
    }
    },
    created(){
        this.search();
    }
  }

</script>

<template>
  <AppHeader />
  <AppMain />
  <MovieSearch @searching="search" />
  <AppFooter />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>