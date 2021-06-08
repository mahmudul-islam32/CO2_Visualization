var express= require("express");
var router = express.Router();
const random = require('random');

router.get("/" , function(req,res,next){
 function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
 }   
    
 var numbers = new Array(15)
 for (var i = 0; i < numbers.length; i++) {
   numbers[i] = randomIntInc(350, 5000)
}

res.json(numbers);
   
})


module.exports = router;