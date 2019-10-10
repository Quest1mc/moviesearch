const KEY = "c26a39a5c6f1583ac7528dc2808421a5";
const axios = require("axios");
/// example request
//https://api.themoviedb.org/3/movie/550?api_key=${KEY}

const tmdb = async query => {
  const KEY = "c26a39a5c6f1583ac7528dc2808421a5";
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query.query}&page=1&include_adult=false`
    )
    .then(res => {
      const idMovImgArray = res.data.results.map(item => [
        item.id,
        item.poster_path,
        item.title
      ]);
      console.log(idMovImgArray);
    });
};

module.exports = tmdb;
