import React from 'react'
import Banner from './components/Banner'
import PostsListWithData from './components/PostsList'
import UserPostSearch from './components/UserPostSearch'

const Posts = () => (
  <div>
    <Banner/>
    <div className='container'>
      <h1>Posts</h1>
      <p>Here we will see pick and choose posts to read</p>
      <PostsListWithData/>{/* display last 5 published posts. curently retruns all of them */}
      <UserPostSearch/> {/* search for posts */}
    </div>
  </div>
)

export default Posts
