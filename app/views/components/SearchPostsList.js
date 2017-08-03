import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

import Loading from './Loading'
import ErrorMessage from './Error'

const SearchPostsList = ({ data: {loading, error, searchPosts }}) => {
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
  return (
    <div className="list-group">
      { searchPosts.map( post => <Link to={"/clanak/" + post._id} className="list-group-item" key={post._id}>{post.title}</Link> ) }
    </div>
  );
};

const PostSearchQuery = gql`
  query PostSearchQuery($keywords:String!){
    searchPosts(keywords:$keywords){
      _id
      title
      description
      post
      subTitle
      author
    }
  }
`

const SearchPostsListWithData = graphql(PostSearchQuery, {
  options:(ownProps) => ({
    variables:{
      keywords:ownProps.keywords
    }
  })
})(SearchPostsList)


export default SearchPostsListWithData
