<script>
import { store } from '../store';
export default {
    name: 'Search',
    data() {
        return {
            store
        }
    },
    methods: {
        search (){
            console.log('cerco...cerco...cerco')
            console.log(this.store.searchKey)

        },
        reset() {
            console.log('svuoto i campi');
            this.store.searchKey = '';
            this.store.searchStatus = '';
            this.$emit('search');
        }
        }
    }
</script>

<template>
    <header>
    <div class="container">
        <div class="mb-3 col-12 col-sm-auto">
            <label for="search-character" class="form-label d-none">Search Movie</label>
            <input type="text" class="form-control" id="search-movie" placeholder="Search Movie" v-model="store.searchKey">
        </div>
        <div class="mb-3 col-12 col-sm-auto">
            <button @click="search" type="submit" class="btn btn-primary me-1">Search</button>
            <button type="reset" class="btn btn-secondary" @click.prevent="reset">Reset</button>
        </div>
    </div>
    </header>
    <main>
        <article>
            <h2>Movies and TV Shows</h2>
            <ul>
                <li v-for="result in results"></li>
                <CardApp :info="result" />
            </ul>
        </article>
    </main>

    
</template>

<style lang="scss" scoped></style>