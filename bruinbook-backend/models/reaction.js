const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
    reactionType: {
        type: Number,
        required: 'must have reaction type'
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: 'must associate account with reaction'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: 'must react to specific post'
    }
});

const Account = mongoose.model('Reaction', ReactionSchema);

module.exports = Account;