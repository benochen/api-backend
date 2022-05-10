const User=require("../models/user")
const bcrypt=require('bcrypt');
const user = require("../models/user");
const jwt=require('jsonwebtoken')

exports.userExists= async (mail) => {

  let dbUser = await User.findOne({email:mail}).exec();
  if(dbUser == null)
    return null;
  else {

    return dbUser.password;
  }

 
}
exports.signup = (req, res, next) => {
    console.log(req.body.password)
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(200).json({message : "User created"}))
          .catch(error => {console.log(error); res.status(400).json({ error })});
      })
     
  };



  const login = async( req,res,next) => {
  
   
     const email=req.body.email;
     const password=req.body.password;
     console.log("We check login for user "+email)
     const isValid = this.userExists(email)
     
     .then( async (passwordHashed)=>{
        if(passwordHashed==null){
          console.log("The email "+ email+"has not been found in the user database");
          return res.status(401).json(({message: "Authentication failed(1)"}))
        }

        console.log("The email "+ email+"has been found in the user database");

         const compResult= await bcrypt.compare(password,passwordHashed)
        .then(
          (compResult)=>{
              if(compResult){
                console.log("Password provided MATCHED user password")
                  return res.status(200).json({
                    userId: email,
                    token: jwt.sign({userId:email},"MY_UNSECURED_SECRET",{expiresIn:3600})
                  }
                  )

              }else{ 
                console.log("Password provided  DOES NOT MATCHED user password")

                return res.status(401).json(({message: "Authentication failed"}))
              }
           })
           .catch(error=>res.status(401).json("Authentication failed"))

      
    })

    


  };

  exports.login=login
