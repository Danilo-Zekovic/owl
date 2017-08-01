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

    /*
     * argument(params.keywords) is a string of values separated by comma
     * keywords is regex expression looking for multiple strings
     */
    let keywords = "(" + params.keywords.split(',').join("|") + ")"
    const searchRegex = new RegExp(keywords, "i");

    return BlogPostModel
      .find({ $or: [ /*{ taglist: searchRegex } ,*/ { title: searchRegex },
        { description: searchRegex }] } )
      .select(projection)
      .exec();
  }
};
