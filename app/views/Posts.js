import React from 'react'
import Banner from './components/Banner'
import PostsListWithData from './components/PostsList'
/*import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';*/
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

//const client = new ApolloClient();

/*const postsListQuery = gql`
  query PostsListQuery {
    blogPosts {
      _id
      title
    }
  }
`;

const PostsListWithData = graphql(postsListQuery)(PostsList);

const PostsList = ({ data: {loading, error, posts }}) => {
  if (data.loading){
    return (<p>Loading</p>)
  }
  if (data.error){
    return (<p>Error: error</p>)
  }
  return (
    <ul>
      { data.posts.map( post => <li key={post._id}>{post.title}</li> ) }
    </ul>
  )
}*/

const Posts = () => (
  <div>
    <Banner/>
    <div className='container'>
      <h1>Posts</h1>
      <h2>Comming soon...</h2>
      <p>Here we will see pick and choose posts to read</p>
      <PostsListWithData/>
    </div>
  </div>
)

export default Posts
