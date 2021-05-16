const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: 'post author is required'
  },
  content: {
    type: String,
    required: 'post content is required'
  },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;  