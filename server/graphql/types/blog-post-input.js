import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'BlogPostInput',
  fields: {
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    post: {type:GraphQLString},
    subTitle: {type:GraphQLString},
    author: {type:GraphQLString}
  }
});
