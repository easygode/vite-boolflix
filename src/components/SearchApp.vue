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
            console.log('cerco...')
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
        <input type="text" placeholder="Search Film" v-model="store.searchKey">
        <button @click="search">Search</button>
        <button @click="reset" type="reset">New Search</button>
    </header>
</template>

<style lang="scss" scoped></style>