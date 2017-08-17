import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    _id: {type: GraphQLID},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
    //createdAt: {type:GraphQLString},
    displayName: {type:GraphQLString}
  }
});
