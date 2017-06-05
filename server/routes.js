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

}
