const express=require('express');
const morgan=require('morgan');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./models/users');
var ejs =require('ejs');
var engine =require('ejs-mate');
mongoose.connect('mongodb://root:root@ds135290.mlab.com:35290/firstone1',function(err){
    if(err)
        console.log('not connected');
    else
        console.log('connected to database');
});


var app=express();
//middleware
app.use(express.static(__dirname+'/public/'));
app.engine('ejs',engine);
app.set('view engine','ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var mainRoutes = require('./routes/main');
var userRoutes=require('./routes/user');
// app.use(mainRoutes);
// app.use(userRoutes);
app.listen(3000,function(err){
    if(err)
    throw err;
    console.log('server is up on 3000');
});