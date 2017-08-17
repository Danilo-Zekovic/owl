import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (

  <div id='footer'>
    <div className='container'>
      <p>Copyright © Anonimus 2017</p>
      <p>email@gmail.com</p>
      <p><Link to="/upload">Blog</Link></p>
      <p><Link to="/login">Auth</Link></p>
      <div>
        <a href="https://www.facebook.com" className="social-media-footer" target="_blank">
          <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com" className="social-media-footer" target="_blank">
          <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://plus.google.com" className="social-media-footer" target="_blank">
          <i className="fa fa-google-plus-square fa-3x" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com" className="social-media-footer" target="_blank">
          <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
)

export default Footer
