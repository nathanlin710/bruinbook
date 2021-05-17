const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create schema for account
const AccountSchema = new Schema({
    username: {
        type: String,
        required: 'username is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

//create model for account
const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;