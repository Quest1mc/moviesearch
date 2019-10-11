const express = require("express");
const router = express.Router();
// const axios = require("axios");

const youtube = require("../apis/youtube");
const tmdbDetail = require("../apis/tmdbDetail");





//this requires official title from tmdb call
  // this requires movie id from tmdb
const AggregatedDetails = async () => {
  await tmdbDetail(550);
  await youtube("Fight Club");

  return console.log({ ...youtube("Fight Club"), ...tmdbDetail(550) });
};

/* GET movie details */
router.get("/", function(req, res, next) {
  AggregatedDetails();

  

  // const checkDb =()=>{if (!title){
  //   new Movie = (...movieDetails,...movieTrailer)
  //  }}

  res.send("this is the actually trailer "); 
});
// let [youtubedb, tmdbDetaildb]= await Promise.all([youtube("Fight Club"), tmdbDetail(550)]);
module.exports = router;



   // display movie details and video player with trailer


