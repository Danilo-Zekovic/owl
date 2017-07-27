import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill'
//import {Delta} from 'quill'
import Post from './Post'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

var Delta = Quill.import('delta')

// Quill toolbar options
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

let quill;
let quillPost;

var change = new Delta()

// Save periodically
setInterval(function() {
  if (change.length() > 0) {
    console.log('Saving changes', change);

    change = new Delta();
  }
}, 5*1000);

class Upload extends React.Component {
  //try and init the Quill in the constructor
  constructor(){
    super()
    this.state= {
      date:new Date(),
      post:'Hello World',
      //mutate:"this.props.mutate",

    }
    this.handleGetContent = this.handleGetContent.bind(this)
    this.addPost = this.addPost.bind(this)
  }

  handleGetContent(){
    //var delta = quill.getContents();
    console.log("<<<< Get Content Clicked >>>> ");
    console.log(quill.getContents())
    console.log(JSON.stringify(quill.getContents()));

    // just testing some stuff
    let foo = JSON.stringify(quill.getContents())
    console.log(foo);
    console.log(foo.length)
    let bar = JSON.parse(foo)
    this.setState({
      post:foo
    })
    // create the fake post container
    quillPost = new Quill('#fake-post', {
      readOnly:true
    })
    // add content to fake post
    quillPost.setContents(bar)//quill.getContents())
  }

  componentDidMount(){
    console.log("<<<< DID MOUNT >>>>");
     quill = new Quill('#editor', quillOptions)

    change = new Delta()
    quill.on('text-change', function(delta) {
      change = change.compose(delta);
      //console.log(quill.getContents());
    });
  }

  addPost(){
    console.log("<<<< ADD POST >>>>");
    this.props.mutate({variables:{title:'Boo', description:'Say Hi!'}})
  }

  render(){
    return(
      <div>
        <Banner />
        <div className='container'>
          <h1>Add Post</h1>
          <h2>Comming soon...</h2>
          <div id='editor' ></div>
          <br/>
          <button className="btn btn-primary" onClick={this.handleGetContent}>Add To Fake Post Bellow</button>
          <br/>
          <h4>Fake Post</h4>
          <div id='fake-post'></div>
          <button onClick={this.addPost}>FOO BAR</button>
          {/*<Link to={'/clanak/' + this.state.post } ><button className="btn btn-primary">Open Post</button></Link>*/}
        </div>
      </div>
    )
  }
}

const addBlogPostMutation = gql`
  mutation addPost($title: String!, $description: String!) {
    addBlogPost(data:{title:$title, description:$description})
  }
`;
const AddBlogPostMutation = graphql(
  addBlogPostMutation
)(Upload);

export default AddBlogPostMutation
