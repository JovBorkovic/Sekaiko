const bcrpyt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const User = require("../models/user");


// Can use this instead of the global process nodejs gives you
// 
// const ENV_PARAMETERS = require("../../nodemon.json");
// const JWT_KEY = ENV_PARAMETERS.env.JWT_KEY;
const JWT_KEY = process.env.JWT_KEY;

exports.createUser = (req, res, next) => {
    bcrpyt.hash(req.body.password, 10).then( hash => {
        const user = new User({
          email: req.body.email,
          username: req.body.username,
          password: hash,
        });
        user.save()
          .then( result => {
              res.status(201).json({ 
                  message: "User Created", 
                  result: result 
              });
          })
          .catch( err => {
            console.log(err);
            res.status(500).json({
                  message: "Invalid authentication credentials!"
              });
          });
      });
  }

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({email: req.body.email})
        .then( user => {
            if(!user){
                return res.status(404).json({
                    message: 'Auth Failed'
                });
            }
            fetchedUser = user;
            return bcrpyt.compare(req.body.password, user.password);
        })
        .then( result => {
            if(!result){
                return res.status(401).json({
                    message: 'Auth Denied'
                });
            }
            //the token holds the email as well as the UserID, 
            //which can be decoded later in check-auth to be used for creating posts. (creator) in {User}.model
            const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id, username: fetchedUser.username}, JWT_KEY, {expiresIn: '1h', });
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchedUser._id,
                username: fetchedUser.username
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            })
        });
}