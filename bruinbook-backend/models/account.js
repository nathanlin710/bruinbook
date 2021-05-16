const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    following: [{type: Schema.Types.ObjectId, ref: 'Account'}],
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;