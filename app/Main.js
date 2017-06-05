import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home'

// client side routes
const Main = () => (
  <main style={{marginTop:69 + 'px'}} className='container'>
    <Switch>
      <Route exact path='/' component={Home}/>

    </Switch>
  </main>
)

export default Main
