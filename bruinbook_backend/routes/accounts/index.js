const express = require('express');
const accounts = express.Router();
const all = require('./all');
const single = require('./single');
const posts = require('./posts');

accounts.get('/', all.get);
accounts.post('/', all.post);

accounts.get('/:accountId', single.get);
accounts.patch('/:accountId', single.patch);
accounts.delete('/:accountId', single.delete);

accounts.use('/:accountId/posts', posts);

module.exports = accounts;