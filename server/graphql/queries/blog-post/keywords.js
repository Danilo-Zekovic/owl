import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: new GraphQLList(blogPostType),
  args: {
    keywords: {
      name: 'keywords',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (root, params, {}, options) {
    //const projection = getProjection(options.fieldASTs[0]);
    // Project only those properties the query has specified
    const projection = getProjection(options.fieldNodes[0]);

    // works for searching for a string in multiple fields/documents
    const searchRegex = new RegExp(params.keywords, "i");

    return BlogPostModel
      .find({ $or: [ /*{ taglist: searchRegex } ,*/ { title: searchRegex },
        { description: searchRegex }] } )
      .select(projection)
      .exec();
  }
};
