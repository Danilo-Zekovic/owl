import React from 'react'
import Banner from './components/Banner'

const Contact = () => (
  <div>
    <Banner/>
    <div className='container'>
      <h1>Contact Owl</h1>
      <h2>Comming soon...</h2>
      <p>Social media and other</p>
        <div>
          <a href="https://www.facebook.com" className="social-media-footer" target="_blank">
            <i className="fa fa-facebook-square fa-5x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com" className="social-media-footer" target="_blank">
            <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
          </a>
          <a href="https://plus.google.com" className="social-media-footer" target="_blank">
            <i className="fa fa-google-plus-square fa-5x" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com" className="social-media-footer" target="_blank">
            <i className="fa fa-twitter-square fa-5x" aria-hidden="true"></i>
          </a>
        </div>
    </div>
  </div>
)

export default Contact
