import { Router } from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";

const postRouter = Router();

postRouter
  .get("/", getPosts)
  .post("/", auth, createPost)
  .get("/:id", getPost)
  .patch("/:id", auth, updatePost)
  .delete("/:id", auth, deletePost)
  .patch("/:id/likePost", auth, likePost);

export default postRouter;
