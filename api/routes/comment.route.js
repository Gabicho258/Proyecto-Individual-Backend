import express from "express";

import { commentCtrl } from "../controllers/index.js";

const { getAllComments, createComment, getCommentsByHotel } = commentCtrl;

const router = express.Router();

const commentRoutes = {
  GET_ALL_COMMENTS: "/comments",
  GET_ALL_COMMENTS_BY_HOTEL: "/comments/:id",
  CREATE: "/comments/create/:id",
};

router.get(commentRoutes.GET_ALL_COMMENTS, getAllComments);
router.get(commentRoutes.GET_ALL_COMMENTS_BY_HOTEL, getCommentsByHotel);
router.post(commentRoutes.CREATE, createComment);

export default router;
