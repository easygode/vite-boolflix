import { reactive } from 'vue'; //direttiva reactive

export const store = reactive({ 
    config: {
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        urlTv: 'https://api.themoviedb.org/3/search/tv',
        keyApi: '908af261f8e52211132e82f969d145a4',
        defaultLang: 'it-IT',
    },
    searchKey:'',
    pathImg: 'https://image.tmdb.org/t/p/w342',
});