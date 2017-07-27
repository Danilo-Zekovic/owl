import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Loading from './Loading'
import ErrorMessage from './Error'

const PostsList = ({ data: {loading, error, blogPosts }}) => {
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
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
