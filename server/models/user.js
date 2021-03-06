import bcrypt from 'bcrypt-nodejs'
import mongoose from 'mongoose'

let SALT_FACTOR = 10

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type:String,
    required: true
  },
  /*createdAt: {
    type: Date,
    default:Date.now
  },*/
  displayName:{
    type:String
  }
});

let noop = function(){}

userSchema.pre("save", function(done){
  let user = this

  if(!user.isModified("password")){
    return done()
  }

  bcrypt.genSalt(SALT_FACTOR, function(err, salt){
    if (err){return done(err)}
    bcrypt.hash(user.password, salt, noop, function(err, hashedPassword){
      if (err){return done(err)}
      user.password = hashedPassword
      done()
    })
  })
})

userSchema.methods.checkPassword = function(guess, done){
  console.log("<<<< CHECK PASSWORD >>>>")
  console.log(this);
  bcrypt.compare(guess, this.password, function(err, isMatch){
    console.log(err);
    console.log(isMatch);
    done(err, isMatch)
  })
}

userSchema.methods.name = function() {
  return this.displayName || this.username
}

//let User = mongoose.model("User", userSchema)
export default mongoose.model('User', userSchema);
//export default User;
