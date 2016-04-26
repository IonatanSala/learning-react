var express = require("express");
var CommentsRouter = express.Router();
var CommentsController = require('../controllers/commentsController');

CommentsRouter.route('')
  .get(CommentsController.index)
  .post(CommentsController.create);

module.exports = CommentsRouter
