import mongoose from 'mongoose';

var blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type:String
  },
  description: {
    type: String
  },
  post: {
    type: String
  },
  author: {
    type: String
  },
  posted: {
    type:Boolean,
    default:false
  }
});

export default mongoose.model('BlogPost', blogPostSchema);
