const express = require("express");
const router = express.Router();
// import { JsonDB } from 'node-json-db';
// const { JsonDB } = require('node-json-db')
// import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
// const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
// const db = new JsonDB(new Config("movieCache", true, false, '/'));

const youtube = require("../apis/youtube");
const tmdbDetail = require("../apis/tmdbDetail");
const cache = require("../apis/cache");
// const db = require('../db');
// const fs = require('fs');

//this requires official title from tmdb call
// this requires movie id from tmdb
const AggregatedDetails = async () => {
  // const tmdb = tmdbDetail(550 = fight club )12580=izo 841 = dune
  // then((data)=> console.log(data));

  const yout = await youtube("Dune");
  const tmdbDet = await tmdbDetail(841);

  let jointObj = await { ...tmdbDet, ...yout };

  const pushToDb = await cache.post("/movies", jointObj);

  return jointObj;
};
/* GET movie details */
router.get("/", async function(req, res, next) {
  await AggregatedDetails();
  // .then(data=>console.log(data.items[0].id.videoId))
  // .then(data=>console.log(data))

  // const checkDb =()=>{if (!title){
  //   new Movie = (...movieDetails,...movieTrailer)
  //  }}

  res.send("this is the actually trailer ");
});

module.exports = router;

// display movie details and video player with trailer
