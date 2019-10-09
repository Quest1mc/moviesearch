// Ombd is the unofficial imdb api  it can be viewed at www.omdapi.com

 const KEY='78f6f9a3'
 const axios= require('axios') ;



 
 
  axios({
     baseURL: `http://www.omdbapi.com/?apikey=${KEY}&`,
     params:{
         query:'query',
         maxResults: 1,
         key:KEY
 
     }
//      // remove later this is just a test 
// (async()=>{
//   const KEY='78f6f9a3';
//   const Query = 'spiderman';
//   console.log(await axios.create({
//     url: `http://www.omdbapi.com/?apikey=${KEY}&t=${Query}`
//   }))

    //  (async()=>{
    //     console.log(await axios({
    //       url: 'https://dog.ceo/api/breeds/list/all'
    //     }))
    //   }) ()
 });