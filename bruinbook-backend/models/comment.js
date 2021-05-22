const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: 'comment author is required'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: 'comment post is required'
    },
    comment: {
        type: String,
        required: 'comment body is required'
    }
}, { timestamps: true } );

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;