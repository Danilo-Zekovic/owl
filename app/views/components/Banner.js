import React from 'react'
import owl from '../img/owl.png'
// try to load an image like this: import foo from '../img/foo.png'

// I do not want to steal anyones design or anything
// I will use this graphic of owl just as an example until I get an design of my own
//<img src={require("../img/owl.png")} className="banner-img"/>
const Banner = () => (
  <div>
    <img src={owl} className="banner-img"/>

  </div>
)

/*class Banner extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      text:"Helo World"

    }
  }

  render(){
    return (
      <div>
        <img src={this.props.owl} className="banner-img"/>
      </div>
    )
  }
}*/

export default Banner
