import { reactive } from "vue"; //direttiva reactive

export const store = reactive({ 
    movies:[],
    moviesFound: 0,
    searchTitle:'',
})