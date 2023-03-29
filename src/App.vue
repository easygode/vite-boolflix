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
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d', {
        params: {
          title: store.searchTitle,
        }
      })
      .then((response) => {
          console.log(response);
          this.store.movies = response.data.results;
          this.store.moviesFound = response.data.results.length;
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
  <AppMain @user_search="search" />
  <MovieSearch />
  <AppFooter />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>