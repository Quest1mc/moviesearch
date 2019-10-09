const express = require("express");
const router = express.Router();
// const omdb = require('../apis/omdb');
// const youtube = require('../apis/youtube');
// const tmdb = require('../apis/tmdb');


/* GET movie . */
router.get('/', function(req, res, next) {
  
  res.send('this is sending a GET for  a single movie');
  console.log(req.query);
});
router.get('/trailer', function(req, res, next) {
  
    res.send('this is sending a GET for  a single movie trailer');
    console.log('this is where you fire the trailer action');
  });

module.exports = router;
