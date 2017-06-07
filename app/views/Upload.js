import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill'

const quillOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
}

/*const initQuill = () => {
  var container = document.getElementById('editor');
  var editor = new Quill(container)
}*/

class Upload extends React.Component {
  //try and init the Quill in the constructor
  constructor(){
    super()
    this.state= {
      date:new Date()
    }

  }

  componentDidMount(){
    console.log("<<<< DID MOUNT >>>>");
    var quill = new Quill('#editor', quillOptions)
  }

  render(){
    return(
      <div>
        <Banner />
        <div className='container'>
          <h1>Add Post</h1>
          <h2>Comming soon...</h2>
          <div id='editor' ></div>
        </div>
      </div>
    )
  }
}

export default Upload
