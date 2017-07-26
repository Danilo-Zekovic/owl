import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Loading from './Loading'

const PostsList = ({ data: {loading, error, blogPosts }}) => {
  console.log(loading + "LOADING");
  console.log(error + "ERROR");
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log(blogPosts[0])
  return (
    <div className="list-group">
      { blogPosts.map( post => <a href="#" className="list-group-item" key={post._id}>{post.title}</a> ) }
    </div>
  );
};

const PostsQuery = gql`
  query PostsQuery{
    blogPosts{
      _id
      title
    }
  }
`

const PostsListWithData = graphql(PostsQuery)(PostsList)

export default PostsListWithData
