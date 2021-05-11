const express = require('express');
const posts = express.Router({mergeParams: true});
const all = require('./all');
const single = require('./single');

posts.get('/', all.get);
posts.post('/', all.post);

posts.get('/:postId', single.get);
posts.patch('/:postId', single.patch);
posts.delete('/:postId', single.delete);


module.exports = posts;

