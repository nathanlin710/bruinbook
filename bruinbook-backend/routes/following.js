const express = require('express');
const following = express.Router({mergeParams: true});
const controller = require('../controllers/following.controller')

following.get('/', controller.getAllFollowing);

following.get('/:followId', controller.isFollowing);
following.post('/:followId', controller.follow);
following.delete('/:followId', controller.unfollow);


module.exports = following;