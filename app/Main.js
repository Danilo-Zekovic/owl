import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Posts from './views/Posts'
import Upload from './views/Upload'
import Contact from './views/Contact'
import Post from './views/Post'
import Authentication from './views/Authentication'

import PageNotFound from './views/PageNotFound'

// check to see if the user is logged in
function isLoggedIn(){
  return false
}

// depending on logged in status it returns login page or the requested view
// takes the view component as parameter
// Ex. requireAuth(<Home />)
function requireAuth(view) {
  if (!isLoggedIn()) {
    return <Redirect to='/login' />
  }else{
    return view
  }
}

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
      <Route exact path='/kontakt' render={() => requireAuth(<Contact/>)}/>
      <Route exact path='/clanak/:post' component={Post}/>
      <Route exact path='/login' component={Authentication}/>

      <Route exact path='*' component={PageNotFound}/>
    </Switch>
  </main>
)

export default Main
