import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

// client side routes
const Main = () => (
  <main style={{marginTop:69 + 'px'}} className='container'>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/o-nama' component={About}/>

    </Switch>
  </main>
)

export default Main
