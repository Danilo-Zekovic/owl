import React from 'react'
// try to load an image like this: import foo from '../img/foo.png'

// I do not want to steal anyones design or anything
// I will use this graphic of owl just as an example until I get an design of my own

const Banner = () => (
  <div>
    <img src={require("../img/owl.png")} className="banner-img"/>
  </div>
)

export default Banner
