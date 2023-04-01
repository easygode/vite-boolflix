<script>
import axios from 'axios';
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
import { initCustomFormatter } from 'vue';

export default {
    name: 'Search',
    data() {
        return {
            store,
        }
    },
    components: {
        CountryFlag
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

            axios.get(this.store.config.urlTv,{
                params: {
                    api_key :this.store.config.keyApi,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey,
                }
            }).then((response) => {
                console.log(response) //verifica risposta api con dato input
                this.store.tvs = response.data.results;
                console.log(response.data.results)
            })
        },
        
        //switch per lingue non specificate nel pacchetto country-flag-next
        // non funziona come voluto: per queste lingue viene visualiyyato il codice paese senza bandierina
        /*computed: {    
            "movie.original_language" (){
                switch(movie.original_language){
                    case 'en':
                        return 'gb';
                    case 'he':
                        return 'il';

                    default:
                        return movie.original_language;
                }
            }
        }, */
        reset() {
            console.log('svuoto i campi');
            this.store.searchKey = '';
            this.store.movies = '';
            this.store.tvs = '';
        },
        getVote(){
            return Math.ceil(movie.vote_average / 2)
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
            <img v-if="movie.poster_path === null" src="https://picsum.photos/342/400" :alt="null">
            <img :src="store.pathImg + movie.poster_path" alt="movie_poster">
            <h3>Movie Title: {{ movie.title }}</h3>
            <h4>Original Title: {{ movie.original_title }}</h4>
            <h4>Original Language: {{ movie.original_language.toUpperCase() }}  <country-flag :country="movie.original_language" size="normal" /></h4>
            <h5>Rating: {{ Math.ceil(movie.vote_average / 2) }}</h5>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.ceil(movie.vote_average / 2)"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-Math.ceil(movie.vote_average / 2)"/>
            <br>
        </article>
        <article v-for="tv in store.tvs">
            <br>
            <img v-if="tv.poster_path === null" src="https://picsum.photos/342/400" :alt="null">
            <img :src="store.pathImg + tv.poster_path" alt="tv_poster">
            <h3>TV Series Title: {{ tv.name }}</h3>
            <h4>Original Title: {{ tv.original_name }}</h4>
            <h4>Original Language: {{ tv.original_language.toUpperCase() }}  <country-flag :country="tv.original_language" size="normal" /></h4>
            <h5>Rating: {{ Math.ceil(tv.vote_average / 2) }}</h5>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.ceil(tv.vote_average / 2)"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-Math.ceil(tv.vote_average / 2)"/>
        </article>
    </main>
</template>

<style lang="scss" scoped>

</style>