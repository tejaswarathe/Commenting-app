const Comment = require("../models/models.js");

exports.create = (req, res) => {
  if (!req.body.comment) {
    return res.status(400).send({
      message: "Comment cannot be left empty"
    });
  }
  const comment = new Comment({
    username: req.body.username || "Anonymous",
    comment: req.body.comment,
    upvotes: 0,
    downvotes: 0
  });
  comment
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while submitting the comment."
      });
    });
};

exports.findAll = (req, res) => {
  Comment.find()
    .then(comments => {
      res.send(comments);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving comments."
      });
    });
};

exports.update = (req, res) => {
  Comment.findByIdAndUpdate(
    req.params.commentId,
    {
      upvotes: req.body.upvotes,
      downvotes: req.body.downvotes
    },
    { new: true }
  )
    .then(comment => {
      if (!comment) {
        return res.status(404).send({
          message: "Comment not found with Id " + req.params.commentId
        });
      }
      res.send(comment);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Comment not found with Id " + req.params.commentId
        });
      }
      return res.status(500).send({
        message: "Eroor updating comment with Id " + req.params.commentId
      });
    });
};

exports.delete = (req, res) => {
  Comment.findByIdAndRemove(req.params.commentId)
    .then(comment => {
      if (!comment) {
        return res.status(404).send({
          message: "Comment not found with id " + req.params.commentId
        });
      }
      res.send({ message: "Comment deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Comment not found with id " + req.params.commentId
        });
      }
      return res.status(500).send({
        message: "Could not delete comment with id " + req.params.commentId
      });
    });
};
