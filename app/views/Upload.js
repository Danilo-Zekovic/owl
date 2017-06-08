import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill'

const quillOptions = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['image', 'code-block', 'blockquote'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
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
