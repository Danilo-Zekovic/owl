import React from 'react'
import Banner from './components/Banner'
import Quill from 'quill'
import owl from './img/owl.png'

let quill

class Post extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      text:"Helo World"

    }
  }

  componentDidMount() {
    //quill = new Quill('#post')
    //quill.setContents(this.props.post)
    quill = new Quill('#post', {
      readOnly:true
    })

    quill.setContents(JSON.parse(this.props.match.params.post))
  }

  render(){
    return (
      <div>
        <Banner owl={"../img/owl.png"} />
        {/*<h3>Post: {this.props.match.params.post}</h3>*/}
        <div id="post" className="container" />
      </div>
    )
  }
}

/*const Post = ({match}) => (
  <div>
    <Foo />
    <h3>Post: {match.params.post}</h3>

  </div>
)*/

export default Post
