// POST /math/volume/3/4/5 should render the result The volume of a 3x4x5 rectangle is 60

var express = require('express')
var router = express.Router()
var calculater = require('../logic').calculater
var sum = require('../logic').sum
router.get('/math/pi' , function(request,response){
  const pi=Math.PI
  response.send(`${pi}`)
})
router.get('/math/calculate' , function(request,response){
    var operation = request.query.operation;
    var x=parseInt(request.query.x)
    var y=parseInt(request.query.y)
    var stringResult= calculater(operation,x,y)
    response.send(stringResult)
  })
  router.post('/math/sum', function (request, response) {
    var n = request.query.n;
     stringResult=sum(n)
     response.send(stringResult)
})

router.all('/math/volume/:length/:width/:height', function(request,response,next) {
   var length = parseInt(request.params.length)
   var width=parseInt(request.params.width)
   var height=parseInt(request.params.height)
   var volume=length*width*height

   response.send(`The volume of a ${length}x${width}x${height} rectangle is ${volume}` )
   next()
})
router.post('/math/area', function (request, response) {
  var item = request.body
  var result
  var string
  if (item.type=="circle") {
        result=parseInt(item.radius) * parseInt(item.radius)*Math.PI
        string=`Area of a circle with a radius of ${item.radius} is ${result}`
  }
  else if (item.type=="rectangle") {
     result=parseInt(item.width) * parseInt(item.height)
     string=`Area of a ${item.width} x ${item.height} rectangle is ${result}`
  }
  response.send(`${string}`)
})
module.exports = router
