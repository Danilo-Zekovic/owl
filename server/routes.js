/*
 * Danilo Zekovic
 * routes.js - module to provide server-side routing
 * routes are in Serbian as the blog itself will be writen in Serbian
 * however, you can find English equivalent in the comments
*/

import passport from 'passport'
import multer from 'multer'
import cb from 'cb'
import fs from 'fs'

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

// ==== File of post uploading =================================

  let upload = multer({
    limits:{fieldSize:14*1024*1024} // I think it sets the limit to 14MB
  })

  // upload
  // express route where we receive files from the client
  // passing multer middleware
  //router.post('/files', upload.single('recfile'), (req, res) => { // old
  router.post('/files', upload.single('file'), (req, res) => {

    // TODO add authentication
    // just call something as in the /loggedin req.isAuthenticated() ? req.user : '0'
    console.log("FILES");
    let date = new Date()
    let uniqueName = './posts/' + date.getTime() + req.body.name
    //console.log(req.body);

    // write the file to posts dir
    fs.writeFile(uniqueName, req.body.file, function(err){
      if (err){
        console.log("error while writing file.");
        console.log(err);
        res.end()
      }
      res.send({
        name:uniqueName
      })
    })
  });

  // get the post, by passing the parametre post which is the pat to the requested post
  router.get('/getPost', function(req, res){
    console.log("GET THE POST");
    console.log(req.query);
    fs.readFile(req.query.post, 'utf8', function(err, data) {
      if(err) {res.status(500).send('Something broke while reading the post!')}
      res.send({
        post:data
      })
    });
  })
// =============================================================
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
