var express=require('express');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/',function(req,res){
    res.send(req.body);
    
    
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
});
app.listen(3000,function(){
    console.log('server is up on 3000 port');
});