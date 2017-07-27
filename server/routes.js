/*
 * Danilo Zekovic
 * routes.js - module to provide server-side routing
 * routes are in Serbian as the blog itself will be writen in Serbian
 * however, you can find English equivalent in the comments
*/

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
  router.get('/kontakt', function(req, res) {
    res.sendFile('index.html', options)
  })

  // Post
  //router.get('/clanak*', function(req, res) {
  router.get('/clanak/:post', function(req, res) {
    res.sendFile('index.html', options)
  })

}
