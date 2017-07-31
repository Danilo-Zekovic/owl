// graphql/types/blog-post.js
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
  name: 'BlogPost',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    post: {type:GraphQLString},
    subTitle: {type:GraphQLString},
    author: {type:GraphQLString},
    posted: {type:GraphQLBoolean}
  }
});
