import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

/*class PostsList extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Trainer: React.PropTypes.object,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <Title className='tc pa5'>
          Hey {this.props.data.Post.title} <<<<<<<<<<<< !
        </Title>
      </div>
    )
  }
}*/

const PostsList = ({ data: {loading, error, blogPosts }}) => {
  console.log(loading + "LOADING");
  console.log(error + "ERROR");
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log(blogPosts)
  return <h1>{blogPosts[0].title}</h1>;
};

const PostsQuery = gql`
  query PostsQuery{
    blogPosts{
      title
    }
  }
`

const PostsListWithData = graphql(PostsQuery)(PostsList)

export default PostsListWithData
