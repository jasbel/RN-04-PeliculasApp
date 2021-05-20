import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c5c7bce95d0cb49fa8ad3a1f7cd151cc',
        language: 'es-ES',
    }
})

export default movieDB;