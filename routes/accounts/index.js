const express = require('express');
const accounts = express.Router();
const all = require('./all');
const single = require('./single');

accounts.get('/', all.get);
accounts.post('/', all.post);

accounts.get('/:id', single.get);
accounts.patch('/:id', single.patch);
accounts.delete('/:id', single.delete);

module.exports = accounts;