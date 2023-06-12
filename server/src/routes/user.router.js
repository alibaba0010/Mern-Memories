import {Router} from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter
.get('/', getPosts)
.post('/', createPost)
.get('/:id', getPost)
.patch('/:id', updatePost)
.delete('/:id', deletePost)
.patch('/:id/likePost', likePost);

export default userRouter;