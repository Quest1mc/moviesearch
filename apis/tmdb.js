const KEY = 'c26a39a5c6f1583ac7528dc2808421a5';
const axios = require('axios')
/// example request 
//https://api.themoviedb.org/3/movie/550?api_key=c26a39a5c6f1583ac7528dc2808421a5

axios({
    baseURL: `http://www.tmdb.com/?apikey=${KEY}&`,
    // https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
    params:{
        query:'query',
        maxResults: 1,
        key:KEY

    }
})