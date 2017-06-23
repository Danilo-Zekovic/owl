import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill'

let quill

class Post extends React.Component {

  componentDidMount {
    quill = new Quill('#post')
    //quill.setContents(this.props.post)
  }

  render(){
    return (
      <div>
        <Banner />
        <div id="post" />
      </div>
    )
  }
}

export default Post
