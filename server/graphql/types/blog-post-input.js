import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'BlogPostInput',
  fields: {
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    post: {type:GraphQLString},
    subTitle: {type:GraphQLString},
    author: {type:GraphQLString},
    posted: {type:GraphQLBoolean}
  }
});
