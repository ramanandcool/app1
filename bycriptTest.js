var bcrypt=require('bcrypt-nodejs');
var password='Ramanand';
// bcrypt.genSalt(10,function(err,salt){
//     console.log('error name:',err);
//     console.log('\nsalt:',salt);
//     if(err)
//         console.log(err);
//     else
//         bcrypt.hash(password,salt,null,function(err,hash){
//             if(err)
//             {
//                 console.log(err);
//             }
//             console.log(hash);
//             console.log('entered password and encrypted password are matched',bcrypt.compareSync(password,hash));
            
            
//         });
        
// });

console.log(bcrypt.compareSync('ramanand','$2a$10$IWuvS7z5kePyTVvFy5POFOZG345kuLjYgVzj4WITsTbKPLdqroqlC'));
