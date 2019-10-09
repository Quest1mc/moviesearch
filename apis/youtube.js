const axios =require('axios') ;


const KEY = 'AIzaSyCx6MGl7caQIK8-IGZHffPX4uLLe3wJAnM';


axios({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY

    }

    // (async()=>{
    //     console.log(await axios({
    //       url: 'https://dog.ceo/api/breeds/list/all'
    //     }))
    //   }) ()
});