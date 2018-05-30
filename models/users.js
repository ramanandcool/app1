const bcrypt=require('bcrypt-nodejs');
const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    email:{type:String,unique:true,lowercase:true},
    password:String,
    profile:{
        name:{type:String,default:''},
        picture:{type:String,default:''}
    },
    address:String,
    history:[{date:Date,
    paid:{type:Number,default:0}
}]
});

userSchema.pre('save',function(next){
    var user=this;
    if(!user.isModified('password'))
        return next();
    bcrypt.genSalt(10,function(err,salt){
        if(err)
        return next(err);
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err)
            return next(err);
            user.password=hash;
            next();
        });
    });
});

userSchema.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password);
};

module.exports=mongoose.model('User',userSchema);
