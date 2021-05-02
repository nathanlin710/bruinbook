const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for post
const PostSchema = new Schema({
  content: {
    type: String,
    required: [true, 'post content is required']
  }
})

//create model for post
const Post = mongoose.model('post', PostSchema);

module.exports = Post;