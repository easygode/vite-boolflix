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
        }
        }
    }
</script>

<template>
    <header>
        <div class="row justify-content-center g-1">
                <div class="mb-3 col-12 col-lg-auto">
                    <label for="search-character" class="form-label d-none">Search</label>
                    <input type="text" class="form-control" id="search-character" placeholder="Search here" v-model="store.searchKey">
                </div>
                <!-- Select Option for future use 
                    <div class="mb-3 col-12 col-sm-auto">
                    <label for="search-status" class="form-label d-none">Select Type</label>
                    <select class="form-select" id="search-status" v-model="store.searchStatus">
                        <option selected value>Select Type</option>
                        <option>Movies</option>
                        <option>TV Series</option>
                    </select>
                </div> -->
                <div class="mb-3 col-12 col-sm-auto">
                    <button type="search" class="btn btn-primary me-1" @click="search">Search</button>
                    <button type="reset" class="btn btn-danger" @click="reset">New Search</button>
                </div>
            </div>
    </header>
    <main>
        <div class="container-fluid">
            <div class="movie-results row-4 d-flex">
                <div class="" v-for="movie in store.movies" >
                    <div class="movie-card p-2">
                        <img v-if="movie.poster_path === null" src="https://picsum.photos/342/512" :alt="null">
                        <img :src="store.pathImg + movie.poster_path" alt="">
                        <div class="movie-info pt-3">
                            <h3>Movie Title: {{ movie.title }}</h3>
                            <h4>Original Title: {{ movie.original_title }}</h4>
                            <h4>Original Language: {{ movie.original_language.toUpperCase() }}  <country-flag :country="movie.original_language" size="normal" /></h4>
                            <h5>Rating: {{ Math.ceil(movie.vote_average / 2) }}</h5>
                            <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.ceil(movie.vote_average / 2)"/>
                            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-Math.ceil(movie.vote_average / 2)"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tv-results d-flex">
                <div class="" v-for="tv in store.tvs" >
                    <div class="tv-card p-2">
                        <img v-if="tv.poster_path === null" src="https://picsum.photos/342/512" :alt="null">
                        <img :src="store.pathImg + tv.poster_path" alt="">
                        <div class="tv-info pt-3">
                            <h3>TV Series Title: {{ tv.name }}</h3>
                            <h4>Original Title: {{ tv.original_name }}</h4>
                            <h4>Original Language: {{ tv.original_language.toUpperCase() }}  <country-flag :country="tv.original_language" size="normal" /></h4>
                            <h5>Rating: {{ Math.ceil(tv.vote_average / 2) }}</h5>
                            <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.ceil(tv.vote_average / 2)"/>
                            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-Math.ceil(tv.vote_average / 2)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>