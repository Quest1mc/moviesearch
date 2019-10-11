const axios = require("axios");

const tmdbDetail = async movieId => {
  const KEY = "c26a39a5c6f1583ac7528dc2808421a5";
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&include_adult=false&append_to_response=videos,images`
    )
    .then(res => {
      console.log(res.data);
    });
};

module.exports = tmdbDetail;
