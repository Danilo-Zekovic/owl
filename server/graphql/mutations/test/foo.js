import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import TestType from '../../types/test';
import TestModel from '../../../models/test';

export default {
  type: GraphQLBoolean,
  description: "Add a new Test document",
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(TestType)
    }
  },
  async resolve (root, params, options) {
    const testModel = new TestModel(params.data);
    const newTest = await testModel.save();

    if (!newTest) {
      throw new Error('Error adding new test');
    }
    return true;
  }
};
