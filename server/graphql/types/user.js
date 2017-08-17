// graphql/types/blog-post.js
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {type: new GraphQLNonNull(GraphQLID)},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
    //createdAt: {type:GraphQLString},
    displayName: {type:GraphQLString}
  }
});
