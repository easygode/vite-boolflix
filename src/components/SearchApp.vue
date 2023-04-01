<script>
import axios from 'axios';
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
            //console.log('cerco...');  verifica input dati per query
            //console.log(this.store.searchKey);

            axios.get(this.store.config.urlMovie,{
                params: {
                    api_key :this.store.config.keyApi,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey,
                }
            }).then((response) => {
                //console.log(response) verifica risposta api con dato input
            })
        },
        reset() {
            console.log('svuoto i campi');
            this.store.searchKey = '';
            this.store.searchStatus = '';
        }
        }
    }
</script>

<template>
    <header>
        <input type="text" placeholder="Search Film" v-model="store.searchKey">
        <button @click="search">Search</button>
        <button @click="reset" type="reset">New Search</button>
    </header>
</template>

<style lang="scss" scoped></style>