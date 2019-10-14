// const KEY = "c26a39a5c6f1583ac7528dc2808421a5";
// test = https://api.themoviedb.org/3/search/movie?api_key=c26a39a5c6f1583ac7528dc2808421a5&language=en-US&query=lion king&page=1&include_adult=false
const axios = require("axios");

const tmdb = async query => {
  const KEY = "c26a39a5c6f1583ac7528dc2808421a5";
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query.query}&page=1&include_adult=false`
    )
    .then(res => {
      // console.log(res.data);
      const idMovImgArray = res.data.results.map(item => [
        item.id,
        item.poster_path,
        item.title
      ]);
       return idMovImgArray;
    });
};

module.exports = tmdb;
