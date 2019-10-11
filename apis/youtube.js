const axios = require("axios");

const youtube = async query => {
  console.log(query);
  const KEY = "AIzaSyCx6MGl7caQIK8-IGZHffPX4uLLe3wJAnM";

  await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}+" trailer"&type=video&key=${KEY}`
    )
    //this works it gets you the id of the trailer
    .then(res => console.log(res.data.items[0].id.videoId));
};

module.exports = youtube;

// `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=dune&type=video&key=AIzaSyCx6MGl7caQIK8-IGZHffPX4uLLe3wJAnM`
