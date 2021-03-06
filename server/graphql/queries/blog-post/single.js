// graphql/queries/blog-post/single.js
import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: blogPostType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, {}, options) {
    //const projection = getProjection(options.fieldASTs[0]);
    // Project only those properties the query has specified
    const projection = getProjection(options.fieldNodes[0]);

    return BlogPostModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
