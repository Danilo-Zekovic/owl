/*
* Danilo Zekovic
* Belt.js
* Simple container for content
* it has three color options (for now), hopefuly image as well in the future
* they are pased in color prop (prop-val): blue (blue-belt), red (red-belt), and white (no props)
*/
import React from 'react'

class Belt extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mainClass:this.props.color
    }
  }
  render(){
    return (
      <div className={this.state.mainClass}>
        <div className="belt container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Belt
