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
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=908af261f8e52211132e82f969d145a4', {
        params: {
          title: store.searchTitle,
        }
      })
      .then((response) => {
          this.store.movies = response.data.results;
          this.store.searchTitle = '',
          this.store.moviesFound = response.data.results.length;
          console.log('sto cercando');
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