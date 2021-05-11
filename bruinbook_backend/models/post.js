const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for post
const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: 'post author is required'
  },
  content: {
    type: String,
    required: 'post content is required'
  }
}, {timestamps: true})

//create model for post
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;  