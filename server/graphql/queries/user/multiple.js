import {
  GraphQLList
} from 'graphql';

import userType from '../../types/user';
import getProjection from '../../get-projection';
import UserModel from '../../../models/user';

export default {
  type: new GraphQLList(userType),
  args: {},
  resolve (root, params, {}, options) {
    //const projection = getProjection(options.fieldASTs[0]);
    // Project only those properties the query has specified
    const projection = getProjection(options.fieldNodes[0]);
    return UserModel
      .find()
      .select(projection)
      .exec();
  }
};
