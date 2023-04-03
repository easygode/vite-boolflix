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
        // non funziona come voluto: per queste lingue viene visualizzato il codice paese senza bandierina
        /*computed: {    
            "movie.original_language" (){
                switch(movie.original_language){
                  case "en":
                        return "gb";
                    case "ko": 
                        return "kr";
                    case "ja": 
                        return "jp";
                    case "he": 
                        return "li";

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
        <h3 class="found">Movies found: </h3>
        <h3 class="found">TV Series found: </h3>
        <div class="cards container-fluid">
            <article>
            <div class="results d-flex">
                <div class="" v-for="movie in store.movies" >
                    <div class="card p-4 rounded">
                        <div class="card-img">
                            <img v-if="movie.poster_path === null" src="https://picsum.photos/342/512" :alt="null">
                            <img :src="store.pathImg + movie.poster_path" alt="">
                        </div>
                        <div class="card-info rounded pt-3">
                            <li>
                                <ul><h3>Movie Title: {{ movie.title }}</h3></ul>
                                <ul><h4>Original Title: {{ movie.original_title }}</h4></ul>
                                <ul><h4>Original Language: {{ movie.original_language.toUpperCase() }}  <country-flag :country="movie.original_language" size="normal" /></h4></ul>
                                <ul><h5>Rating: {{ Math.ceil(movie.vote_average / 2) }}</h5></ul>
                                <ul>
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.ceil(movie.vote_average / 2)"/>
                                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-Math.ceil(movie.vote_average / 2)"/>
                                </ul>
                            </li>  
                        </div>
                    </div>
                </div>
            </div>
            </article>
            <article>
            <div class="results d-flex">
                <div class="" v-for="tv in store.tvs" >
                    <div class="card p-4 rounded">
                        <div class="card-img">
                            <img v-if="tv.poster_path === null" src="https://picsum.photos/342/512" :alt="null">
                            <img :src="store.pathImg + tv.poster_path" alt="">
                        </div>
                        <div class="card-info rounded pt-3">
                            <li>
                                <ul><h3>TV Series Title: {{ tv.name }}</h3></ul>
                                <ul><h4>Original Title: {{ tv.original_name }}</h4></ul>
                                <ul><h4>Original Language: {{ tv.original_language.toUpperCase() }}  <country-flag :country="tv.original_language" size="normal" /></h4></ul>
                                <ul><h5>Rating: {{ Math.ceil(tv.vote_average / 2) }}</h5></ul>
                                <ul>
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.ceil(tv.vote_average / 2)"/>
                                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-Math.ceil(tv.vote_average / 2)"/>
                                </ul>
                            </li>  
                        </div>
                    </div>
                </div>
            </div>
            </article>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

.found {
    text-align: center;
    display: none;
}
.results {
    padding: 1rem;
    margin-bottom: 5rem;
}
.card-info {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: $black;
    background-color: $bluray;
    opacity: 0.9;
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    padding: 1rem;
    width: 22rem;
    height: 35rem;
    overflow-y: scroll;
}
.card {
    background-color: $bluray;
    position: relative;
    margin: 0.275rem;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    .card-img:hover {
        transform: rotateY(180deg);
    }
}
.card:hover  {    
    .card-info {
        display: block;
    }
}

.fa-star {
    color: $star;
}

</style>