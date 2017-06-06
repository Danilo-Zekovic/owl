/*
 * server-routes.js - module to provide server-side routing
*/

export default function ( router, server ) {
  const options = {
    root: __dirname + '/../public'
   }

   // Home
  router.get('/', function(req, res) {
    res.sendFile('index.html', options)
  })

  // About, but routes are in Serbian because the blog is in Serbian
  router.get('/o-nama', function(req, res) {
    res.sendFile('index.html', options)
  })

}
