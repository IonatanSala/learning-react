var Comment = require('../models/commentsModel');

function index(req, res) {
  Comment.find(function(err, com) {
    if(err) {
      res.status(500);
      res.send("Internal server error");
    } else {
      res.status(200);
      res.send(com);
    }
  });

}

function create(req, res) {
  var comment = new Comment(req.body);

  comment.save(function(err) {
    if(err) {
      res.status(500);
      res.send("Failed");
    } else {
      res.status(201);
      res.send(comment);
    }
  });

}

module.exports = {
  index: index,
  create: create
};
