import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (

  <div id='footer'>
    <div className='container'>
      <p>www.owl.net</p>
      <p><Link to='/upload'>Comming soon...</Link></p>
      <p>Copyright 2017</p>
    </div>
  </div>
)

export default Footer
