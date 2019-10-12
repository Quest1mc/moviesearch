const express = require("express");
const router = express.Router();
// const axios = require("axios");

const youtube = require("../apis/youtube");
const tmdbDetail = require("../apis/tmdbDetail");

//this requires official title from tmdb call
// this requires movie id from tmdb
const AggregatedDetails = async() => {
  // const tmdb = tmdbDetail(550)
  // then((data)=> console.log(data));


const yout= await youtube("fight club");
const tmdbDet = await tmdbDetail(550);
const jointObj = { ...tmdbDet, ...yout}
// console.log( yout.items[0].id.videoId)

// return await yout;
return  jointObj ;
};
/* GET movie details */
router.get("/", async function(req, res, next) {
  await AggregatedDetails()
  .then(data=>console.log(data.items[0].id.videoId))
  // .then( post some shit to mongo )
  
  // const checkDb =()=>{if (!title){
  //   new Movie = (...movieDetails,...movieTrailer)
  //  }}

  res.send("this is the actually trailer ");
});
// let [youtubedb, tmdbDetaildb]= await Promise.all([youtube("Fight Club"), tmdbDetail(550)]);
module.exports = router;

// display movie details and video player with trailer
