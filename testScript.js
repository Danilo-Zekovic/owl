var bcrypt = require('bcrypt-nodejs')

var saltRounds = 10
var password = "bar"

var foo = function(done){
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(){}, function(err, hash) {
        console.log(hash);
        done()
    });
  });
}

foo(function(){
  console.log("done");
})
