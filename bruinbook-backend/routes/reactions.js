const express = require('express');
const reactions = express.Router({mergeParams: true});
const controller = require('../controllers/reactions.controller');

reactions.get('/', controller.getReactions);
reactions.post('/', controller.postReaction);

reactions.get('/:reactionAccountId', controller.getReaction);
reactions.delete('/:reactionId', controller.deleteReaction);

module.exports = reactions;