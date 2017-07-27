import React from 'react'
import Banner from './components/Banner'
import Belt from './components/Belt'
import Quill from 'quill'
import owl from './img/owl.png'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './components/Loading'
import ErrorMessage from './components/Error'


let quill

class PostFoo extends React.Component {

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
        <Belt color="orange-belt">
          <h1 className="text-center post-title">Nice This actually works</h1>
          <h3 className="text-center post-sub-title">Nice This actually works</h3>
        </Belt>
        {/*<h3>Post: {this.props.match.params.post}</h3>*/}
        <div id="post" className="container" />
      </div>
    )
  }
}

const Post = ({ data: {loading, error, blogPost }}) => {
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
  return (
    <div>
      <Belt color="orange-belt">
        <h1 className="text-center post-title">{blogPost.title}</h1>
        <h3 className="text-center post-sub-title">Nice This actually works</h3>
      </Belt>
      <div className="container">
        {blogPost.description}
      </div>
    </div>
  );
};

const PostQuery = gql`
  query PostQuery($id:ID!){
    blogPost(id:$id){
      _id
      title
      description
    }
  }
`
/*
 * ownProps are props passed to this component
 * match.params.post is the /clanak/:post or the id of the post that is passed in url
 */
const PostWithData = graphql(PostQuery, {
  options:(ownProps) => ({
    variables:{
      id:ownProps.match.params.post
    }
  })
})(Post)

export default PostWithData
