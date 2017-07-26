import React from 'react'
import Banner from './components/Banner'
import PostsListWithData from './components/PostsList'

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
