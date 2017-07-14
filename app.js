
var express=require("express")
var app=express()
var mathRoutes = require('./routes/mathRoutes')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', mathRoutes)
app.listen(8080)
