var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
 
var app = express()
 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
 
// setup the logger
// app.use(morgan('dev')); //print on console
app.use(morgan('combined', {stream: accessLogStream}));
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(3000,function(){
    console.log('server is up on 3000');
});