const express = require("express");
const router = express.Router();

const youtube = require("../apis/youtube");
const tmdbDetail = require("../apis/tmdbDetail");
const cache = require("../apis/cache");
const db = require("../cache/db");

//this requires official title from tmdb call
// this requires movie id from tmdb

const isCached = async id => {
  id = parseInt(id);
  const result = db.movies.some(e => {
    // console.log( e.id ===id);
    return e.id === id;
  });

  if (db.movies.some(e => e.id === id)) {
    console.log("this is true");
    return true;
    /* vendors contains the element we're looking for */
  } else {
    console.log("this is false");
    return false;
  }
  // console.log (db.movies)
};
const AggregatedDetails = async (id, title) => {
  // const tmdb = tmdbDetail(550 = fight club )12580=izo 841 = dune
  // then((data)=> console.log(data));
  const yout = await youtube(title);
  const tmdbDet = await tmdbDetail(id);
  let jointObj = await { ...tmdbDet, ...yout };
  const pushToDb = await cache.post("/movies", jointObj);

  return jointObj;
};
//localhost:5000/movieDetail
//`localhost:5001/movies/id=req.id,req.title`

/* GET movie details */
router.get("/", async function(req, res, next) {
  const id = parseInt(req.query.id);
  const result = (await isCached(id))
    ? await db.movies.filter(e => e.id === id)
    : await AggregatedDetails(id, req.query.title);

  // .catch(function(error) {
  //   console.error(error);db.movies[req.query.id]
  // });
console.log('This preceeds the combined object which holds all the trailer and movie info', result)
  // res.send(
  //   await req.query.id === ( db.movies.id)
  //     ? db.movies / req.query.id
  //     : await AggregatedDetails(req.query.id, req.query.title)
  // );
  // console.log(req.query.id,req.query.title);

  // to test http:localhost:5000/movieDetail/id=req.query,req.title=req.query.title;
  //  this works (console.log(await AggregatedDetails(req.query.id, req.query.title));)

  res.send(result);
});

module.exports = router;

// display movie details and video player with trailer
