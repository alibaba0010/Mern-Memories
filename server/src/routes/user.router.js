import { Router } from "express";

import {signin, signup} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/signin", signin).post("/signup", signup);

export default userRouter;
