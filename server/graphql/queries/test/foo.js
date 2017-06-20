import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import testType from '../../types/test';
import getProjection from '../../get-projection';
import TestModel from '../../../models/test';

export default {
  type: testType,
  description: "Retrieves a single test document by its id",
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return GeoPointRecModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
