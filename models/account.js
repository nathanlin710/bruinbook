const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for account
const AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//create model for account
const Account = mongoose.model('account', AccountSchema);

module.exports = Account;