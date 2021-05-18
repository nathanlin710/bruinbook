const express = require('express');
const accounts = express.Router();
const controller = require('../controllers/accounts.controller');
const posts = require('./posts');

accounts.get('/', controller.getAll);

accounts.get('/:accountId', controller.getSingle);
accounts.patch('/:accountId', controller.patchSingle);
accounts.delete('/:accountId', controller.deleteSingle);

accounts.use('/:accountId/posts', posts);

module.exports = accounts;