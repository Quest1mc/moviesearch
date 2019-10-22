const axios = require("axios");

const youtube = async query => {
  const KEY = "AIzaSyCx6MGl7caQIK8-IGZHffPX4uLLe3wJAnM";

  return await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}+" trailer"&type=video&key=${KEY}`
    )

    .then(res => {
      return res.data;
    });
};

module.exports = youtube;

// for testing purposes `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=dune&type=video&key=AIzaSyCx6MGl7caQIK8-IGZHffPX4uLLe3wJAnM`
// add +" trailer for accuracy as some of the movies themselves are actually on Youtube"
