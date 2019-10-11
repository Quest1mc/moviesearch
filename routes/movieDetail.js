const express = require("express");
const router = express.Router();
// const axios = require("axios");

const youtube = require("../apis/youtube");
const tmdbDetail = require("../apis/tmdbDetail");

/* GET movie details */
router.get("/", function(req, res, next) {
  tmdbDetail(movieId); // this requires movie id from tmdb
  youtube(title); //this requires official title from tmdb call
  // const checkDb =()=>{if (!title){
  //   new Movie = (...movieDetails,...movieTrailer)
  //  }}

  res.send("this is the actually trailer");
});

module.exports = router;
//   // display movie details and video player with trailer
//this works
// console.log(youtube(title +' trailer'));
