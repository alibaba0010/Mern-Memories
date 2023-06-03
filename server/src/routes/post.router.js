import {Router} from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/post.controller.js';

const postRouter = Router();

postRouter
.get('/', getPosts)
.post('/', createPost)
.get('/:id', getPost)
.patch('/:id', updatePost)
.delete('/:id', deletePost)
.patch('/:id/likePost', likePost);

export default postRouter;