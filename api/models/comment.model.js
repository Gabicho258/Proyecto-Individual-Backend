import mongoose from "mongoose";

const commentShema = {
  author_name: String,
  hotel_id: String,
  author_id: String,
  rating: Number,
  comment: String,
};

const Comment = mongoose.model("Comment", commentShema, "comments");

export default Comment;
