<script>
import axios from 'axios';
import { store } from '../store';
import CardApp from './CardApp.vue'

export default {
    name: 'Search',
    data() {
        return {
            store
        }
    },
    components: {
        CardApp
    },
    methods: {
        search (){
            console.log('cerco...');  //verifica input dati per query
            console.log(this.store.searchKey);

            axios.get(this.store.config.urlMovie,{
                params: {
                    api_key :this.store.config.keyApi,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey,
                }
            }).then((response) => {
                console.log(response) //verifica risposta api con dato input
                this.store.movies = response.data.results;
                console.log(response.data.results)
            })
        },
        reset() {
            console.log('svuoto i campi');
            this.store.searchKey = '';
        }
        }
    }
</script>

<template>
    <header>
        <div>
            <button @click="reset" type="reset">New Search</button>
        </div>
        <input type="text" placeholder="Search Film" v-model="store.searchKey">
        <button @click="search">Search</button>
    </header>
    <main>
        <br>
        <h2>Search results:</h2>
        <article v-for="movie in store.movies">
            <br>
            <h3>Title: {{ movie.title }}</h3>
            <h4>Original Title: {{ movie.original_title }}</h4>
            <h4>Original Language: {{ movie.original_language }}</h4>
            <h5>Rating: {{ movie.vote_average }}</h5>
            <br>
        </article>
    </main>
</template>

<style lang="scss" scoped>

</style>