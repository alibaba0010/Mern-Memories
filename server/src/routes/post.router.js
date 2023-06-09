import { Router } from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPostsBySearch,
} from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";

const postRouter = Router();

postRouter
  .get("/", getPosts)
  .get("/search", getPostsBySearch)
  .post("/", auth, createPost)
  .get("/:id", getPost)
  .patch("/:id", auth, updatePost)
  .delete("/:id", auth, deletePost)
  .patch("/:id/likePost", auth, likePost);

export default postRouter;
