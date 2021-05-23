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
  imgUrl: {
    type: String,
    required: 'post image url is required'
  },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  reactions: [{type: Schema.Types.ObjectId, ref: 'Reaction'}]
}, {timestamps: true});

PostSchema.virtual('imgUniqueId').get(function() {
  return this.imgUrl.match(/\/(?<id>\w+)(\.png|\.jpg)$/).groups.id;
});

const Post = mongoose.model('Post', PostSchema);



module.exports = Post;  