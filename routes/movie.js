// search by name or tile in omdb
// upon return extract imdb id
// use imdb id to search in tmdb for trailer

const express = require("express");
const router = express.Router();
const axios = require("axios");

const tmdb = require("../apis/tmdb");
const youtube = require("../apis/youtube");

/* GET movie . */
router.get("/", function(req, res, next) {
  res.send("a list of all movies matching the search");

  //this works it gives an object with an array
  tmdb(req.query);
  console.log(req.query);
});

module.exports = router;


// you should have an array of matching items here
