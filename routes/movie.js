// search by name or tile in omdb
// upon return extract imdb id
// use imdb id to search in tmdb for trailer

const express = require("express");
const router = express.Router();
const axios = require("axios");

const tmdb = require("../apis/tmdb");



/* GET movie . */
router.get("/", function(req, res, next) {
  res.send("a list of all movies matching the search");

  //this works it gives an object with an array
  tmdb(req.query);
});


module.exports = router;













// possible code for video display 
// const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
//     return (
//         <div>
//             <div className="ui embed">
//                 <iframe title="video-player" src={videoSrc} ></iframe>
//             </div>
//             <div className="ui segment">
//                 <h4 className= "ui header">{ video.snippet.title}</h4>
//                 <p>
//                 {video.snippet.description}
//                 </p>
//             </div>

//         </div>
//     )

// you should have an array of matching items here
