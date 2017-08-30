import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Home from './views/Home'
import About from './views/About'
import Posts from './views/Posts'
import Upload from './views/Upload'
import Contact from './views/Contact'
import Post from './views/Post'
import Authentication from './views/Authentication'
import Admin from './views/Admin'

import PageNotFound from './views/PageNotFound'

// check to see if the user is logged in
/*function isLoggedIn(view, callback){
  axios({
    method: 'get',
    url: '/loggedin'
  })
  .then(function(response){
    console.log(response);
    if (response.data && response.data != 0){
      console.log("loged in");
      callback(view)
      //return view
      //return true
    }else{
      console.log("login please");
      callback(<Redirect to='/login' />)
      //return <Redirect to='/login' />
      //return false
    }
  })
  .catch(function (response) {
    if (response instanceof Error) {
      // Something happened in setting up the request that triggered an Error
      //console.log('Error', response.message);
      callback(<Redirect to='/login' />)
      //return <Redirect to='/login' />
      //return false
    }
  })
  //return false
}*/

// depending on logged in status it returns login page or the requested view
// takes the view component as parameter
// Ex. requireAuth(<Home />)
/*function requireAuth(view) {
  if (isLoggedIn() === false) {
    console.log("redirect to login");
    return <Redirect to='/login' />
  }else{
    console.log("go to view");
    return view
  }
}*/

/*function requireAuth(view){
  console.log("<<<< AUTH >>>>");
  console.log(sessionStorage.getItem('loggedin'));
  if (typeof(Storage) !== "undefined") {
    console.log("storage true");
    // sessionStorage supported
    if (sessionStorage.getItem('loggedin') == true){
      console.log("view");
      return view
    }else if(sessionStorage.getItem('loggedin') == null || sessionStorage.getItem('loggedin') == false){
      console.log("redirect");
      return <Redirect to='/login' />
    }
  } else {
    // Sorry! No Web Storage support..
    console.log("storage not supported");
  }
}*/

// old <main
// <main style={{marginTop:69 + 'px'}} >

// client side routes
const Main = () => (
  <main >
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/clanci' component={Posts}/>
      <Route exact path='/o-nama' component={About}/>
      <Route exact path='/upload' component={Upload}/>
      {/*<Route exact path='/kontakt' render={() => requireAuth(<Contact/>)}/>*/}
      <Route exact path='/kontakt' component={Contact}/>
      <Route exact path='/clanak/:post' component={Post}/>
      {/*<Route exact path='/login' component={Authentication}/>*/}
      <Route exact path='/admin' component={Admin}/>

      <Route exact path='*' component={PageNotFound}/>
    </Switch>
  </main>
)

export default Main
