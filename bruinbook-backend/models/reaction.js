const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: 'reaction must have author'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: 'must react to specific post'
    },
    reactionType: {
        type: Number,
        required: 'must have reaction type'
    }
});

const Account = mongoose.model('Reaction', ReactionSchema);

module.exports = Account;