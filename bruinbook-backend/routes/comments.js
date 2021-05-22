const express = require('express');
const comments = express.Router({mergeParams: true});
const controller = require('../controllers/comments.controller');

comments.get('/', controller.getComments);
comments.post('/', controller.postComment);

comments.get('/:commentId', controller.getComment);
comments.delete('/:commentId', controller.deleteComment);

module.exports = comments;