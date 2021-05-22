const express = require('express');
const accounts = express.Router();
const controller = require('../controllers/accounts.controller');
const posts = require('./posts');
const following = require('./following');

accounts.get('/', controller.getAll);

accounts.get('/:accountId', controller.getSingle);
accounts.patch('/:accountId', controller.patchSingle);
accounts.delete('/:accountId', controller.deleteSingle);

accounts.get('/:accountId/feed', controller.feed);

accounts.use('/:accountId/following', following);

accounts.use('/:accountId/posts', posts);

module.exports = accounts;