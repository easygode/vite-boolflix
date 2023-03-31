import { reactive } from 'vue'; //direttiva reactive

export const store = reactive({ 
    config: {
        urlApi: 'https://api.themoviedb.org/3/',
        endpointMovie: '/search/movie',
        endpointTvShows: '/search/tv',
        apiKey: '908af261f8e52211132e82f969d145a4',
        defaultLang: 'it-IT'
    },
    movies:[],
    tvShows: [],
    searchKey:''
});