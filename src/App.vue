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
  }}
</script>

<template>
  <HeaderApp />
  <MainApp />
  <SearchApp />
  <CardApp />
  <FooterApp />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>