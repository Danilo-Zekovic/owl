import passport from 'passport'
var LocalStrategy = require("passport-local").Strategy

import User from './models/user'

module.exports = function() {
  // should turn a user object into ID
  passport.serializeUser(function(user, done){
    done(null, user._id)
  })

  // should turn the ID into a user object
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user)
    })
  })
}

passport.use("login", new LocalStrategy(function(username, password, done){
  User.findOne({username:username}, function(err, user){
    if(err){return done(err)}
    if(!user){
      return done(null, false, {message:"No user has that username"})
    }
    user.checkPassword(password, function(err, isMatch){
      if(err){return done(err)}
      if(isMatch){
        return done(null, user)
      }else{
        return done(null, false, {message:"invalid password."})
      }
    })
  })
}))
