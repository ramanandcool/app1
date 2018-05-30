var User=require('../models/users');
var router=require('express').Router();

router.get('/signup',function(req,res){
    res.render('accounts/signup');
});
router.get('/about',function(req,res){
res.end('usr get req');
});



router.post('/signup',function(req,res,next){
 var user=new user();
 user.profile.name=req.body.name;
 user.email=req.body.email;
 user.password=req.body.password;

 User.findOne({email:req.body.email},function(err,existUser){
     if(existUser)
     {
            console.log(req.body.email+'is allready existing');
            return res.redirect('/signup');
     }
     else
        {
             user.save(function(err,user){
               if(err)
                 return next(err);
                 res.json('New user has been created');
         });
     }
    });
});
module.exports=router;