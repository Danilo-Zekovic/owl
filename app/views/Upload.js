import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill'
//import {Delta} from 'quill'
import Post from './Post'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import axios from 'axios'

import PostHeaderForm from './components/PostHeaderForm'

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
      post:'',
      title:'',
      subTitle:'',
      author:'',
      description:'',
      posted:false,
    }
    this.handleGetContent = this.handleGetContent.bind(this)
    this.addPost = this.addPost.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleGetContent(){
    // just testing some stuff
    let foo = JSON.stringify(quill.getContents())
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(target);
    console.log("<<<< INPUT CHANGE >>>>")
    console.log(this.state);

    this.setState({
      [name]: value
    });
  }

  // this adds the stuff to the db
  addPost(){
    //let data = new FormData();
    let quillPostStr = JSON.stringify(quill.getContents())
    //data.append('file', quillPostStr);
    //data.append('name', 'foobar.json');
    //let data = quill.getContents()
    //data.append('foobar', quill.getContents(), 'foo.json')
    let data = new Blob([JSON.stringify(quill.getContents())], {type : 'application/json'})
    console.log("Data >>>>");
    console.log(data);

    // why did i even think this would work https://stackoverflow.com/questions/31048215/how-to-create-txt-file-using-javascript-html5
    let file = window.URL.createObjectURL(data)
    /*axios.post('/files', data)
      .then(response => console.log(response))
      .catch(error => console.log(error));*/

    axios({
      method: 'post',
		  url: '/files',
		  data: {file:file, name:'foo'}
    })
    .then(response => {
      console.log("response >>>>");
      console.log(response);
		})
		.catch(function (error) {
      console.log("error >>>>");
		  console.log(error);
		})



    /*let quillPostStr = JSON.stringify(quill.getContents())
    this.setState({
      post: quillPostStr
    })
    console.log("<<<< ADD POST >>>>");
    this.props.mutate({variables:this.state})*/
  }

  render(){
    return(
      <div>
        <Banner />
        <div className='container'>
          <h1>Add Post</h1>
          <PostHeaderForm
            value={this.state}
            onChange={this.handleInputChange} />

          <div id='editor' ></div>
          <br/>
          <button className="btn btn-primary" onClick={this.handleGetContent}>Add To Fake Post Bellow</button>
          <br/>
          <h4>Fake Post</h4>
          <div id='fake-post'></div>
          <button onClick={this.addPost}>Save Post</button>
          {/*<Link to={'/clanak/' + this.state.post } ><button className="btn btn-primary">Open Post</button></Link>*/}
        </div>
      </div>
    )
  }
}

const addBlogPostMutation = gql`
  mutation addPost(
    $title: String!,
    $description: String!,
    $subTitle:String,
    $post:String,
    $author:String,
    $posted:Boolean
  ){
    addBlogPost(data:{
      title:$title,
      description:$description,
      subTitle:$subTitle,
      post:$post,
      author:$author,
      posted:$posted
    })
  }
`;
const AddBlogPostMutation = graphql(
  addBlogPostMutation
)(Upload);

export default AddBlogPostMutation
