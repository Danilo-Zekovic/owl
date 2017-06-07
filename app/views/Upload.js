import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill' 


class Upload extends React.Component {
  //try and init the Quill in the constructor
  constructor(){
    super()
    this.state= {
      editor:new Quill('#editor')
    }
    this.initQuill = this.initQuill.bind(this);
  }
  // this does nothing as it is not called
  initQuill(){
    this.editor = new Quill('#editor');  // First matching element will be used
  }

  render(){
    return(
      <div>
        <Banner />
        <div className='container'>
          <h1>Add Post</h1>
          <h2>Comming soon...</h2>
          <div id='#editor' ></div>
        </div>
      </div>
    )
  }
}

export default Upload
