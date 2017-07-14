function sum (n){
var result=0
var stringResult=n[0]
for (var i = 0; i < n.length-1; i++) {
  result +=parseInt(n[i])
  stringResult +=` + ${n[i+1]}`
}
result +=parseInt(n[n.length-1])
stringResult +=` = ${result}`
return stringResult
}
function calculater(operation,x,y) {
  if (operation=="add" || operation==undefined) {
      var result =x+y
      var stringResult=`${x} + ${y} = ${result}`
  }
  else if (operation=="subtract" ) {
      var result =x-y
      var stringResult=`${x} - ${y} = ${result}`
  }
  else if (operation=="multiply") {
    var result =x*y
    var stringResult=`${x} * ${y} = ${result}`
  }
  else if (true) {
    var result =x / y
    var stringResult=`${x} / ${y} = ${result}`
  }
  return stringResult
}
module.exports={
  sum ,
  calculater
}
