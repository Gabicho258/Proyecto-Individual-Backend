import { Comment } from "../models/index.js";

export const getAllComments = async (request, response) => {
  try {
    const comments = await Comment.find();
    if (comments.length === 0) response.status(204).send();
    else response.status(200).json(comments);
  } catch (error) {
    response.status(500).json({ error });
  }
};

export const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const newComment = await comment.save();

    newComment && res.status(201).json(newComment);
  } catch (error) {
    response.status(500).json({ error });
  }
};

export const getCommentsByHotel = async (req, res) => {
  try {
    const { id: idHotel } = req.params;
    const comments = await Comment.find({ hotel_id: idHotel });
    res.json(comments);
  } catch (error) {
    res.status(403).json({ error });
  }
};
