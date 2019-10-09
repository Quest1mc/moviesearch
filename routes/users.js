const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.get('/detail', function(req, res, next) {
  
  res.send('this is sending a GET for  a single movie');
  console.log('this works');
});



module.exports = router;
