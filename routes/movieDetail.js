const express = require("express");
const router = express.Router();

const youtube = require("../apis/youtube");
const tmdbDetail = require("../apis/tmdbDetail");
const cache = require("../apis/cache");
const db = require("../cache/db");


const isCached = async id => {
  id = parseInt(id);
  const result = db.movies.some(e => {
  
    return e.id === id;
  });

  if (db.movies.some(e => e.id === id)) {
    console.log("this is true");
    return true;
      } else {
    console.log("this is false");
    return false;
  }
  
};
const AggregatedDetails = async (id, title) => {
 
  const yout = await youtube(title);
  const tmdbDet = await tmdbDetail(id);
  let jointObj = await { ...tmdbDet, ...yout };
  const pushToDb = await cache.post("/movies", jointObj);

  return jointObj;
};
//localhost:5000/movieDetail
//`localhost:5001/movies/id=req.id&title=req.title`

/* GET movie details */
router.get("/", async function(req, res, next) {
  const id = parseInt(req.query.id);
  const result = (await isCached(id))
    ? await db.movies.filter(e => e.id === id)
    : await AggregatedDetails(id, req.query.title);


 

console.log('This preceeds the combined object which holds all the trailer and movie info', result)
  

  // to test http:localhost:5000/movieDetail/id=req.query,req.title=req.query.title;
  //  this works (console.log(await AggregatedDetails(req.query.id, req.query.title));)

  res.send(result);
});

module.exports = router;

// display movie details and video player with trailer
