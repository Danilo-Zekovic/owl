import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Test',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    text: {type: GraphQLString},
  }
});
