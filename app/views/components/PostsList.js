import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Loading from './Loading'
import ErrorMessage from './Error'
import { Link } from 'react-router-dom'

const PostsList = ({ data: {loading, error, blogPosts }}) => {
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
  return (
    <div className="list-group">
      { blogPosts.map( post => <Link to={"/clanak/" + post._id} className="list-group-item" key={post._id}>{post.title}</Link> ) }
    </div>
  );
};

const PostsQuery = gql`
  query PostsQuery{
    blogPosts{
      _id
      title
      description
    }
  }
`

const PostsListWithData = graphql(PostsQuery)(PostsList)

export default PostsListWithData
