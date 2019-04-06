let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CommentsSchema = new Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  upvotes: Number,
  downvotes: Number
});

module.exports = mongoose.model("Comment", CommentsSchema);
