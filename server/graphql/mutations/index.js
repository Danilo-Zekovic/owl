// import mutations here
// just folder name
import blogPost from './blog-post'
import user from './user'

// export them here as ...mutation_name
export default {
  ...blogPost,
  ...user
};
