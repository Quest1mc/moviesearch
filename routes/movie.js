



const express = require("express");
const router = express.Router();


const tmdb = require("../apis/tmdb");


/* GET movie . */
router.get("/", async function(req, res, next) {
  res.send(await tmdb(req.query) );

});

module.exports = router;


// you should have an array of matching items here
