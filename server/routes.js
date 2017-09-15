/*
 * Danilo Zekovic
 * routes.js - module to provide server-side routing
 * routes are in Serbian as the blog itself will be writen in Serbian
 * however, you can find English equivalent in the comments
*/

import passport from 'passport'

let auth = function(req, res, next){
  if (!req.isAuthenticated())
  	res.send(401);
  else
  	next();
};

export default function ( router, server ) {
  const options = {
    root: __dirname + '/../public'
   }

   // Home
  router.get('/', function(req, res) {
    res.sendFile('index.html', options)
  })

  // About
  router.get('/o-nama', function(req, res) {
    res.sendFile('index.html', options)
  })

  // Posts
  router.get('/clanci', function(req, res) {
    res.sendFile('index.html', options)
  })

  // Upload
  router.get('/upload', function(req, res) {
    res.sendFile('index.html', options)
  })

  // Contact
  // testing authentication on contact for now
  router.get('/kontakt', auth, function(req, res) {
    res.sendFile('index.html', options)
  })

  // Post
  //router.get('/clanak*', function(req, res) {
  router.get('/clanak/:post', function(req, res) {
    res.sendFile('index.html', options)
  })

  // Login
  router.get('/login', function(req, res) {
    res.sendFile('index.html', options)
  })

  // Login the user, pass username password
  /*router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }));*/

  // route to test if the user is logged in or not
  router.get('/loggedin', function(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  });

  // route to log in
  /*app.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user);
  });*/

  // route to log out
  router.post('/logout', function(req, res){
    req.logOut();
    res.sendStatus(200);
  });

  router.post('/login', function(req, res, next){
    passport.authenticate("login", function(err, user) {

  		if(err) return next(err)
  		if(!user) {
        console.log("<<<< user not found >>>>");
  			return res.json({ success: false, message: "login failed" })
  		}
  		// ***********************************************************************
  		// "Note that when using a custom callback, it becomes the application's
  		// responsibility to establish a session (by calling req.login()) and send
  		// a response."
  		// Source: http://passportjs.org/docs
  		// ***********************************************************************
  		// Passport exposes a login() function on req (also aliased as logIn())
  		// that can be used to establish a login session
  		req.logIn(user, loginErr => {
  			if(loginErr) {
          console.log("<<<< loginErr >>>>");
  				return res.json({ success: false, message: loginErr })
  			}
        console.log("<<<< AUTHENTICATION SUCCESS >>>>");
  			return res.json({ success: true, message: "authentication succeeded" })
  		})
  	})(req, res, next)
  })

  // just testing some stuff
  let foo = 0
  router.get('/test', function(req, res){
    res.send({test:req.session, foo:foo++})
  })

}
