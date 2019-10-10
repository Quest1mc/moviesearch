const express = require("express");
const router = express.Router();
const axios = require("axios");
//   .then (idMovImgArray=>{

// movieId = res.data
//   axios.get`https://api.themoviedb.org/3/movie/${movieid}?api_key=${KEY}&append_to_response=videos,images`
// console.log(res.data);
// })

const trailer = async () => {
  const KEY = "c26a39a5c6f1583ac7528dc2808421a5";
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/634649?api_key=${KEY}&append_to_response=videos,images`
    )
    .then(console.log("code to render trailer and details"));
};
/* GET movie details */
router.get("/", function(req, res, next) {
  trailer();
  res.send("this is the actually trailer");
});

module.exports = router;
//   // display movie details and video player with trailer
