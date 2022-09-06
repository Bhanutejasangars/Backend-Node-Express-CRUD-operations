const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postId: {
    type: Number,
    required: true,
  },
  postBody: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("postData", postSchema);
