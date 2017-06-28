import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Posts from './views/Posts'
import Upload from './views/Upload'
import Contact from './views/Contact'
import Post from './views/Post'

import PageNotFound from './views/PageNotFound'

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
      <Route exact path='/kontakt' component={Contact}/>
      <Route exact path='/clanak/:post' component={Post}/>

      <Route exact path='*' component={PageNotFound}/>
    </Switch>
  </main>
)

export default Main
